"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, Clock, Globe, Send, Calendar, Users, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: ""
  })

  const [activeOffice, setActiveOffice] = useState("headquarters")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your energy efficiency? Our experts are here to help you 
              achieve significant cost savings and sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">How Can We Help You?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <Calendar className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Consultation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Book a free consultation with our energy efficiency experts to discuss your 
                  specific needs and objectives.
                </p>
                <Button className="w-full">
                  Book Consultation
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <MessageSquare className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Quote</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get a detailed proposal for your energy efficiency project with transparent 
                  pricing and timeline estimates.
                </p>
                <Button variant="outline" className="w-full">
                  Get Quote
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership Opportunities</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore strategic partnerships and collaboration opportunities with 
                  AEE-T's global network.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Send Us a Message</h2>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="john.doe@company.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="energy-audit">Energy Audit</option>
                          <option value="efficiency-solutions">Efficiency Solutions</option>
                          <option value="technology-integration">Technology Integration</option>
                          <option value="consulting">Consulting Services</option>
                          <option value="monitoring">Energy Monitoring</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-250k">$100,000 - $250,000</option>
                          <option value="250k-500k">$250,000 - $500,000</option>
                          <option value="over-500k">Over $500,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (1-2 months)</option>
                        <option value="short-term">Short-term (3-6 months)</option>
                        <option value="medium-term">Medium-term (6-12 months)</option>
                        <option value="long-term">Long-term (12+ months)</option>
                        <option value="planning">Planning phase</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-primary-600 hover:underline">
                        Terms of Service
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Contact Information</h2>
              
              {/* Office Tabs */}
              <div className="mb-8">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  {[
                    { id: "headquarters", label: "Headquarters" },
                    { id: "north-america", label: "North America" },
                    { id: "europe", label: "Europe" },
                    { id: "asia", label: "Asia Pacific" }
                  ].map((office) => (
                    <button
                      key={office.id}
                      onClick={() => setActiveOffice(office.id)}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                        activeOffice === office.id
                          ? "bg-white text-primary-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {office.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-6">
                {activeOffice === "headquarters" && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Headquarters</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Address</p>
                            <p className="text-gray-600">
                              1250 Energy Plaza<br />
                              Suite 3000<br />
                              Atlanta, GA 30309<br />
                              United States
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Phone</p>
                            <p className="text-gray-600">+1 (404) 555-0100</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Email</p>
                            <p className="text-gray-600">info@aee-t.com</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Business Hours</p>
                            <p className="text-gray-600">
                              Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                              Saturday: 9:00 AM - 1:00 PM EST<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {activeOffice === "north-america" && (
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Toronto Office</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">
                              200 Bay Street, Suite 1200<br />
                              Toronto, ON M5J 2J2, Canada
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">+1 (416) 555-0200</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Los Angeles Office</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">
                              1800 Century Park East<br />
                              Los Angeles, CA 90067
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">+1 (213) 555-0300</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeOffice === "europe" && (
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">London Office</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">
                              25 Old Broad Street<br />
                              London EC2N 1HQ, UK
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">+44 20 7123 4567</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Berlin Office</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">
                              Potsdamer Platz 1<br />
                              10785 Berlin, Germany
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">+49 30 1234 5678</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeOffice === "asia" && (
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Singapore Office</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">
                              1 Raffles Place, #50-01<br />
                              Singapore 048616
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">+65 6123 4567</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tokyo Office</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">
                              Marunouchi Building 29F<br />
                              Tokyo 100-6329, Japan
                            </p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <p className="text-gray-600 text-sm">+81 3 1234 5678</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Emergency Contact */}
                <Card className="bg-primary-50 border-primary-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">24/7 Emergency Support</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Emergency Hotline</p>
                          <p className="text-gray-600">+1 (800) 555-HELP</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Emergency Email</p>
                          <p className="text-gray-600">emergency@aee-t.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What is the typical response time for inquiries?",
                answer: "We respond to all inquiries within 24 hours during business days. For urgent matters, please use our emergency hotline for immediate assistance."
              },
              {
                question: "Do you offer free initial consultations?",
                answer: "Yes, we provide complimentary initial consultations to assess your energy efficiency needs and discuss potential solutions that align with your goals and budget."
              },
              {
                question: "What information should I prepare before contacting you?",
                answer: "It's helpful to have your recent energy bills, building specifications, current energy usage data, and specific goals or challenges you're facing. However, our team can guide you through gathering any additional information needed."
              },
              {
                question: "Do you work with residential clients?",
                answer: "While our primary focus is on commercial, industrial, and institutional clients, we do work with large residential developments and high-end residential projects on a case-by-case basis."
              },
              {
                question: "What is your project timeline?",
                answer: "Project timelines vary depending on scope and complexity. Simple energy audits can be completed in 1-2 weeks, while comprehensive efficiency upgrades may take 3-12 months. We'll provide a detailed timeline during our initial consultation."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Start Your Energy Transformation?</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Our team of experts is standing by to help you achieve your energy efficiency goals. 
            Let's discuss how we can reduce your costs and environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
              Schedule Call
              <Calendar className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
              Download Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}