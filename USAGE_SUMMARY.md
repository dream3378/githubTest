# AEE-T.com Web Scraper - Quick Usage Guide

## What This Script Does

This BeautifulSoup web scraper downloads all text content from https://aee-t.com (or any website you specify). It:

- Automatically discovers and follows all internal links
- Extracts text content, headings, titles, and meta descriptions
- Saves data in multiple formats (JSON, CSV, individual text files)
- Includes proper rate limiting and robots.txt compliance
- Provides comprehensive logging and error handling

## Files Included

- `aee_t_scraper.py` - Main scraper script
- `simple_example.py` - Usage examples
- `requirements.txt` - Required Python packages
- `setup.py` - Automated setup script
- `README.md` - Complete documentation

## Quick Start

### 1. Install Dependencies

```bash
# Method 1: Using pip
pip install requests beautifulsoup4 lxml

# Method 2: Using system packages (Ubuntu/Debian)
sudo apt install python3-requests python3-bs4 python3-lxml

# Method 3: Using the setup script
python3 setup.py
```

### 2. Run the Scraper

```bash
# Basic run - scrapes all pages from aee-t.com
python3 aee_t_scraper.py

# Run examples with different configurations
python3 simple_example.py
```

### 3. Check Results

The scraper creates a directory `aee_t_scraped_data/` with:
- `scraped_data.json` - Structured data
- `scraped_data.csv` - Summary spreadsheet  
- `all_content_combined.txt` - All text in one file
- `text_files/` - Individual page files
- `scraper.log` - Execution log

## Simple Custom Usage

```python
from aee_t_scraper import AEETScraper

# Create scraper for any website
scraper = AEETScraper(
    base_url="https://your-target-website.com",
    delay=2,  # 2 seconds between requests
    output_dir="my_scraped_data"
)

# Scrape limited pages for testing
scraper.scrape_all_pages(max_pages=10)
scraper.save_summary_data()
```

## Important Notes

- **Rate Limiting**: Default 2-second delay between requests
- **Robots.txt**: Automatically checked and respected
- **Error Handling**: Failed URLs are logged and retried
- **Output**: Multiple file formats for different use cases
- **Customizable**: Easy to modify for different websites

## Ethical Usage

✅ **Good Practices:**
- Use reasonable delays (2+ seconds)
- Respect robots.txt files
- Check website terms of service
- Start with small page limits for testing

❌ **Avoid:**
- Overwhelming servers with rapid requests
- Ignoring robots.txt restrictions
- Scraping private or sensitive content
- Commercial use without permission

## Troubleshooting

**Module Import Errors:**
```bash
# Install missing packages
pip install requests beautifulsoup4 lxml
```

**Permission Errors:**
```bash
# Use virtual environment
python3 -m venv scraper_env
source scraper_env/bin/activate
pip install -r requirements.txt
```

**Slow Performance:**
- Reduce delay time (but stay respectful)
- Limit pages with `max_pages` parameter
- Check internet connection

## Example Output Structure

```
aee_t_scraped_data/
├── scraped_data.json          # Complete structured data
├── scraped_data.csv           # Summary spreadsheet
├── all_content_combined.txt   # All text combined
├── scraper.log               # Execution log
└── text_files/               # Individual page files
    ├── index.txt
    ├── about.txt
    └── contact.txt
```

Ready to scrape responsibly! 🕷️