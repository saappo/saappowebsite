import { ContactForm } from "../components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h1>
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