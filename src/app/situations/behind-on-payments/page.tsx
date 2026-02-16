import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Behind on Mortgage Payments? We Can Help — Sell Fast for Cash",
  description:
    "Behind on your mortgage and worried about foreclosure? Sell your house fast for cash, pay off your loan, and start fresh. Get an offer in 24 hours — close in 7-14 days.",
  alternates: { canonical: `${SITE_URL}/situations/behind-on-payments` },
};

const FAQS = [
  {
    question: "How far behind on payments can I be and still sell?",
    answer:
      "You can sell at any stage — whether you're 1 month or 12 months behind. As long as the foreclosure auction hasn't occurred, you still own the home and can sell it. The earlier you act, the more options you have.",
  },
  {
    question: "What happens to my remaining mortgage when you buy?",
    answer:
      "Your mortgage is paid off at closing from the sale proceeds. If there's money left over after paying the mortgage balance (including late fees and penalties), you keep it.",
  },
  {
    question: "What if I owe more than the house is worth?",
    answer:
      "We can help negotiate a short sale with your lender. Many lenders prefer short sales over foreclosure because it costs them less. A short sale is also much better for your credit than a foreclosure.",
  },
  {
    question: "Will selling hurt my credit score?",
    answer:
      "The missed payments will already appear on your credit report. However, selling the home and paying off the mortgage is far better for your long-term credit than letting the home go to foreclosure, which can drop your score by 100-160 points.",
  },
  {
    question: "Are there any fees or costs to me?",
    answer:
      "Zero. We pay all closing costs, there are no agent commissions, and no fees. The amount we offer is the amount you receive at closing (minus your mortgage payoff).",
  },
];

export default function BehindOnPaymentsPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/behind-on-payments" },
            {
              name: "Behind on Payments",
              href: "/situations/behind-on-payments",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Behind on Mortgage Payments? You Have Options.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Missing mortgage payments is stressful, but it does not have to lead
            to foreclosure. {COMPANY_NAME} can buy your home fast for cash — so
            you can pay off your loan and move forward.
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
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              If you are behind on mortgage payments, the most important thing is
              to act before your lender initiates foreclosure. Selling your home
              for cash lets you pay off the remaining mortgage balance (including
              late fees), avoid foreclosure on your credit report, and start
              fresh. {COMPANY_NAME} can close in 7-14 days and pays all closing
              costs.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Happens When You Miss Mortgage Payments
          </h2>
          <div className="space-y-6 mb-12">
            {[
              {
                period: "1-2 Months Behind",
                status: "Grace Period / Late Fees",
                desc: "Your lender charges late fees and may call to discuss options. This is the best time to act — you have the most options available.",
                urgency: "bg-yellow-100 text-yellow-800",
              },
              {
                period: "3 Months Behind",
                status: "Demand Letter",
                desc: "Your lender sends a formal demand letter requiring full payment of missed amounts. Pre-foreclosure is approaching.",
                urgency: "bg-orange-100 text-orange-800",
              },
              {
                period: "4-6 Months Behind",
                status: "Notice of Default",
                desc: "Your lender files a Notice of Default — the official start of the foreclosure process. You typically have 90 days to resolve.",
                urgency: "bg-red-100 text-red-800",
              },
              {
                period: "6+ Months Behind",
                status: "Foreclosure / Auction",
                desc: "Your home is scheduled for auction. Once sold at auction, you lose all rights and equity. Act immediately.",
                urgency: "bg-red-200 text-red-900",
              },
            ].map((item) => (
              <div
                key={item.period}
                className="flex gap-4 items-start bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${item.urgency}`}
                  >
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.period}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How a Cash Sale Helps
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Pay Off Your Mortgage",
                desc: "The remaining mortgage balance (including late fees) is paid at closing. You walk away debt-free.",
              },
              {
                title: "Protect Your Credit",
                desc: "A voluntary sale is far less damaging to your credit than a foreclosure, which stays on your report for 7 years.",
              },
              {
                title: "Keep Your Equity",
                desc: "If your home is worth more than your mortgage balance, you keep the difference. Don't let the bank take your equity at auction.",
              },
              {
                title: "No Out-of-Pocket Costs",
                desc: "We pay all closing costs. No agent commissions, no fees, no repair costs. When cash is tight, this matters.",
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
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;I was 4 months behind on my mortgage and didn&apos;t know
              what to do. They walked me through my options and made a fair offer
              that covered my remaining balance plus gave me cash to start
              fresh.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              Robert M. — St. Petersburg, FL
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Behind on Payments FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            The Sooner You Act, the More Options You Have
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a no-obligation cash offer in 24 hours. Confidential and free.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
