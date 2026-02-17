import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { SITE_URL } from "@/lib/schema";
import faqData from "@/data/faqs.json";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Selling Your House for Cash",
  description:
    "Get answers to common questions about selling your house to a cash buyer. Learn about our process, fees (none), timeline (7-14 days), and what types of properties we buy.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FAQPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about selling your house for cash.
            If you don&apos;t see your question here, call us — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ faqs={faqData.general} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Still Have Questions? Get Your Free Offer Instead.
          </h2>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
