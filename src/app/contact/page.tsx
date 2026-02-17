import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
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
                    className="text-blue-800 text-lg font-medium hover:underline"
                  >
                    {PHONE}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Monday - Friday, 8am - 8pm EST</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-blue-800 font-medium hover:underline"
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
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
