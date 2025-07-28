import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import { SaappoLogo, PoweredBySaappo } from "./components/SaappoLogo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <SaappoLogo size="medium" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <div className="w-96 h-96 md:w-[600px] md:h-[600px]">
            <SaappoLogo size="xlarge" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/saappo with background.png"
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
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src="/saappo ai pic 2.png"
                alt="Saappo AI Solutions"
                width={600}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in Sales Automation and Power Platform Optimization, creating solutions that make big impacts without requiring large SaaS systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales Automation</h3>
              <p className="text-gray-600">
                AI-powered CRM solutions with route optimization, customer data visualization, and automated sales processes that increase team efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Power Platform Optimization</h3>
              <p className="text-gray-600">
                Microsoft PowerBI, PowerAutomate, and SharePoint integrations that streamline workflows and reduce approval processes by up to 50%.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data & File Management</h3>
              <p className="text-gray-600">
                AI-powered inventory tracking, automated file processing, and data extraction solutions that save hours of manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Image
                  src="/saappo ai pic.png"
                  alt="Saappo AI Technology"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Saappo?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Automation has been available for over two decades, but decision-makers often evaluate ROI by comparing project costs to the expense of increasing employee salaries. However, this approach doesn't always ensure the job gets done. Today, the challenge is finding the right person for the job. This uncertainty is fueling the next wave of automation. We're at the forefront of an expansive phase where no process will remain untouched.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Small Scale Solutions</h3>
                    <p className="text-gray-600">Automation can be done on a small scale and cost $100s-$1,000s</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Large SaaS Required</h3>
                    <p className="text-gray-600">You don't have to wait until your company builds out an entire new platform</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Big Impact Solutions</h3>
                    <p className="text-gray-600">Simple solutions that make big impacts on your business operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Streamline Your Operations?</h3>
              <p className="text-blue-100 mb-6">
                Let's talk about some simple solutions that make big impacts on your business workflows and efficiency.
              </p>
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Solutions, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some examples of how we've helped businesses solve real problems with simple automation solutions
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">Problem</h3>
                  <p className="text-gray-700">Customer was fighting accurate inventory counts at multiple locations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Solution</h3>
                  <p className="text-gray-700">Developed an App using AI to read delivery forms and update inventory counts accurately. Businesses can maintain optimal stock levels without relying on large SaaS systems.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">Result</h3>
                  <p className="text-gray-700">Our solutions streamline inventory processes, ensuring real-time updates, added image capture which all reduced human error. This innovative approach allows you to focus on growth and efficiency, knowing your inventory is always up-to-date.</p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">Problem</h3>
                  <p className="text-gray-700">Customer was inundated with calls from their own Sales team to obtain Sales data, contacts, and addresses.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Solution</h3>
                  <p className="text-gray-700">We created a CRM with the help of Microsoft PowerBI, merging Long/Lat data with Customer Data so it can be pulled up on a map for better visualization of prospects alongside current customers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">Result</h3>
                  <p className="text-gray-700">More efficient Sales team to make more calls everyday and an excellent tool for new Salespeople to plan day to day activities. We've also added route optimization by using mapping APIs.</p>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">Problem</h3>
                  <p className="text-gray-700">Customers spent up to an hour sifting through an extensive paper filing system to find data for their invoices.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Solution</h3>
                  <p className="text-gray-700">We developed a file uploading process and customized automation that extracts data from files and uploads it to a database. Automation even saves the file name with custom settings. Multiple tools were integrated via SharePoint.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">Result</h3>
                  <p className="text-gray-700">Several man-hours were saved, leading to the expansion of the project into a comprehensive work order system.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our Sales Automation and Power Platform solutions help businesses across industries streamline their operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Inventory tracking and production workflow automation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Teams</h3>
              <p className="text-gray-600">CRM optimization and route planning automation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Administrative</h3>
              <p className="text-gray-600">File management and approval process automation</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200">
              <span className="text-gray-600 font-medium">Want to join them?</span>
              <PoweredBySaappo className="text-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business with AI automation? Get in touch with us.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <SaappoLogo size="medium" />
            </div>
            <p className="text-gray-400 mb-6">Sales Automation & Power Platform Optimization</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 mt-6">&copy; 2024 Saappo. All rights reserved.</p>
            <div className="mt-4 flex justify-center">
              <PoweredBySaappo className="opacity-40 text-xs" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
