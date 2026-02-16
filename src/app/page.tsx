import Link from "next/link";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { FAQ } from "@/components/sections/FAQ";
import { PHONE } from "@/lib/schema";
import faqData from "@/data/faqs.json";

const SITUATIONS = [
  { href: "/situations/foreclosure", label: "Facing Foreclosure", icon: "🏠", description: "Sell before the bank takes your home" },
  { href: "/situations/divorce", label: "Going Through Divorce", icon: "📋", description: "Simplify asset division quickly" },
  { href: "/situations/inherited-property", label: "Inherited Property", icon: "🔑", description: "Sell a house you don't want to keep" },
  { href: "/situations/behind-on-payments", label: "Behind on Payments", icon: "💰", description: "Get out from under your mortgage" },
  { href: "/situations/relocation", label: "Job Relocation", icon: "✈️", description: "Sell fast when you need to move" },
  { href: "/situations/vacant-property", label: "Vacant Property", icon: "🏚️", description: "Stop paying for a house you don't use" },
];

const MARKETS = [
  { href: "/sell-my-house-fast/tampa-fl", label: "Tampa, FL" },
  { href: "/sell-my-house-fast/st-petersburg-fl", label: "St. Petersburg, FL" },
  { href: "/sell-my-house-fast/washington-dc", label: "Washington, DC" },
  { href: "/sell-my-house-fast/arlington-va", label: "Arlington, VA" },
  { href: "/sell-my-house-fast/queens-ny", label: "Queens, NY" },
  { href: "/sell-my-house-fast/nassau-county-ny", label: "Nassau County, NY" },
  { href: "/sell-my-house-fast/raleigh-nc", label: "Raleigh, NC" },
  { href: "/sell-my-house-fast/durham-nc", label: "Durham, NC" },
  { href: "/sell-my-house-fast/atlanta-ga", label: "Atlanta, GA" },
  { href: "/sell-my-house-fast/marietta-ga", label: "Marietta, GA" },
];

const STEPS = [
  {
    number: "1",
    title: "Tell Us About Your Property",
    description: "Fill out our quick form or call us. We just need your address and a few details about your home — takes less than 2 minutes.",
  },
  {
    number: "2",
    title: "Get Your Cash Offer in 24 Hours",
    description: "We evaluate your property using current market data and present you with a fair, no-obligation cash offer within 24 hours.",
  },
  {
    number: "3",
    title: "Close on Your Timeline",
    description: "Accept our offer and choose your closing date — as fast as 7 days or whenever works for you. We handle all the paperwork. You walk away with cash.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — ABOVE THE FOLD (CRO-focused) */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Copy */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Sell Your House Fast for Cash — Get a Fair Offer in{" "}
                <span className="text-green-700">24 Hours</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                No fees. No commissions. No repairs. We buy houses in any condition
                and close in as little as 7 days. Skip the hassle of listing with
                an agent and get cash in your pocket fast.
              </p>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>4.9/5 from 200+ homeowners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">500+</span>
                  <span>homes purchased</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">7-day</span>
                  <span>closing available</span>
                </div>
              </div>

              {/* Phone CTA for mobile */}
              <div className="mt-8 lg:hidden">
                <a
                  href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                  className="block bg-green-700 text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-green-800 transition-colors"
                >
                  Call Now: {PHONE}
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div id="get-offer">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — MIDDLE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">
              How It Works — 3 Simple Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Selling your house for cash is straightforward. No showings, no open houses,
              no waiting for buyer financing. Here is exactly how the process works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-green-700 font-semibold hover:underline"
            >
              Learn more about our process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison — Cash Buyer vs Realtor */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Sell to a Cash Buyer Instead of Listing With an Agent?
          </h2>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 pr-6 text-gray-500 font-medium"></th>
                  <th className="py-4 px-6 text-green-700 font-bold">Sell to Us</th>
                  <th className="py-4 px-6 text-gray-400 font-bold">Traditional Agent</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Commissions & Fees", "None — $0", "5-6% ($15K-$25K+)"],
                  ["Repairs Needed", "None — sell as-is", "$10K-$30K average"],
                  ["Time to Close", "7-14 days", "60-90+ days"],
                  ["Showings & Open Houses", "None", "Dozens of strangers in your home"],
                  ["Closing Certainty", "Guaranteed cash — no financing contingency", "30% of deals fall through"],
                  ["You Pay for", "Nothing", "Staging, cleaning, landscaping, repairs"],
                ].map(([label, us, agent]) => (
                  <tr key={label} className="border-b border-gray-100">
                    <td className="py-4 pr-6 font-medium text-gray-900">{label}</td>
                    <td className="py-4 px-6 text-green-700 font-medium">{us}</td>
                    <td className="py-4 px-6 text-gray-500">{agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            We Help Homeowners in Every Situation
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            No matter what you are going through, we can help. We have purchased
            homes from homeowners in all of these situations — and we make the
            process as stress-free as possible.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITUATIONS.map((situation) => (
              <Link
                key={situation.href}
                href={situation.href}
                className="block p-6 border border-gray-200 rounded-xl hover:border-green-700 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{situation.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{situation.label}</h3>
                <p className="text-sm text-gray-600">{situation.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Homeowners Say About Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was facing foreclosure and had 30 days to sell. Quick Home Offer gave me a fair cash offer within a day and we closed in 10 days. They saved my credit.",
                name: "Maria S.",
                location: "Tampa, FL",
                stars: 5,
              },
              {
                quote: "After my mother passed, I inherited a house in terrible condition. I didn't have the money or energy to fix it. They bought it as-is and handled everything. So grateful.",
                name: "James W.",
                location: "Atlanta, GA",
                stars: 5,
              },
              {
                quote: "Going through a divorce and needed to sell fast. No showings, no stress. They gave us a fair offer and we closed in two weeks. Highly recommend.",
                name: "Sarah K.",
                location: "Raleigh, NC",
                stars: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-yellow-500 text-sm mb-3">
                  {"★".repeat(testimonial.stars)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="text-green-700 font-semibold hover:underline"
            >
              Read more reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Markets We Serve
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We buy houses for cash in these markets. Click your area to learn more
            about selling your home fast in your city.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {MARKETS.map((market) => (
              <Link
                key={market.href}
                href={market.href}
                className="text-center py-3 px-4 border border-gray-200 rounded-lg hover:border-green-700 hover:bg-green-50 transition-all text-sm font-medium text-gray-700 hover:text-green-700"
              >
                {market.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — BELOW THE FOLD (SEO-focused) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQ faqs={faqData.general.slice(0, 8)} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-green-700 font-semibold hover:underline"
            >
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell Your House Fast?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Get your free, no-obligation cash offer today. No fees, no commissions,
            no repairs — just a fair price and a fast closing.
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
