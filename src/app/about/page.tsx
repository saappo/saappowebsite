import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="py-24 bg-gray-50">
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Saappo?</h1>
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
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Get Started Today
              </Link>
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