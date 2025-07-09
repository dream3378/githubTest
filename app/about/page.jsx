"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Users, Award, Globe, TrendingUp, Lightbulb, Shield, Target, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Powering a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              For over 25 years, AEE-T has been at the forefront of energy efficiency innovation, 
              transforming how organizations approach energy management and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: "story", label: "Our Story" },
              { id: "mission", label: "Mission & Values" },
              { id: "leadership", label: "Leadership" },
              { id: "impact", label: "Global Impact" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary-600 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story Tab */}
        {activeTab === "story" && (
          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-light text-gray-900 mb-8">Our Journey</h2>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Founded in 1998, AEE-T began as a small team of passionate engineers and sustainability 
                    experts with a simple yet ambitious vision: to revolutionize how the world consumes and 
                    manages energy.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    From our humble beginnings as a regional energy consulting firm, we have evolved into a 
                    global leader in energy efficiency technology, serving Fortune 500 companies, government 
                    agencies, and organizations across multiple continents.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, our innovative solutions have helped clients achieve over <strong>$50 million in 
                    cumulative energy cost savings</strong> while reducing carbon emissions by more than 
                    <strong> 2 million tons CO2 equivalent</strong>.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Milestones</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">1998</div>
                        <div className="text-gray-700 text-sm">Company founded with 3 engineers</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2005</div>
                        <div className="text-gray-700 text-sm">First major industrial client partnership</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2012</div>
                        <div className="text-gray-700 text-sm">International expansion begins</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2018</div>
                        <div className="text-gray-700 text-sm">AI and IoT technology integration</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2024</div>
                        <div className="text-gray-700 text-sm">500+ successful projects completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-gray-900 mb-12">Why We Exist</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      <Globe className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe in creating a sustainable future through responsible energy consumption 
                      and innovative efficiency solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      <TrendingUp className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Value</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our solutions deliver measurable cost savings while improving operational efficiency 
                      and competitive advantage.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      <Lightbulb className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Drive</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We continuously push the boundaries of what's possible in energy efficiency through 
                      cutting-edge technology and methodologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {/* Mission & Values Tab */}
        {activeTab === "mission" && (
          <div className="space-y-16">
            <section>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-900 mb-6">Our Mission</h2>
                <p className="text-2xl text-primary-600 font-light max-w-4xl mx-auto leading-relaxed">
                  To accelerate the global transition to sustainable energy practices through innovative 
                  technology solutions and expert consulting services.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12">
                <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Vision</h3>
                <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                  A world where every organization operates at peak energy efficiency, contributing to a 
                  sustainable, prosperous, and environmentally responsible future.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Lightbulb className="w-8 h-8" />,
                    title: "Innovation",
                    description: "Pioneering breakthrough technologies and methodologies in energy efficiency."
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Integrity",
                    description: "Maintaining the highest ethical standards in all our professional relationships."
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Excellence",
                    description: "Delivering superior results through expertise, precision, and attention to detail."
                  },
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: "Sustainability",
                    description: "Committed to environmental stewardship and long-term ecological responsibility."
                  }
                ].map((value, index) => (
                  <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                        <div className="text-primary-600">{value.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Commitment</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">To Our Clients</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span>Delivering measurable results and tangible value</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span>Providing transparent, data-driven insights and recommendations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span>Maintaining long-term partnerships based on trust and mutual success</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">To Our Planet</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span>Reducing global carbon emissions through energy efficiency</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span>Promoting renewable energy adoption and sustainable practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span>Contributing to global climate action and environmental preservation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === "leadership" && (
          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">Executive Leadership</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Our leadership team brings together decades of experience in energy engineering, 
                sustainability consulting, and technology innovation.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Dr. Sarah Chen",
                    role: "Chief Executive Officer",
                    experience: "25+ years in energy systems",
                    education: "Ph.D. Mechanical Engineering, MIT",
                    expertise: "Energy efficiency, sustainable technology"
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Chief Technology Officer",
                    experience: "20+ years in tech innovation",
                    education: "M.S. Computer Science, Stanford",
                    expertise: "AI/ML, IoT systems, data analytics"
                  },
                  {
                    name: "Dr. James Wilson",
                    role: "VP of Engineering",
                    experience: "18+ years in engineering",
                    education: "Ph.D. Environmental Engineering",
                    expertise: "HVAC systems, building automation"
                  },
                  {
                    name: "Lisa Thompson",
                    role: "VP of Operations",
                    experience: "15+ years in project management",
                    education: "MBA, Wharton School",
                    expertise: "Operations, client relations"
                  },
                  {
                    name: "Dr. Ahmed Hassan",
                    role: "Director of Research",
                    experience: "12+ years in R&D",
                    education: "Ph.D. Energy Systems",
                    expertise: "Renewable energy, sustainability"
                  },
                  {
                    name: "Maria Gonzalez",
                    role: "VP of Business Development",
                    experience: "14+ years in business strategy",
                    education: "MBA, Harvard Business School",
                    expertise: "Strategic partnerships, market expansion"
                  }
                ].map((leader, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{leader.name}</h3>
                      <p className="text-primary-600 font-medium text-center mb-4">{leader.role}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><strong>Experience:</strong> {leader.experience}</p>
                        <p><strong>Education:</strong> {leader.education}</p>
                        <p><strong>Expertise:</strong> {leader.expertise}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-primary-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Advisory Board</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                Our distinguished advisory board provides strategic guidance and industry expertise 
                to ensure we remain at the forefront of energy efficiency innovation.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Veterans</h3>
                  <p className="text-gray-600">
                    Former executives from leading energy companies and technology firms who provide 
                    strategic market insights and industry connections.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Experts</h3>
                  <p className="text-gray-600">
                    Renowned professors and researchers from top universities who ensure our solutions 
                    are grounded in the latest scientific advances.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Global Impact Tab */}
        {activeTab === "impact" && (
          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">Our Global Impact</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Through our comprehensive energy efficiency solutions, we've made a measurable impact 
                on organizations and communities worldwide.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                  <div className="text-sm text-gray-500 mt-1">Across 25 countries</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">$50M+</div>
                  <div className="text-gray-600">Cost Savings Generated</div>
                  <div className="text-sm text-gray-500 mt-1">For our clients</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">2M+</div>
                  <div className="text-gray-600">Tons CO2 Reduced</div>
                  <div className="text-sm text-gray-500 mt-1">Environmental impact</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">35%</div>
                  <div className="text-gray-600">Average Energy Savings</div>
                  <div className="text-sm text-gray-500 mt-1">Per project</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Geographic Presence</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">North America</span>
                      <span className="text-primary-600">200+ projects</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Europe</span>
                      <span className="text-primary-600">150+ projects</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Asia Pacific</span>
                      <span className="text-primary-600">100+ projects</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Middle East & Africa</span>
                      <span className="text-primary-600">50+ projects</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Industry Sectors</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Manufacturing</span>
                      <span className="text-primary-600">35%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Commercial Buildings</span>
                      <span className="text-primary-600">30%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Healthcare</span>
                      <span className="text-primary-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Education</span>
                      <span className="text-primary-600">12%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Government</span>
                      <span className="text-primary-600">8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-8 text-center">Awards & Recognition</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    award: "Energy Efficiency Excellence Award",
                    organization: "International Energy Agency",
                    year: "2023"
                  },
                  {
                    award: "Sustainability Leadership Award",
                    organization: "Clean Energy Council",
                    year: "2022"
                  },
                  {
                    award: "Innovation in Technology Award",
                    organization: "Energy Management Association",
                    year: "2021"
                  },
                  {
                    award: "Best Energy Consulting Firm",
                    organization: "Industry Excellence Awards",
                    year: "2020"
                  },
                  {
                    award: "Environmental Impact Award",
                    organization: "Global Sustainability Forum",
                    year: "2019"
                  },
                  {
                    award: "Technology Pioneer Award",
                    organization: "Energy Innovation Summit",
                    year: "2018"
                  }
                ].map((recognition, index) => (
                  <div key={index} className="text-center">
                    <Award className="w-12 h-12 text-primary-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{recognition.award}</h3>
                    <p className="text-primary-200 text-sm mb-1">{recognition.organization}</p>
                    <p className="text-primary-300 text-sm">{recognition.year}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Call to Action */}
        <section className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Ready to Learn More?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover how AEE-T can help your organization achieve significant energy savings 
            and sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Schedule Consultation
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              Download Brochure
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}