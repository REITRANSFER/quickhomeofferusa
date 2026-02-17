import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell an Inherited House Fast for Cash — No Repairs Needed",
  description:
    "Inherited a house you don't want or can't afford to maintain? Sell it fast for cash — as-is, no repairs, no cleaning. We handle everything and close in 7-14 days.",
  alternates: { canonical: `${SITE_URL}/situations/inherited-property` },
};

const FAQS = [
  {
    question: "Can I sell an inherited house before probate is complete?",
    answer:
      "In most states, the property must go through probate before it can be sold — unless the property was held in a trust or had a transfer-on-death deed. However, we can begin the process during probate and close as soon as the court approves the sale.",
  },
  {
    question: "Do I need to clean out the house before selling?",
    answer:
      "No. We buy houses as-is, including any furniture, belongings, or debris left behind. You don't need to clean, repair, or remove anything.",
  },
  {
    question: "What if there are multiple heirs?",
    answer:
      "We work with multiple heirs all the time. All parties with ownership interest sign at closing, and proceeds are distributed according to the will or court order.",
  },
  {
    question: "Will I have to pay capital gains tax on an inherited property?",
    answer:
      "Inherited properties receive a 'stepped-up basis,' meaning the tax basis is the fair market value at the time of inheritance — not the original purchase price. This often significantly reduces or eliminates capital gains tax. Consult a tax professional for your specific situation.",
  },
  {
    question: "What if the inherited house needs major repairs?",
    answer:
      "We buy houses in any condition — roof damage, mold, structural issues, outdated systems, fire damage, and more. You don't spend a dollar on repairs.",
  },
];

export default function InheritedPropertyPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/inherited-property" },
            {
              name: "Inherited Property",
              href: "/situations/inherited-property",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Inherited a House? Sell It Fast for Cash — No Repairs, No Hassle
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Dealing with an inherited property can be overwhelming. We buy
            inherited homes as-is and handle everything — so you can focus on
            what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-offer"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Get My Cash Offer
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              Inherited properties cost money every month they sit empty —
              property taxes, insurance, utilities, maintenance, and liability
              risk. If you don&apos;t plan to move into the property,
              selling for cash is typically the fastest and most cost-effective
              option. {COMPANY_NAME} buys inherited homes as-is and can close in
              7-14 days, even during probate.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Hidden Costs of Keeping an Inherited Property
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Property Taxes",
                desc: "Property tax bills don't stop because the owner passed away. You're responsible for these as the new owner.",
              },
              {
                title: "Insurance & Utilities",
                desc: "Vacant properties need special insurance (higher cost) and utilities must stay on to prevent damage.",
              },
              {
                title: "Maintenance & Liability",
                desc: "Unmaintained properties decline in value and create liability risk. Code violations can result in fines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How We Buy Inherited Properties
          </h2>
          <div className="space-y-6 mb-12">
            {[
              {
                step: "1",
                title: "Tell Us About the Property",
                desc: "Fill out our form or call us. We just need the address, general condition, and your relationship to the property.",
              },
              {
                step: "2",
                title: "We Handle the Details",
                desc: "We evaluate the property, work with your probate attorney if needed, and present a fair cash offer within 24 hours.",
              },
              {
                step: "3",
                title: "Close on Your Timeline",
                desc: "Pick a closing date — we can close in 7 days or wait until probate is finalized. We handle paperwork, title, and even clean-out.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-base mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;After my mother passed, I inherited a house in terrible
              condition — roof leaking, mold in the basement, outdated
              everything. I didn&apos;t have the money or energy to fix it. They
              bought it as-is and handled everything. So grateful.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              James W. — Atlanta, GA
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Inherited Property FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Inherited a Property You Don&apos;t Need?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a cash offer in 24 hours. No repairs, no cleaning, no stress.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
