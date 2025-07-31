import Image from "next/image";
import Link from "next/link";
import { RoboticBackground } from "./components/RoboticBackground";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Robotic Background */}
        <RoboticBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/saappo with cloud_clear back.jpg"
                alt="Saappo - Sales Automation & Power Platform Optimization"
                width={600}
                height={200}
                className="mx-auto max-w-full h-auto"
                priority
              />
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto font-bold tracking-wide">
              ai moves fast. companies need to follow. saappo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Page Highlights Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we can transform your business with AI automation and Power Platform optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services Card */}
            <Link href="/services" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-blue-300">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Services</h3>
                <p className="text-gray-600 mb-4">
                  AI Strategy, Virtual Coaching, and Custom Project Solutions tailored to your business needs.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Community Card */}
            <Link href="/community" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-green-300">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Community Project</h3>
                <p className="text-gray-600 mb-4">
                  See our KeepAlleyTrash.com platform serving hundreds of users with real-world impact.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* About Card */}
            <Link href="/about" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-purple-300">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">About Saappo</h3>
                <p className="text-gray-600 mb-4">
                  Learn why businesses choose us and see real case studies with measurable results.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                  Our Story
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Contact Card */}
            <Link href="/contact" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:border-orange-300">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Get In Touch</h3>
                <p className="text-gray-600 mb-4">
                  Ready to transform your business? Let's discuss your automation needs and start building.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300">
                  Contact Us
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Utilizing AI Tools for Maximum Productivity since 2022</p>
            <div className="flex justify-center mb-4">
              <Image
                src="/powered_by_saappo.png"
                alt="Powered by Saappo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400">&copy; 2025 Saappo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
