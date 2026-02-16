import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  localBusinessSchema,
  serviceSchema,
  faqPageSchema,
  SITE_URL,
  PHONE,
  COMPANY_NAME,
} from "@/lib/schema";
import {
  getAllCities,
  getCityBySlug,
  getNearbyCities,
  getCityIntro,
  getCityFAQs,
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
    title: `Sell My House Fast in ${city.city}, ${city.state} — Cash Offer in 24 Hours`,
    description: `Need to sell your house fast in ${city.city}, ${city.stateFull}? Get a fair cash offer within 24 hours. No fees, no commissions, no repairs. Close in as little as 7 days. ${COMPANY_NAME} buys houses in any condition.`,
    alternates: {
      canonical: `${SITE_URL}/sell-my-house-fast/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearbyCities = getNearbyCities(city);
  const cityIntro = getCityIntro(city);
  const cityFAQs = getCityFAQs(city);

  return (
    <>
      <JsonLd data={localBusinessSchema(city.city, city.state)} />
      <JsonLd data={serviceSchema(city.city, city.state)} />
      <JsonLd data={faqPageSchema(cityFAQs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Sell My House Fast", href: "/sell-my-house-fast/" + slug },
            { name: `${city.city}, ${city.state}`, href: `/sell-my-house-fast/${slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sell My House Fast in {city.city}, {city.state} — Cash Offer in 24 Hours
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Need to sell your {city.city} home quickly? {COMPANY_NAME} buys
            houses in any condition — no fees, no commissions, no repairs. Get a
            fair cash offer today.
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

      {/* City Intro + Market Data */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-700">
                {formatPopulation(city.population)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Population</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-700">
                {formatCurrency(city.medianHomeValue)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Median Home Value</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-700">7-14 Days</p>
              <p className="text-sm text-gray-600 mt-1">Our Avg. Closing Time</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sell Your House Fast in {city.city}, {city.stateFull}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {cityIntro}
          </p>

          {/* How It Works */}
          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
            How to Sell Your {city.city} House in 3 Steps
          </h2>
          <div className="space-y-8 mb-12">
            {[
              {
                step: "1",
                title: "Tell Us About Your Property",
                desc: `Fill out our quick form or call us at ${PHONE}. We just need your ${city.city} property address, general condition, and your timeline.`,
              },
              {
                step: "2",
                title: "Get a Cash Offer in 24 Hours",
                desc: `We analyze comparable sales in ${city.city} and the ${city.region} area, evaluate your property's condition, and present a fair, no-obligation cash offer.`,
              },
              {
                step: "3",
                title: "Close and Get Paid",
                desc: `Accept our offer and pick your closing date — as fast as 7 days. We handle all paperwork, title work, and closing costs. You walk away with cash.`,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cash vs Agent Comparison */}
          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
            Selling to {COMPANY_NAME} vs. Listing With a {city.city} Agent
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-12">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 font-semibold text-gray-900">Factor</th>
                  <th className="p-4 font-semibold text-green-700">
                    {COMPANY_NAME}
                  </th>
                  <th className="p-4 font-semibold text-gray-500">
                    Traditional Agent
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    factor: "Timeline",
                    us: "7-14 days",
                    them: "60-90+ days",
                  },
                  {
                    factor: "Fees & Commissions",
                    us: "$0",
                    them: `${formatCurrency(city.medianHomeValue * 0.06)} (6%)`,
                  },
                  { factor: "Repairs Needed", us: "None", them: "$5K-$30K+" },
                  {
                    factor: "Showings",
                    us: "0 (one visit)",
                    them: "10-30+",
                  },
                  { factor: "Closing Certainty", us: "Guaranteed", them: "30% fall through" },
                  { factor: "Closing Costs", us: "We pay them", them: "You pay ~2-4%" },
                ].map((row) => (
                  <tr key={row.factor}>
                    <td className="p-4 font-medium text-gray-900">
                      {row.factor}
                    </td>
                    <td className="p-4 text-green-700 font-medium">{row.us}</td>
                    <td className="p-4 text-gray-500">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Situations We Help With */}
          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
            Situations We Help {city.city} Homeowners With
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { name: "Foreclosure", href: "/situations/foreclosure" },
              { name: "Divorce", href: "/situations/divorce" },
              { name: "Inherited Property", href: "/situations/inherited-property" },
              { name: "Probate", href: "/situations/probate" },
              { name: "Job Relocation", href: "/situations/relocation" },
              { name: "Behind on Payments", href: "/situations/behind-on-payments" },
              { name: "Vacant Property", href: "/situations/vacant-property" },
              { name: "Needs Major Repairs", href: "/how-it-works" },
            ].map((situation) => (
              <Link
                key={situation.name}
                href={situation.href}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                <span className="text-green-700 font-bold">→</span>
                <span className="text-gray-700">{situation.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Selling Your House in {city.city} — FAQ
          </h2>
          <FAQ faqs={cityFAQs} showSchema={false} />
        </div>
      </section>

      {/* Nearby Markets */}
      {nearbyCities.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              We Also Buy Houses Near {city.city}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/sell-my-house-fast/${nearby.slug}`}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm hover:border-green-700 hover:text-green-700 transition-colors"
                >
                  {nearby.city}, {nearby.state}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-green-700">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Ready to Sell Your {city.city} Home?
          </h2>
          <p className="text-green-100 text-center mb-8">
            Get a no-obligation cash offer in 24 hours.
          </p>
          <div className="bg-white p-8 rounded-xl">
            <MultiStepForm />
          </div>
        </div>
      </section>
    </>
  );
}
