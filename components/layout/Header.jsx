"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isGlobalMenuOpen, setIsGlobalMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              AEE-T
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50 animate-fade-in">
                    <Link href="/solutions/energy-audits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Energy Audits
                    </Link>
                    <Link href="/solutions/efficiency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Efficiency Solutions
                    </Link>
                    <Link href="/solutions/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Consulting Services
                    </Link>
                    <Link href="/solutions/technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Technology Integration
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
                Services
              </Link>
              <Link href="/sustainability" className="text-gray-700 hover:text-primary-600 transition-colors">
                Sustainability
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-primary-600 transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop Right Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsGlobalMenuOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Global</span>
              </button>
              <Search className="w-5 h-5 text-primary-600 cursor-pointer hover:text-primary-700 transition-colors" />
              <Button size="sm" className="ml-2">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white animate-slide-in">
              <nav className="space-y-2">
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors">
                  Solutions
                </Link>
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors">
                  About
                </Link>
                <Link href="/services" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors">
                  Services
                </Link>
                <Link href="/sustainability" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors">
                  Sustainability
                </Link>
                <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors">
                  Resources
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors">
                  Contact
                </Link>
                <div className="px-4 py-2">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Global Menu Overlay */}
      {isGlobalMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                AEE-T
              </Link>
              <button 
                onClick={() => setIsGlobalMenuOpen(false)} 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-lg font-medium text-primary-600 underline">
                    AEE-T Global
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Americas</h3>
                  <div className="space-y-2">
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">United States</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Canada</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Mexico</Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Europe</h3>
                  <div className="space-y-2">
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">United Kingdom</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Germany</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">France</Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Asia Pacific</h3>
                  <div className="space-y-2">
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Japan</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Australia</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Singapore</Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Middle East & Africa</h3>
                  <div className="space-y-2">
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">UAE</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">South Africa</Link>
                    <Link href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">Saudi Arabia</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}