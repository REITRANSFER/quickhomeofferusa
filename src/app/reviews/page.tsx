import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { aggregateRatingSchema, SITE_URL, PHONE } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews — What Homeowners Say About Selling to Us",
  description:
    "Read reviews from homeowners who sold their houses fast for cash with Quick Home Offer USA. 4.9/5 stars from 200+ homeowners across Tampa, DC, New York, Raleigh, and Atlanta.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

const REVIEWS = [
  {
    name: "Maria S.",
    location: "Tampa, FL",
    situation: "Foreclosure",
    quote: "I was facing foreclosure and had 30 days to sell. Quick Home Offer gave me a fair cash offer within a day and we closed in 10 days. They saved my credit and gave me peace of mind during the most stressful time of my life.",
    stars: 5,
  },
  {
    name: "James W.",
    location: "Atlanta, GA",
    situation: "Inherited Property",
    quote: "After my mother passed, I inherited a house in terrible condition — roof leaking, mold in the basement, outdated everything. I didn't have the money or energy to fix it. They bought it as-is and handled everything. So grateful.",
    stars: 5,
  },
  {
    name: "Sarah K.",
    location: "Raleigh, NC",
    situation: "Divorce",
    quote: "Going through a divorce and needed to sell fast. No showings, no stress, no negotiations with buyers. They gave us a fair offer and we closed in two weeks. Made a horrible situation much easier.",
    stars: 5,
  },
  {
    name: "David R.",
    location: "Washington, DC",
    situation: "Relocation",
    quote: "Got a job offer in another state and needed to sell my house in DC within 3 weeks. My realtor said it would take 60-90 days minimum. Quick Home Offer closed in 12 days. Incredible.",
    stars: 5,
  },
  {
    name: "Linda P.",
    location: "Queens, NY",
    situation: "Vacant Property",
    quote: "Had a vacant rental property that was costing me money every month — taxes, insurance, maintenance. Selling through an agent would've taken months. Got a cash offer and was done in 2 weeks.",
    stars: 5,
  },
  {
    name: "Robert M.",
    location: "St. Petersburg, FL",
    situation: "Behind on Payments",
    quote: "I was 4 months behind on my mortgage and didn't know what to do. They walked me through my options and made a fair offer that covered my remaining balance plus gave me cash to start fresh.",
    stars: 5,
  },
  {
    name: "Angela T.",
    location: "Durham, NC",
    situation: "Probate",
    quote: "Dealing with probate was overwhelming enough without trying to sell a house. They handled everything and worked with our attorney to make the closing seamless. Five stars.",
    stars: 5,
  },
  {
    name: "Michael C.",
    location: "Arlington, VA",
    situation: "As-Is Sale",
    quote: "House needed $40K+ in repairs. No buyer would touch it with traditional financing. Quick Home Offer bought it as-is. I didn't have to fix a single thing. Fair offer, fast close, zero stress.",
    stars: 5,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={aggregateRatingSchema("4.9", "200")} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Homeowners Say About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg mb-2">
            <span className="text-yellow-500 text-2xl">★★★★★</span>
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-500">from 200+ homeowners</span>
          </div>
          <p className="text-gray-600">
            Real reviews from real homeowners across all of our markets.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-yellow-500 text-base">
                    {"★".repeat(review.stars)}
                  </div>
                  <span className="text-base bg-blue-100 text-blue-900 px-2 py-1 rounded-full">
                    {review.situation}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-base text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join 500+ Homeowners Who Sold Fast
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get your free, no-obligation cash offer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-offer"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg"
            >
              Get My Cash Offer
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
