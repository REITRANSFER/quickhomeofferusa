import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  localBusinessSchema,
  faqPageSchema,
  SITE_URL,
  PHONE,
  COMPANY_NAME,
} from "@/lib/schema";
import {
  getAllCities,
  getCityBySlug,
  getNearbyCities,
  formatPopulation,
  formatCurrency,
} from "@/lib/cities";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCities().map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `We Buy Houses in ${city.city}, ${city.state} — Fast Cash Offers`,
    description: `We buy houses in ${city.city}, ${city.stateFull} in any condition. Get a fair cash offer in 24 hours. No fees, no commissions, no repairs needed. Close in as little as 7 days with ${COMPANY_NAME}.`,
    alternates: {
      canonical: `${SITE_URL}/we-buy-houses/${city.slug}`,
    },
  };
}

const GENERAL_FAQS = [
  {
    question: "How does selling to a cash buyer work?",
    answer:
      "You contact us with your property details, we evaluate it using local market data, and we present a fair cash offer within 24 hours. If you accept, we handle all paperwork and close on your timeline — as fast as 7 days.",
  },
  {
    question: "What condition do you buy houses in?",
    answer:
      "We buy houses in any condition — from move-in ready homes to properties that need major repairs. Fire damage, mold, structural issues, outdated everything — we've seen it all and we'll still make an offer.",
  },
  {
    question: "Is there any obligation if I get an offer?",
    answer:
      "None at all. Our cash offers are 100% free and no-obligation. You're under no pressure to accept. Take your time, compare your options, and make the decision that's right for you.",
  },
  {
    question: "Who pays the closing costs?",
    answer:
      "We do. When you sell to us, we pay all closing costs. There are also no agent commissions and no hidden fees. The number on your offer is the number you receive at closing.",
  },
];

export default async function WeBuyHousesPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearbyCities = getNearbyCities(city);

  const cityFAQs = [
    {
      question: `Do you really buy houses in ${city.city}, ${city.state}?`,
      answer: `Yes. We actively buy houses throughout ${city.city} and the surrounding ${city.region} area. We've purchased homes in all conditions and at all price points. The median home value in ${city.city} is ${formatCurrency(city.medianHomeValue)}, and we buy below, at, and above that range.`,
    },
    ...GENERAL_FAQS,
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(city.city, city.state)} />
      <JsonLd data={faqPageSchema(cityFAQs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "We Buy Houses", href: `/we-buy-houses/${slug}` },
            { name: `${city.city}, ${city.state}`, href: `/we-buy-houses/${slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            We Buy Houses in {city.city}, {city.state}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Any condition. Any situation. Any timeline. Get a fair cash offer for
            your {city.city} home in 24 hours and close in as little as 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-offer"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Get My Cash Offer
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We Buy All Types of {city.city} Properties
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {COMPANY_NAME} purchases residential properties throughout{" "}
            {city.city} and the {city.region} area. Population:{" "}
            {formatPopulation(city.population)}. Median home value:{" "}
            {formatCurrency(city.medianHomeValue)}.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Property Types</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Single-family homes</li>
                <li>• Condos & townhomes</li>
                <li>• Duplexes & multi-family</li>
                <li>• Vacant or occupied</li>
                <li>• Rental properties</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Any Condition</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Needs major repairs</li>
                <li>• Fire or water damage</li>
                <li>• Mold or structural issues</li>
                <li>• Outdated or run-down</li>
                <li>• Code violations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Any Situation</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Foreclosure or pre-foreclosure</li>
                <li>• Divorce or separation</li>
                <li>• Inherited or probate property</li>
                <li>• Job relocation</li>
                <li>• Behind on mortgage payments</li>
              </ul>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-16">
            {[
              { number: "500+", label: "Homes Purchased" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "7 Days", label: "Fastest Closing" },
              { number: "$0", label: "Fees & Commissions" },
            ].map((stat) => (
              <div key={stat.label} className="bg-blue-50 p-6 rounded-xl">
                <p className="text-2xl font-bold text-blue-800">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Simple Process */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Simple 3-Step Process
          </h2>
          <div className="space-y-6 mb-16">
            {[
              {
                step: "1",
                title: "Contact Us",
                desc: `Tell us about your ${city.city} property. Fill out our form or call ${PHONE}. Takes less than 2 minutes.`,
              },
              {
                step: "2",
                title: "Get Your Cash Offer",
                desc: `We evaluate your property using ${city.city} market data and present a fair, no-obligation offer within 24 hours.`,
              },
              {
                step: "3",
                title: "Close & Get Paid",
                desc: "Pick your closing date. We handle everything — paperwork, title, closing costs. You walk away with cash.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-link to sell-my-house-fast */}
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <p className="text-gray-600 mb-3">
              Want to learn more about the selling process in {city.city}?
            </p>
            <Link
              href={`/sell-my-house-fast/${slug}`}
              className="text-blue-800 font-semibold hover:underline"
            >
              Read our complete guide to selling your house fast in {city.city} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions — {city.city}, {city.state}
          </h2>
          <FAQ faqs={cityFAQs} showSchema={false} />
        </div>
      </section>

      {/* Nearby Markets */}
      {nearbyCities.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              We Also Buy Houses In
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/we-buy-houses/${nearby.slug}`}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm hover:border-blue-800 hover:text-blue-800 transition-colors"
                >
                  {nearby.city}, {nearby.state}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Get Your Free Cash Offer
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Sell your {city.city} home fast — no fees, no hassle.
          </p>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
