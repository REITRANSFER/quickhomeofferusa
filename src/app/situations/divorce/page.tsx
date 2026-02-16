import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Selling Your House During a Divorce — Fast Cash Sale",
  description:
    "Going through a divorce and need to sell your house fast? Get a fair cash offer with no showings, no repairs, and no drawn-out negotiations. Close in as little as 7 days.",
  alternates: { canonical: `${SITE_URL}/situations/divorce` },
};

const FAQS = [
  {
    question: "Can I sell the house during a divorce without my spouse's consent?",
    answer:
      "In most states, both spouses must agree to sell a jointly owned property. However, a court can order the sale of the home as part of the divorce proceedings. We recommend consulting with your divorce attorney before proceeding.",
  },
  {
    question: "How do you split the proceeds from a cash sale during divorce?",
    answer:
      "The proceeds are typically split according to your divorce settlement agreement or court order. We work with both parties and their attorneys to ensure the funds are distributed properly at closing.",
  },
  {
    question: "Can you buy the house if it's still in both names?",
    answer:
      "Yes. We purchase homes that are jointly owned all the time. Both parties sign at closing, and proceeds are distributed according to your agreement.",
  },
  {
    question: "How fast can you close?",
    answer:
      "We can close in as little as 7 days. Most divorce-related sales close in 10-14 days, which is significantly faster than the 60-90 days a traditional sale takes.",
  },
  {
    question: "What if one spouse is uncooperative?",
    answer:
      "If one spouse refuses to cooperate, your divorce attorney can petition the court to order the sale. Once a court order is in place, we can move forward quickly.",
  },
];

export default function DivorcePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/divorce" },
            { name: "Divorce", href: "/situations/divorce" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Selling Your House During a Divorce? We Make It Simple.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Divorce is already stressful enough. Sell your house fast for cash —
            no showings, no repairs, no drawn-out negotiations. Get closure and
            move forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-offer"
              className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors"
            >
              Get My Cash Offer
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              When going through a divorce, the marital home is often the largest
              shared asset — and the biggest source of conflict. A fast cash sale
              eliminates months of showings, negotiations, and uncertainty.{" "}
              {COMPANY_NAME} can buy your home in 7-14 days so both parties can
              divide proceeds quickly and move on.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why a Cash Sale Makes Sense During Divorce
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "No Showings or Open Houses",
                desc: "The last thing you need during a divorce is strangers walking through your home. We make one visit — that's it.",
              },
              {
                title: "Fast and Certain Closing",
                desc: "Traditional sales take 60-90 days and 30% of deals fall through. We close in 7-14 days with guaranteed cash.",
              },
              {
                title: "Clean Financial Split",
                desc: "Cash at closing means both parties can divide proceeds immediately. No waiting, no uncertainty.",
              },
              {
                title: "No Repairs or Staging",
                desc: "We buy houses as-is. No need to spend money or energy fixing up a home you're moving out of.",
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

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How the Process Works
          </h2>
          <div className="space-y-6 mb-12">
            {[
              {
                step: "1",
                title: "Both Parties Agree to Sell",
                desc: "Both spouses (or a court order) authorize the sale. Your attorneys can be involved at every step.",
              },
              {
                step: "2",
                title: "We Present a Cash Offer",
                desc: "We evaluate the property and present a fair, no-obligation cash offer within 24 hours.",
              },
              {
                step: "3",
                title: "Choose Your Closing Date",
                desc: "Pick a date that works for both parties — as fast as 7 days. We handle all paperwork and title work.",
              },
              {
                step: "4",
                title: "Proceeds Are Distributed",
                desc: "At closing, the mortgage is paid off and remaining proceeds are split per your divorce agreement.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;Going through a divorce and needed to sell fast. No
              showings, no stress, no negotiations with buyers. They gave us a
              fair offer and we closed in two weeks. Made a horrible situation
              much easier.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              Sarah K. — Raleigh, NC
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Divorce &amp; Home Sale FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a no-obligation cash offer and close on your timeline.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
