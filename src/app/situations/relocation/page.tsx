import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Need to Sell Your House Fast for a Job Relocation?",
  description:
    "Relocating for work and need to sell your house fast? Get a cash offer in 24 hours and close in as little as 7 days. No fees, no commissions, no contingencies.",
  alternates: { canonical: `${SITE_URL}/situations/relocation` },
};

const FAQS = [
  {
    question: "How fast can you close if I need to relocate quickly?",
    answer:
      "We can close in as little as 7 days. Most relocation sales close in 10-14 days. If you need more time, we can also schedule the closing up to 60 days out to match your relocation timeline.",
  },
  {
    question: "Can I sell my house remotely after I've already moved?",
    answer:
      "Yes. We handle remote closings regularly. Many of our clients have already relocated by the time we close. We can arrange remote signing through a mobile notary in your new location.",
  },
  {
    question: "What if my home still has a mortgage?",
    answer:
      "Most homes we buy still have mortgages. The mortgage is paid off at closing from the sale proceeds. You keep whatever is left after the mortgage payoff.",
  },
  {
    question: "Will I lose money selling fast vs. listing with an agent?",
    answer:
      "When you factor in 5-6% agent commissions ($15K-$25K+), 60-90 days of carrying costs (mortgage, taxes, insurance), staging/repair costs, and the risk of deals falling through, a cash sale is often comparable — and always faster and more certain.",
  },
  {
    question: "Can you buy if I'm military PCS?",
    answer:
      "Absolutely. We work with military families facing PCS (Permanent Change of Station) moves regularly. We understand the tight timelines and can close fast enough to meet your reporting date.",
  },
];

export default function RelocationPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/relocation" },
            { name: "Relocation", href: "/situations/relocation" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Relocating? Sell Your House Fast Without the Stress
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            New job, new city, tight timeline. {COMPANY_NAME} can buy your house
            in as little as 7 days so you can focus on your move — not on
            selling your home.
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
          <div className="bg-sky-50 border-l-4 border-sky-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              When you accept a job in another city or state, the clock starts
              ticking. Listing your home traditionally takes 60-90 days — and
              that does not include the time needed for repairs, staging, and
              showings. A cash sale to {COMPANY_NAME} lets you sell in 7-14 days,
              avoid carrying two mortgages, and close remotely if you have
              already moved.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Cost of Waiting to Sell
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-12">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 font-semibold text-gray-900">Expense</th>
                  <th className="p-4 font-semibold text-gray-900">Monthly Cost</th>
                  <th className="p-4 font-semibold text-gray-900">Over 3 Months</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { expense: "Mortgage Payment", monthly: "$1,500-$3,000", total: "$4,500-$9,000" },
                  { expense: "Property Taxes", monthly: "$300-$800", total: "$900-$2,400" },
                  { expense: "Insurance", monthly: "$100-$300", total: "$300-$900" },
                  { expense: "Utilities", monthly: "$150-$400", total: "$450-$1,200" },
                  { expense: "Lawn/Maintenance", monthly: "$100-$300", total: "$300-$900" },
                ].map((row) => (
                  <tr key={row.expense}>
                    <td className="p-4 text-gray-700">{row.expense}</td>
                    <td className="p-4 text-gray-600">{row.monthly}</td>
                    <td className="p-4 text-red-600 font-medium">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-red-50">
                  <td className="p-4 font-bold text-gray-900">Total Carrying Cost</td>
                  <td className="p-4 font-bold text-gray-900">$2,150-$4,800</td>
                  <td className="p-4 font-bold text-red-700">$6,450-$14,400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Relocating Homeowners Choose Cash Sales
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Close Before You Move",
                desc: "We can close in 7-14 days — fast enough to sell before your start date at the new job.",
              },
              {
                title: "Sell Remotely",
                desc: "Already moved? No problem. We handle remote closings with mobile notaries in your new location.",
              },
              {
                title: "No Dual Mortgage",
                desc: "Avoid paying two mortgages simultaneously. Sell your current home before buying or renting at your new location.",
              },
              {
                title: "No Repairs or Staging",
                desc: "Moving is hectic enough. We buy as-is — no need to spend time or money preparing the house for sale.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;Got a job offer in another state and needed to sell my house
              in DC within 3 weeks. My realtor said it would take 60-90 days
              minimum. Quick Home Offer closed in 12 days.
              Incredible.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              David R. — Washington, DC
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Relocation Sale FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Need to Sell Before Your Move?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a cash offer in 24 hours. Close on your timeline.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
