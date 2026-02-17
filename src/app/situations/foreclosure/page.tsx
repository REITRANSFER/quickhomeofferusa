import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell Your House Before Foreclosure — Stop Foreclosure Fast",
  description:
    "Facing foreclosure? Sell your house fast for cash and protect your credit. We close in as little as 7 days — no fees, no commissions. Get a cash offer in 24 hours.",
  alternates: { canonical: `${SITE_URL}/situations/foreclosure` },
};

const FAQS = [
  {
    question: "Can I sell my house if I'm already in foreclosure?",
    answer:
      "Yes. As long as the sale closes before the foreclosure auction date, you can sell your house. We specialize in fast closings (7-14 days) specifically to help homeowners in this situation.",
  },
  {
    question: "Will selling stop the foreclosure process?",
    answer:
      "Yes. Once the sale closes and the mortgage is paid off, the foreclosure is cancelled. If you owe more than the home is worth, we can help negotiate a short sale with your lender.",
  },
  {
    question: "How fast can you close on a pre-foreclosure property?",
    answer:
      "We can close in as little as 7 days. If your auction date is approaching, we work with title companies and your lender to expedite the process.",
  },
  {
    question: "What if I owe more than my house is worth?",
    answer:
      "We can help negotiate a short sale with your lender. In many cases, lenders would rather accept a short sale than go through the full foreclosure process, which costs them time and money.",
  },
  {
    question: "Will a foreclosure sale affect my credit?",
    answer:
      "Selling before foreclosure is significantly better for your credit than a completed foreclosure. A foreclosure stays on your credit report for 7 years and can drop your score by 100-160 points. Selling voluntarily avoids this.",
  },
];

export default function ForeclosurePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/foreclosure" },
            { name: "Foreclosure", href: "/situations/foreclosure" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Facing Foreclosure? Sell Your House Fast and Protect Your Credit
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We help homeowners stop foreclosure by purchasing their homes quickly
            for cash. Close in as little as 7 days — before the bank takes your
            home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-offer"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Get My Cash Offer Now
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

      {/* BLUF Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              If you are facing foreclosure, you likely have more options than
              you think. Selling your home for cash before the auction date lets
              you pay off your mortgage, protect your credit score, and walk away
              with cash in hand. {COMPANY_NAME} can close in 7-14 days — fast
              enough to beat most foreclosure timelines.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Foreclosure Works — and Why Time Matters
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Foreclosure is a legal process where your lender takes ownership of
              your property after missed mortgage payments. In most states, the
              timeline from first missed payment to auction is 120-200 days — but
              once the process starts, it moves faster than most homeowners
              expect.
            </p>
            <p>
              The key stages are: missed payments → notice of default → pre-
              foreclosure → auction. During the pre-foreclosure period, you still
              own the home and can sell it. This is the critical window where a
              cash sale can stop the process entirely.
            </p>
            <p>
              A traditional real estate sale takes 60-90 days on average —
              meaning if you list with an agent after receiving a notice of
              default, you may not close in time. Cash buyers like {COMPANY_NAME}{" "}
              eliminate this risk by closing in 7-14 days.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
            Your Options When Facing Foreclosure
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Sell for Cash (Fastest Option)",
                desc: "Sell directly to a cash buyer like us. Close in 7-14 days, pay off your mortgage, and protect your credit. You may even walk away with cash.",
                highlight: true,
              },
              {
                title: "Loan Modification",
                desc: "Ask your lender to modify your loan terms. This can take 3-6 months and isn't guaranteed to be approved.",
                highlight: false,
              },
              {
                title: "Short Sale",
                desc: "If you owe more than the home is worth, sell for less than the mortgage balance. Requires lender approval (60-120 days).",
                highlight: false,
              },
              {
                title: "Bankruptcy",
                desc: "Filing for bankruptcy can temporarily halt foreclosure, but it has severe long-term credit consequences and may only delay the inevitable.",
                highlight: false,
              },
            ].map((option) => (
              <div
                key={option.title}
                className={`p-6 rounded-xl border ${
                  option.highlight
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-blue-50 p-8 rounded-xl mt-16">
            <div className="text-yellow-500 text-lg mb-3">★★★★★</div>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;I was facing foreclosure and had 30 days to sell. Quick Home
              Offer gave me a fair cash offer within a day and we closed in 10
              days. They saved my credit and gave me peace of mind during the
              most stressful time of my life.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              Maria S. — Tampa, FL
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Foreclosure FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Don&apos;t Wait Until It&apos;s Too Late
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a no-obligation cash offer in 24 hours. We can close before your
            foreclosure auction date.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
