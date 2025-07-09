#!/usr/bin/env python3
"""
Simple example of using the AEE-T.com scraper
This shows basic usage with different configuration options
"""

from aee_t_scraper import AEETScraper

def example_basic_scraping():
    """Basic scraping example - scrape first 10 pages"""
    print("Example 1: Basic scraping (first 10 pages)")
    print("-" * 40)
    
    scraper = AEETScraper(
        base_url="https://aee-t.com",
        delay=1,  # 1 second delay between requests
        output_dir="example_output_basic"
    )
    
    # Scrape up to 10 pages
    scraper.scrape_all_pages(max_pages=10)
    scraper.save_summary_data()
    print("Basic scraping completed!\n")

def example_comprehensive_scraping():
    """Comprehensive scraping example - all pages with slower rate"""
    print("Example 2: Comprehensive scraping (all pages)")
    print("-" * 40)
    
    scraper = AEETScraper(
        base_url="https://aee-t.com",
        delay=3,  # 3 second delay - more respectful
        output_dir="example_output_comprehensive"
    )
    
    # Scrape all pages (no limit)
    scraper.scrape_all_pages()
    scraper.save_summary_data()
    print("Comprehensive scraping completed!\n")

def example_custom_domain():
    """Example for scraping a different domain"""
    print("Example 3: Custom domain scraping")
    print("-" * 40)
    
    # You can easily adapt this for any website
    custom_url = "https://example.com"  # Replace with your target site
    
    scraper = AEETScraper(
        base_url=custom_url,
        delay=2,
        output_dir="custom_domain_output"
    )
    
    # Scrape up to 5 pages for testing
    scraper.scrape_all_pages(max_pages=5)
    scraper.save_summary_data()
    print("Custom domain scraping completed!\n")

if __name__ == "__main__":
    print("AEE-T.com Web Scraper Examples")
    print("=" * 50)
    
    # Choose which example to run
    examples = {
        "1": ("Basic scraping (10 pages)", example_basic_scraping),
        "2": ("Comprehensive scraping (all pages)", example_comprehensive_scraping),
        "3": ("Custom domain example", example_custom_domain)
    }
    
    print("Available examples:")
    for key, (description, _) in examples.items():
        print(f"  {key}: {description}")
    
    choice = input("\nEnter your choice (1-3) or press Enter for basic example: ").strip()
    
    if choice in examples:
        _, example_func = examples[choice]
        example_func()
    elif choice == "":
        example_basic_scraping()
    else:
        print("Invalid choice. Running basic example...")
        example_basic_scraping()
    
    print("All examples completed!")