#!/usr/bin/env python3
"""
AEE-T.com Web Scraper
This script downloads all text content from pages on https://aee-t.com
using BeautifulSoup and requests with proper error handling and rate limiting.
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from urllib.robotparser import RobotFileParser
import time
import os
import json
import csv
import re
from collections import deque
import logging
from datetime import datetime

class AEETScraper:
    def __init__(self, base_url="https://aee-t.com", delay=1, output_dir="aee_t_scraped_data"):
        """
        Initialize the scraper
        
        Args:
            base_url (str): The base URL to scrape
            delay (float): Delay between requests in seconds
            output_dir (str): Directory to save scraped data
        """
        self.base_url = base_url
        self.delay = delay
        self.output_dir = output_dir
        self.visited_urls = set()
        self.failed_urls = set()
        self.page_data = []
        
        # Create output directory
        os.makedirs(output_dir, exist_ok=True)
        os.makedirs(os.path.join(output_dir, "text_files"), exist_ok=True)
        
        # Setup logging
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler(os.path.join(output_dir, 'scraper.log')),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)
        
        # Setup session with headers
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        })
        
        self.logger.info(f"Scraper initialized for {base_url}")
        
    def check_robots_txt(self):
        """Check robots.txt to ensure we're allowed to scrape"""
        try:
            robots_url = urljoin(self.base_url, '/robots.txt')
            rp = RobotFileParser()
            rp.set_url(robots_url)
            rp.read()
            
            # Check if we can fetch the main page
            can_fetch = rp.can_fetch('*', self.base_url)
            self.logger.info(f"Robots.txt check: {'Allowed' if can_fetch else 'Disallowed'}")
            return can_fetch
        except Exception as e:
            self.logger.warning(f"Could not check robots.txt: {e}")
            return True  # Assume allowed if we can't check
    
    def is_valid_url(self, url):
        """Check if URL is valid and belongs to the target domain"""
        try:
            parsed = urlparse(url)
            return (parsed.netloc == urlparse(self.base_url).netloc and 
                    url not in self.visited_urls and 
                    url not in self.failed_urls)
        except:
            return False
    
    def clean_text(self, text):
        """Clean and normalize text content"""
        if not text:
            return ""
        
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        # Remove leading/trailing whitespace
        text = text.strip()
        return text
    
    def extract_text_content(self, soup, url):
        """Extract meaningful text content from BeautifulSoup object"""
        # Remove script and style elements
        for script in soup(["script", "style", "nav", "footer", "header"]):
            script.decompose()
        
        # Extract different types of content
        content = {
            'url': url,
            'title': '',
            'headings': [],
            'paragraphs': [],
            'links': [],
            'meta_description': '',
            'all_text': ''
        }
        
        # Extract title
        title_tag = soup.find('title')
        if title_tag:
            content['title'] = self.clean_text(title_tag.get_text())
        
        # Extract meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            content['meta_description'] = self.clean_text(meta_desc.get('content', ''))
        
        # Extract headings
        for heading in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
            heading_text = self.clean_text(heading.get_text())
            if heading_text:
                content['headings'].append({
                    'level': heading.name,
                    'text': heading_text
                })
        
        # Extract paragraphs
        for p in soup.find_all('p'):
            p_text = self.clean_text(p.get_text())
            if p_text and len(p_text) > 10:  # Filter out very short paragraphs
                content['paragraphs'].append(p_text)
        
        # Extract all text content
        content['all_text'] = self.clean_text(soup.get_text())
        
        return content
    
    def find_links(self, soup, current_url):
        """Find all internal links on the page"""
        links = set()
        
        for link in soup.find_all('a', href=True):
            href = link['href']
            absolute_url = urljoin(current_url, href)
            
            if self.is_valid_url(absolute_url):
                links.add(absolute_url)
        
        return links
    
    def scrape_page(self, url):
        """Scrape a single page"""
        try:
            self.logger.info(f"Scraping: {url}")
            
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            
            # Check content type
            content_type = response.headers.get('content-type', '').lower()
            if 'text/html' not in content_type:
                self.logger.warning(f"Skipping non-HTML content: {url}")
                return set()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract content
            content = self.extract_text_content(soup, url)
            self.page_data.append(content)
            
            # Save individual page text
            safe_filename = re.sub(r'[^\w\-_.]', '_', urlparse(url).path.strip('/') or 'index')
            text_file_path = os.path.join(self.output_dir, "text_files", f"{safe_filename}.txt")
            
            with open(text_file_path, 'w', encoding='utf-8') as f:
                f.write(f"URL: {url}\n")
                f.write(f"Title: {content['title']}\n")
                f.write(f"Meta Description: {content['meta_description']}\n")
                f.write("=" * 80 + "\n\n")
                
                if content['headings']:
                    f.write("HEADINGS:\n")
                    for heading in content['headings']:
                        f.write(f"{heading['level'].upper()}: {heading['text']}\n")
                    f.write("\n")
                
                f.write("CONTENT:\n")
                f.write(content['all_text'])
            
            # Find new links
            new_links = self.find_links(soup, url)
            self.visited_urls.add(url)
            
            self.logger.info(f"Successfully scraped {url} - Found {len(new_links)} new links")
            return new_links
            
        except requests.exceptions.RequestException as e:
            self.logger.error(f"Request failed for {url}: {e}")
            self.failed_urls.add(url)
            return set()
        except Exception as e:
            self.logger.error(f"Unexpected error scraping {url}: {e}")
            self.failed_urls.add(url)
            return set()
    
    def scrape_all_pages(self, max_pages=None):
        """Scrape all pages starting from the base URL"""
        if not self.check_robots_txt():
            self.logger.warning("Robots.txt disallows scraping. Proceed with caution.")
        
        # Initialize with base URL
        urls_to_visit = deque([self.base_url])
        pages_scraped = 0
        
        while urls_to_visit and (max_pages is None or pages_scraped < max_pages):
            current_url = urls_to_visit.popleft()
            
            if current_url in self.visited_urls or current_url in self.failed_urls:
                continue
            
            # Rate limiting
            time.sleep(self.delay)
            
            # Scrape the page
            new_links = self.scrape_page(current_url)
            
            # Add new links to the queue
            for link in new_links:
                if link not in self.visited_urls and link not in self.failed_urls:
                    urls_to_visit.append(link)
            
            pages_scraped += 1
            
            if pages_scraped % 10 == 0:
                self.logger.info(f"Progress: {pages_scraped} pages scraped, {len(urls_to_visit)} in queue")
        
        self.logger.info(f"Scraping completed. Total pages: {pages_scraped}")
    
    def save_summary_data(self):
        """Save summary data to JSON and CSV files"""
        # Save to JSON
        json_file = os.path.join(self.output_dir, "scraped_data.json")
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(self.page_data, f, indent=2, ensure_ascii=False)
        
        # Save to CSV
        csv_file = os.path.join(self.output_dir, "scraped_data.csv")
        with open(csv_file, 'w', newline='', encoding='utf-8') as f:
            if self.page_data:
                fieldnames = ['url', 'title', 'meta_description', 'headings_count', 'paragraphs_count', 'content_length']
                writer = csv.DictWriter(f, fieldnames=fieldnames)
                writer.writeheader()
                
                for page in self.page_data:
                    writer.writerow({
                        'url': page['url'],
                        'title': page['title'],
                        'meta_description': page['meta_description'],
                        'headings_count': len(page['headings']),
                        'paragraphs_count': len(page['paragraphs']),
                        'content_length': len(page['all_text'])
                    })
        
        # Save combined text file
        combined_file = os.path.join(self.output_dir, "all_content_combined.txt")
        with open(combined_file, 'w', encoding='utf-8') as f:
            f.write(f"AEE-T.com Content Extraction\n")
            f.write(f"Extracted on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write(f"Total pages: {len(self.page_data)}\n")
            f.write("=" * 80 + "\n\n")
            
            for page in self.page_data:
                f.write(f"URL: {page['url']}\n")
                f.write(f"Title: {page['title']}\n")
                f.write("-" * 80 + "\n")
                f.write(page['all_text'])
                f.write("\n\n" + "=" * 80 + "\n\n")
        
        self.logger.info(f"Summary data saved to {self.output_dir}")
        
        # Print statistics
        print(f"\nScraping Statistics:")
        print(f"Pages successfully scraped: {len(self.page_data)}")
        print(f"Pages failed: {len(self.failed_urls)}")
        print(f"Output directory: {self.output_dir}")
        print(f"Files created:")
        print(f"  - scraped_data.json: Structured data")
        print(f"  - scraped_data.csv: Summary spreadsheet")
        print(f"  - all_content_combined.txt: All text content")
        print(f"  - text_files/: Individual page text files")

def main():
    """Main function to run the scraper"""
    print("AEE-T.com Web Scraper")
    print("=" * 50)
    
    # Configuration
    base_url = "https://aee-t.com"
    delay = 2  # seconds between requests
    max_pages = None  # Set to a number to limit pages, None for unlimited
    
    # Create scraper instance
    scraper = AEETScraper(base_url=base_url, delay=delay)
    
    try:
        # Start scraping
        print(f"Starting to scrape {base_url}")
        print(f"Rate limit: {delay} seconds between requests")
        print(f"Max pages: {'Unlimited' if max_pages is None else max_pages}")
        print("-" * 50)
        
        scraper.scrape_all_pages(max_pages=max_pages)
        scraper.save_summary_data()
        
        print("\nScraping completed successfully!")
        
    except KeyboardInterrupt:
        print("\nScraping interrupted by user")
        scraper.save_summary_data()
    except Exception as e:
        print(f"\nUnexpected error: {e}")
        scraper.save_summary_data()

if __name__ == "__main__":
    main()