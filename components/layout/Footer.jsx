import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold text-primary-400">
                AEE-T
              </Link>
            </div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading energy efficiency and technology solutions provider, helping organizations reduce costs and environmental impact through innovative approaches.
            </p>
            <nav className="space-y-2">
              <Link href="/about/history" className="block text-gray-300 hover:text-white transition-colors">
                Our History
              </Link>
              <Link href="/about/leadership" className="block text-gray-300 hover:text-white transition-colors">
                Leadership Team
              </Link>
              <Link href="/about/governance" className="block text-gray-300 hover:text-white transition-colors">
                Corporate Governance
              </Link>
              <Link href="/about/mission" className="block text-gray-300 hover:text-white transition-colors">
                Mission & Values
              </Link>
              <Link href="/about/suppliers" className="block text-gray-300 hover:text-white transition-colors">
                Suppliers
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <nav className="space-y-2">
              <Link href="/solutions/energy-audits" className="block text-gray-300 hover:text-white transition-colors">
                Energy Audits
              </Link>
              <Link href="/solutions/efficiency" className="block text-gray-300 hover:text-white transition-colors">
                Efficiency Solutions
              </Link>
              <Link href="/solutions/consulting" className="block text-gray-300 hover:text-white transition-colors">
                Consulting Services
              </Link>
              <Link href="/solutions/technology" className="block text-gray-300 hover:text-white transition-colors">
                Technology Integration
              </Link>
              <Link href="/solutions/monitoring" className="block text-gray-300 hover:text-white transition-colors">
                Energy Monitoring
              </Link>
              <Link href="/solutions/renewable" className="block text-gray-300 hover:text-white transition-colors">
                Renewable Energy
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <nav className="space-y-2">
              <Link href="/resources/case-studies" className="block text-gray-300 hover:text-white transition-colors">
                Case Studies
              </Link>
              <Link href="/resources/whitepapers" className="block text-gray-300 hover:text-white transition-colors">
                Whitepapers
              </Link>
              <Link href="/resources/webinars" className="block text-gray-300 hover:text-white transition-colors">
                Webinars
              </Link>
              <Link href="/resources/tools" className="block text-gray-300 hover:text-white transition-colors">
                Energy Tools
              </Link>
              <Link href="/resources/blog" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/resources/news" className="block text-gray-300 hover:text-white transition-colors">
                News & Updates
              </Link>
            </nav>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
            <nav className="space-y-2">
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/support" className="block text-gray-300 hover:text-white transition-colors">
                Customer Support
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/partners" className="block text-gray-300 hover:text-white transition-colors">
                Partner Program
              </Link>
              <Link href="/locations" className="block text-gray-300 hover:text-white transition-colors">
                Office Locations
              </Link>
            </nav>
            
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
                <Button size="sm" variant="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Links */}
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AEE-T. All rights reserved. | Building a sustainable energy future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}