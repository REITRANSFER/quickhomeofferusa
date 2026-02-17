import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, SITE_URL, PHONE, COMPANY_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell a Probate Property Fast — Cash Buyers Who Understand the Process",
  description:
    "Need to sell a house in probate? We work with executors, attorneys, and courts to purchase probate properties quickly for cash. Close in 7-14 days after court approval.",
  alternates: { canonical: `${SITE_URL}/situations/probate` },
};

const FAQS = [
  {
    question: "What is probate and how does it affect selling a house?",
    answer:
      "Probate is the legal process of validating a will and transferring property ownership after someone passes away. The executor or administrator of the estate must get court approval before selling real property, which adds time to the process. We're experienced with probate sales and can help navigate the timeline.",
  },
  {
    question: "How long does a probate sale take?",
    answer:
      "The probate process itself can take 6-12 months depending on the state and complexity. However, once the court authorizes the sale, we can close in as little as 7 days. We can also begin the evaluation and offer process while probate is pending.",
  },
  {
    question: "Do I need a probate attorney?",
    answer:
      "While not always legally required, we strongly recommend working with a probate attorney to ensure proper legal procedures are followed. We regularly work with probate attorneys and can coordinate seamlessly with yours.",
  },
  {
    question: "Can you buy the property before probate is complete?",
    answer:
      "We can evaluate the property and make an offer during probate. The actual closing occurs once the court grants the executor permission to sell. In some states, the court may approve the sale as part of the probate process.",
  },
  {
    question: "What if the property has liens or back taxes?",
    answer:
      "We purchase properties with liens, back taxes, and other encumbrances regularly. These are typically settled at closing from the sale proceeds. We'll handle the title search and work with you to resolve any issues.",
  },
];

export default function ProbatePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Situations", href: "/situations/probate" },
            { name: "Probate", href: "/situations/probate" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Selling a Probate Property? We Handle the Complexity.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Probate is already complex enough. {COMPANY_NAME} works with
            executors, attorneys, and courts to make selling the property as
            simple as possible.
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
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-xl mb-12">
            <p className="text-lg font-semibold text-gray-900">
              Bottom Line Up Front:
            </p>
            <p className="text-gray-700 mt-2">
              Probate properties are among the most complex real estate
              transactions — court approvals, executor responsibilities, heir
              disputes, and property maintenance all add up. A cash sale to{" "}
              {COMPANY_NAME} simplifies the process. We coordinate with your
              probate attorney, purchase the property as-is, and close as soon as
              the court gives the green light.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Understanding the Probate Sale Process
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg mb-12">
            <p>
              When a homeowner passes away and the property is part of their
              estate, it typically must go through probate — a court-supervised
              process that validates the will, appoints an executor, and
              authorizes the transfer or sale of assets.
            </p>
            <p>
              The executor (also called personal representative) has a fiduciary
              duty to manage the estate property responsibly. This includes
              maintaining the property, paying ongoing expenses (taxes,
              insurance, utilities), and eventually selling or distributing it
              according to the will or state law.
            </p>
            <p>
              Selling to a cash buyer during or after probate eliminates the
              uncertainty of a traditional sale — no financing contingencies, no
              inspection negotiations, and no risk of the deal falling through
              months into the process.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Executors Choose Cash Sales
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Reduce Estate Expenses",
                desc: "Every month the property sits, the estate pays taxes, insurance, and maintenance. A fast sale preserves estate value.",
              },
              {
                title: "Avoid Repair Costs",
                desc: "Probate properties often need significant repairs. We buy as-is — the estate doesn't spend a dollar on fixing up the home.",
              },
              {
                title: "Simplify Heir Distribution",
                desc: "Cash from a quick sale is easier to divide among heirs than a piece of real estate. Close the estate faster.",
              },
              {
                title: "Attorney-Friendly Process",
                desc: "We work regularly with probate attorneys. Our process is transparent, documented, and designed to meet court requirements.",
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
              &ldquo;Dealing with probate was overwhelming enough without trying
              to sell a house. They handled everything and worked with our
              attorney to make the closing seamless. Five stars.&rdquo;
            </p>
            <p className="font-semibold text-gray-900 mt-4">
              Angela T. — Durham, NC
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Probate Sale FAQ
          </h2>
          <FAQ faqs={FAQS} showSchema={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Handling a Probate Property?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Let us take the property off your plate. Get a cash offer today.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
