"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, Play, ArrowUp, Share, Printer, Zap, Lightbulb, BarChart3, Shield, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [expandedValues, setExpandedValues] = useState([])

  const toggleValueExpansion = (value) => {
    setExpandedValues((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary-300 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight animate-fade-in">
              Transforming Energy. 
              <span className="block text-primary-300">Powering Tomorrow.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-slide-in">
              Leading the future of energy efficiency through innovative technology solutions, 
              helping organizations reduce costs and environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-4">
                Discover Our Solutions
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white animate-bounce-slow" />
        </div>
      </section>

      {/* Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Navigate to:</span>
              <select className="text-sm text-gray-700 bg-transparent border-none focus:outline-none">
                <option>Our Solutions</option>
                <option>About Us</option>
                <option>Case Studies</option>
                <option>Contact</option>
              </select>
              <ChevronDown className="w-4 h-4 text-primary-600" />
            </div>

            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowUp className="w-4 h-4" />
                <span>Top</span>
              </button>
              <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Leading Energy Efficiency section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
            Leading Energy Efficiency Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            With operations spanning across multiple continents, our team of energy experts, engineers, 
            and sustainability professionals are focused on delivering{" "}
            <span className="text-primary-600 font-medium">cutting-edge energy solutions</span> – 
            transforming how organizations consume and manage energy for over two decades.
          </p>
        </section>

        {/* Our Solutions */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-primary-600 mb-8 text-center">Our Solutions</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
            AEE-T's comprehensive approach combines advanced technology, expert consulting, and proven methodologies 
            to deliver measurable energy savings and operational efficiency improvements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">ENERGY AUDITS</CardTitle>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Energy Assessment</h3>
                <p className="text-gray-700 mb-4">
                  Advanced energy auditing services utilizing cutting-edge diagnostic tools and methodologies 
                  to identify optimization opportunities and quantify potential savings.
                </p>
                <Link href="/solutions/energy-audits" className="text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                  Learn more about Energy Audits
                  <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">EFFICIENCY SOLUTIONS</CardTitle>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrated Efficiency Systems</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive efficiency improvement programs integrating HVAC optimization, lighting upgrades, 
                  and smart building technologies for maximum performance.
                </p>
                <div className="space-y-2">
                  <Link href="/solutions/hvac" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                    HVAC Optimization
                    <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/lighting" className="block text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                    Smart Lighting Systems
                    <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <Lightbulb className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">TECHNOLOGY INTEGRATION</CardTitle>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Energy Technologies</h3>
                <p className="text-gray-700 mb-4">
                  Implementation of cutting-edge energy management systems, IoT sensors, and AI-driven 
                  analytics to optimize energy consumption and reduce operational costs.
                </p>
                <Link href="/solutions/technology" className="text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                  Explore Technology Solutions
                  <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">Our Core Values</h2>

              <div className="space-y-6">
                {[
                  { name: "Innovation", icon: <Lightbulb className="w-6 h-6" />, description: "Pioneering advanced energy solutions" },
                  { name: "Sustainability", icon: <Shield className="w-6 h-6" />, description: "Committed to environmental stewardship" },
                  { name: "Excellence", icon: <Award className="w-6 h-6" />, description: "Delivering superior results consistently" },
                  { name: "Efficiency", icon: <TrendingUp className="w-6 h-6" />, description: "Maximizing performance and cost savings" },
                ].map((value, index) => (
                  <div key={value.name} className="border-b border-gray-200 pb-6">
                    <button
                      onClick={() => toggleValueExpansion(value.name)}
                      className="flex items-center justify-between w-full text-left group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-primary-600 group-hover:text-primary-700 transition-colors">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {value.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{value.description}</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-primary-500 transition-colors">
                        <span className="text-gray-600 text-lg group-hover:text-primary-600 transition-colors">
                          {expandedValues.includes(value.name) ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    {expandedValues.includes(value.name) && (
                      <div className="mt-4 pl-10 animate-slide-in">
                        <p className="text-gray-700 leading-relaxed">
                          Our commitment to {value.name.toLowerCase()} drives everything we do, ensuring that our clients 
                          receive the most effective and innovative energy solutions available in the market today.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-light text-gray-900 mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">35%</div>
                  <div className="text-gray-600 text-sm">Average Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$50M+</div>
                  <div className="text-gray-600 text-sm">Client Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For over two decades, AEE-T has been at the forefront of energy efficiency innovation, 
                helping organizations across industries achieve significant cost savings while reducing 
                their environmental footprint.
              </p>
              <Link href="/about" className="text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                Learn more about our story
                <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white -mx-4 px-4 py-16 mb-20 rounded-2xl mx-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Transform Your Energy Future?</h2>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto text-gray-200">
              The need for efficient energy solutions is universal. That's why AEE-T engineers and consultants 
              are pioneering new technologies and methodologies to help organizations reduce costs while 
              minimizing environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                Schedule Consultation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                Download Resources
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Case Studies and Latest News */}
        <section className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-8">Featured Case Studies</h2>
            <div className="space-y-8">
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-primary-600">
                      <BarChart3 className="w-16 h-16" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    Manufacturing Facility Achieves 40% Energy Reduction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive energy efficiency upgrade resulting in significant operational cost savings 
                    and improved sustainability metrics.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">5 min read</span>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-primary-600">
                      <Lightbulb className="w-16 h-16" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    Smart Building Technology Implementation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Advanced IoT integration and AI-driven energy management systems deliver real-time 
                    optimization and predictive maintenance capabilities.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">7 min read</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-light text-primary-600 mb-8">Latest Insights</h2>
            <div className="space-y-8">
              <article className="group">
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  The Future of Energy Management: AI and IoT Integration
                </h3>
                <p className="text-gray-600 mb-3">
                  Exploring how artificial intelligence and Internet of Things technologies are revolutionizing 
                  energy efficiency and building management systems.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="text-primary-600 font-medium">Technology</span>
                  <span>8 min read</span>
                  <span>January 15, 2024</span>
                </div>
              </article>

              <article className="group">
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  Regulatory Updates: New Energy Efficiency Standards for 2024
                </h3>
                <p className="text-gray-600 mb-3">
                  Comprehensive overview of the latest regulatory changes and compliance requirements 
                  affecting energy management strategies.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="text-primary-600 font-medium">Compliance</span>
                  <span>6 min read</span>
                  <span>January 10, 2024</span>
                </div>
              </article>

              <article className="group">
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  Sustainable Energy Solutions: ROI and Environmental Impact
                </h3>
                <p className="text-gray-600 mb-3">
                  Analyzing the financial and environmental benefits of implementing comprehensive 
                  energy efficiency programs across different industry sectors.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="text-primary-600 font-medium">Sustainability</span>
                  <span>10 min read</span>
                  <span>January 5, 2024</span>
                </div>
              </article>
            </div>

            <div className="mt-8">
              <Link href="/resources/blog" className="text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                View all insights
                <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}