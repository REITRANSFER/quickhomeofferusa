import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell Your Vacant or Abandoned Property Fast for Cash",
  description:
    "Own a vacant or abandoned property that's costing you money? Sell it fast for cash — no repairs, no cleaning, no listing. We close in as little as 7 days.",
  alternates: { canonical: `${SITE_URL}/situations/vacant-property` },
};

const FAQS = [
  {
    question: "Do you buy houses in any condition?",
    answer:
      "Yes. We buy vacant properties in any condition — from houses that just need cosmetic updates to properties with severe damage, mold, fire damage, structural issues, or code violations. You don't need to repair anything.",
  },
  {
    question: "What if the property has squatters or unauthorized occupants?",
    answer:
      "We deal with squatter situations regularly. We can purchase the property and handle the eviction process after closing. This is a common issue with vacant properties and we have experience resolving it.",
  },
  {
    question: "What if there are code violations on the property?",
    answer:
      "Code violations are not a deal-breaker for us. We purchase properties with open code violations, liens, and fines. These are typically resolved at or after closing.",
  },
  {
    question: "Can you buy vacant land too?",
    answer:
      "Our focus is on residential properties (houses, condos, townhomes, duplexes). We don't typically purchase vacant land, but we may be able to help — contact us to discuss your specific situation.",
  },
  {
    question: "What if the property has been vacant for years?",
    answer:
      "We buy properties that have been vacant for any length of time. Long-vacant properties often have deferred maintenance, pest issues, or vandalism damage — we handle all of that. No property is too far gone for us.",
  },
];

export default function VacantPropertyPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/vacant-property" },
            { name: "Vacant Property", href: "/situations/vacant-property" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Own a Vacant Property? Stop Losing Money — Sell It for Cash
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Vacant properties cost money every month they sit empty. Sell yours
            fast for cash — no repairs, no cleaning, no listing hassle.
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
          <div className="bg-stone-100 border-l-4 border-stone-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              A vacant property is a liability, not an asset — unless you are
              actively renting it or using it. Between property taxes, insurance,
              maintenance, code violations, vandalism, and liability risk, a
              vacant house can cost $500-$2,000+ per month. Selling for cash
              eliminates these ongoing costs immediately. {COMPANY_NAME} buys
              vacant properties as-is and closes in 7-14 days.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The True Cost of a Vacant Property
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Monthly Carrying Costs",
                items: [
                  "Property taxes",
                  "Vacant property insurance (2-3x normal)",
                  "Utilities (to prevent pipe freeze/damage)",
                  "Lawn care and maintenance",
                ],
              },
              {
                title: "Risk & Liability",
                items: [
                  "Vandalism and break-ins",
                  "Squatters and trespassers",
                  "Liability if someone gets injured",
                  "Code violations and city fines",
                ],
              },
              {
                title: "Declining Value",
                items: [
                  "Deferred maintenance compounds",
                  "Pest and water damage",
                  "Neighborhood perception issues",
                  "Harder to sell the longer it sits",
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 text-sm flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Common Reasons People Own Vacant Properties
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              "Inherited a house they can't maintain or don't live near",
              "Former rental property with problem tenants who left",
              "Moved to a new home but couldn't sell the old one",
              "Property needs too many repairs to list traditionally",
              "Out-of-state owner who can't manage the property remotely",
              "Divorce or separation left a property unoccupied",
            ].map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-blue-800 font-bold mt-0.5">→</span>
                <p className="text-gray-700 text-sm">{reason}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;Had a vacant rental property that was costing me money every
              month — taxes, insurance, maintenance. Selling through an agent
              would&apos;ve taken months. Got a cash offer and was done in 2
              weeks.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              Linda P. — Queens, NY
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Vacant Property FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Stop Paying for a Property You Don&apos;t Use
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a cash offer in 24 hours. We buy vacant properties as-is.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
