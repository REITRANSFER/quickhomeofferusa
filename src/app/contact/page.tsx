import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_URL, COMPANY_NAME, PHONE, EMAIL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Contact ${COMPANY_NAME} — Get Your Cash Offer`,
  description:
    "Contact Quick Home Offer USA to get a free cash offer for your house. Call us, email us, or fill out our form. We respond within hours.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12">
            Ready to sell your house fast for cash? Get in touch with us today.
            We respond to every inquiry within a few hours.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                    className="text-green-700 text-lg font-medium hover:underline"
                  >
                    {PHONE}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Monday - Friday, 8am - 8pm EST</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-green-700 font-medium hover:underline"
                  >
                    {EMAIL}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We respond within 2-4 hours</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Markets We Serve</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Tampa Bay, FL</li>
                    <li>DMV (DC, Maryland, Virginia)</li>
                    <li>New York (Queens, Nassau, Suffolk)</li>
                    <li>Raleigh-Durham, NC</li>
                    <li>Atlanta, GA</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
