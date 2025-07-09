# AEE-T.com Web Scraper

A comprehensive Python web scraper built with BeautifulSoup to extract text content from all pages of https://aee-t.com (or any website). This scraper includes proper rate limiting, robots.txt compliance checking, error handling, and multiple output formats.

## Features

- **Comprehensive Text Extraction**: Extracts titles, headings, paragraphs, meta descriptions, and all text content
- **Robots.txt Compliance**: Checks and respects robots.txt directives
- **Rate Limiting**: Configurable delays between requests to be respectful to the target server
- **Error Handling**: Robust error handling with retry logic and failure tracking
- **Multiple Output Formats**: Saves data in JSON, CSV, and individual text files
- **Progress Tracking**: Real-time logging and progress updates
- **Link Discovery**: Automatically discovers and follows internal links
- **Customizable**: Easy to configure for different websites and scraping parameters

## Installation

1. **Clone or download the script files:**
   ```bash
   # Download the files: aee_t_scraper.py, requirements.txt, simple_example.py
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

   Or install manually:
   ```bash
   pip install requests beautifulsoup4 lxml
   ```

3. **Make the script executable (optional):**
   ```bash
   chmod +x aee_t_scraper.py
   ```

## Quick Start

### Basic Usage

```python
from aee_t_scraper import AEETScraper

# Create scraper instance
scraper = AEETScraper(
    base_url="https://aee-t.com",
    delay=2,  # 2 seconds between requests
    output_dir="scraped_data"
)

# Scrape all pages
scraper.scrape_all_pages()
scraper.save_summary_data()
```

### Command Line Usage

```bash
# Run the main scraper
python aee_t_scraper.py

# Run examples
python simple_example.py
```

## Configuration Options

### AEETScraper Parameters

- `base_url` (str): The website URL to scrape (default: "https://aee-t.com")
- `delay` (float): Delay between requests in seconds (default: 1)
- `output_dir` (str): Directory to save scraped data (default: "aee_t_scraped_data")

### Scraping Parameters

- `max_pages` (int/None): Maximum number of pages to scrape (None = unlimited)

## Output Files

The scraper creates several output files in the specified directory:

### 1. Individual Text Files (`text_files/`)
- One `.txt` file per scraped page
- Contains URL, title, meta description, headings, and full content
- Filenames are sanitized versions of the URL path

### 2. Combined Data Files
- `scraped_data.json`: Structured JSON data with all extracted information
- `scraped_data.csv`: Summary spreadsheet with key metrics
- `all_content_combined.txt`: All page content in a single text file

### 3. Log Files
- `scraper.log`: Detailed execution log with timestamps and status updates

## Examples

### Example 1: Basic Scraping (Limited Pages)

```python
from aee_t_scraper import AEETScraper

scraper = AEETScraper(delay=1, output_dir="basic_output")
scraper.scrape_all_pages(max_pages=10)  # Scrape first 10 pages
scraper.save_summary_data()
```

### Example 2: Comprehensive Scraping

```python
from aee_t_scraper import AEETScraper

scraper = AEETScraper(delay=3, output_dir="comprehensive_output")
scraper.scrape_all_pages()  # Scrape all pages
scraper.save_summary_data()
```

### Example 3: Custom Website

```python
from aee_t_scraper import AEETScraper

scraper = AEETScraper(
    base_url="https://your-website.com",
    delay=2,
    output_dir="custom_output"
)
scraper.scrape_all_pages(max_pages=50)
scraper.save_summary_data()
```

## Data Structure

### JSON Output Structure

```json
{
  "url": "https://aee-t.com/page",
  "title": "Page Title",
  "meta_description": "Page description",
  "headings": [
    {"level": "h1", "text": "Main Heading"},
    {"level": "h2", "text": "Sub Heading"}
  ],
  "paragraphs": ["Paragraph 1 text", "Paragraph 2 text"],
  "all_text": "Complete page text content"
}
```

## Best Practices & Ethics

### Responsible Scraping
- **Rate Limiting**: Always use reasonable delays (2-5 seconds recommended)
- **Robots.txt**: The scraper checks robots.txt automatically
- **Server Load**: Monitor server response times and adjust delays if needed
- **Terms of Service**: Review the website's terms of service before scraping

### Legal Considerations
- Ensure you have permission to scrape the website
- Respect copyright and intellectual property rights
- Consider privacy implications of the data you're collecting
- Be aware of applicable laws in your jurisdiction

### Technical Recommendations
- Start with a small number of pages to test the scraper
- Monitor the scraper's log files for errors or issues
- Use longer delays for production scraping
- Consider running during off-peak hours

## Error Handling

The scraper includes comprehensive error handling:

- **Network Errors**: Automatic retry with exponential backoff
- **HTTP Errors**: Proper status code handling and logging
- **Parsing Errors**: Graceful handling of malformed HTML
- **File I/O Errors**: Safe file operations with error recovery

## Troubleshooting

### Common Issues

1. **Connection Errors**
   - Check your internet connection
   - Verify the website URL is correct
   - Try increasing the delay between requests

2. **Empty Results**
   - Check if the website blocks automated requests
   - Verify robots.txt permissions
   - Try using a different User-Agent string

3. **Slow Performance**
   - Reduce the delay for faster scraping (but be respectful)
   - Limit the number of pages with `max_pages`
   - Check your internet speed

### Debug Mode

Enable detailed logging by modifying the logging level:

```python
import logging
logging.getLogger().setLevel(logging.DEBUG)
```

## Customization

### Adding New Extractors

You can extend the `extract_text_content` method to extract additional elements:

```python
def extract_text_content(self, soup, url):
    # ... existing code ...
    
    # Add custom extraction
    content['images'] = [img.get('src') for img in soup.find_all('img')]
    content['tables'] = [table.get_text() for table in soup.find_all('table')]
    
    return content
```

### Custom Filtering

Add custom URL filtering in the `is_valid_url` method:

```python
def is_valid_url(self, url):
    # ... existing code ...
    
    # Add custom filters
    if '/admin/' in url or '/private/' in url:
        return False
    
    return True
```

## Dependencies

- `requests`: HTTP library for making web requests
- `beautifulsoup4`: HTML parsing and extraction
- `lxml`: Fast XML and HTML parser (optional but recommended)

## License

This script is provided as-is for educational and legitimate use cases. Users are responsible for ensuring their use complies with applicable laws and website terms of service.

## Contributing

Feel free to submit issues, suggestions, or improvements. When contributing:

1. Ensure code follows Python best practices
2. Add appropriate error handling
3. Update documentation for new features
4. Test with various websites

## Disclaimer

This tool is for educational and legitimate research purposes only. Users must:
- Respect robots.txt files and terms of service
- Use appropriate delays to avoid overloading servers
- Comply with applicable laws and regulations
- Obtain necessary permissions before scraping websites

The authors are not responsible for misuse of this tool.