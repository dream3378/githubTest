#!/usr/bin/env python3
"""
Setup script for AEE-T.com Web Scraper
This script installs dependencies and verifies the setup
"""

import subprocess
import sys
import os

def install_requirements():
    """Install required packages"""
    try:
        print("Installing required packages...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✓ Dependencies installed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error installing dependencies: {e}")
        return False
    except FileNotFoundError:
        print("✗ requirements.txt file not found!")
        return False

def test_imports():
    """Test if all required modules can be imported"""
    try:
        print("Testing imports...")
        import requests
        import bs4
        from urllib.parse import urljoin
        print("✓ All modules imported successfully!")
        return True
    except ImportError as e:
        print(f"✗ Import error: {e}")
        return False

def create_output_directories():
    """Create necessary output directories"""
    try:
        dirs = ["aee_t_scraped_data", "example_output_basic", "example_output_comprehensive"]
        for dir_name in dirs:
            os.makedirs(dir_name, exist_ok=True)
        print("✓ Output directories created!")
        return True
    except Exception as e:
        print(f"✗ Error creating directories: {e}")
        return False

def main():
    """Main setup function"""
    print("AEE-T.com Web Scraper Setup")
    print("=" * 40)
    
    success = True
    
    # Install dependencies
    if not install_requirements():
        success = False
    
    # Test imports
    if not test_imports():
        success = False
    
    # Create directories
    if not create_output_directories():
        success = False
    
    print("\n" + "=" * 40)
    
    if success:
        print("✓ Setup completed successfully!")
        print("\nYou can now run the scraper with:")
        print("  python aee_t_scraper.py")
        print("  python simple_example.py")
    else:
        print("✗ Setup failed. Please check the errors above.")
        sys.exit(1)

if __name__ == "__main__":
    main()