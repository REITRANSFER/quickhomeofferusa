import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_URL, COMPANY_NAME, PHONE } from "@/lib/schema";

export const metadata: Metadata = {
  title: `About ${COMPANY_NAME} — Who We Are`,
  description:
    "Quick Home Offer USA is a trusted cash home buying company serving Tampa Bay, DMV, New York, Raleigh-Durham, and Atlanta. Learn about our mission, values, and commitment to homeowners.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About {COMPANY_NAME}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help homeowners sell their houses fast for a fair cash price —
            with zero hassle, zero fees, and zero uncertainty.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              {COMPANY_NAME} was founded with a simple mission: give homeowners a
              better option when they need to sell fast. Traditional real estate
              can be slow, expensive, and stressful — especially when life throws
              you a curveball.
            </p>
            <p>
              Whether you are facing foreclosure, going through a divorce,
              dealing with an inherited property, or simply need to relocate
              quickly, we provide a straightforward solution: a fair cash offer,
              a fast closing, and zero out-of-pocket costs.
            </p>
            <p>
              We have purchased over 500 homes across Tampa Bay, the DMV area
              (DC, Maryland, Virginia), New York, Raleigh-Durham, and Atlanta.
              Every transaction is handled with transparency, speed, and respect
              for the homeowner&apos;s situation.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Transparency", desc: "No hidden fees, no bait-and-switch. The number we quote is the number you get at closing." },
              { title: "Speed", desc: "We know time matters. That's why we present offers within 24 hours and close in as fast as 7 days." },
              { title: "Fairness", desc: "Our offers are based on real market data and comparable sales — not lowball tactics." },
              { title: "Empathy", desc: "We understand that selling your home is personal. We treat every homeowner with respect and care." },
            ].map((value) => (
              <div key={value.title} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: "Homes Purchased" },
              { number: "5", label: "Markets Served" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "14", label: "Avg Days to Close" },
            ].map((stat) => (
              <div key={stat.label} className="bg-green-50 p-6 rounded-xl">
                <p className="text-3xl font-bold text-green-700">{stat.number}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Get your free, no-obligation cash offer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-offer"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Get My Cash Offer
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
