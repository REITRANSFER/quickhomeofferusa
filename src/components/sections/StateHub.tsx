import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { PHONE, COMPANY_NAME } from "@/lib/schema";
import { type StateData, formatPopulation, formatCurrency } from "@/lib/cities";

export function StateHub({ state }: { state: StateData }) {
  const totalPopulation = state.cities.reduce((sum, c) => sum + c.population, 0);
  const avgHomeValue = Math.round(
    state.cities.reduce((sum, c) => sum + c.medianHomeValue, 0) / state.cities.length
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            {
              name: `Sell My House Fast in ${state.name}`,
              href: `/sell-my-house-fast/${state.slug}`,
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sell My House Fast in {state.name} — Cash Buyers in {state.cities.length} Markets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {COMPANY_NAME} buys houses for cash across {state.name}. No fees, no
            commissions, no repairs needed. Get a fair offer in 24 hours and
            close in as little as 7 days.
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

      {/* State Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-800">
                {state.cities.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Markets Served</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-800">
                {formatPopulation(totalPopulation)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Combined Population</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-blue-800">
                {formatCurrency(avgHomeValue)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Avg. Home Value</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {state.name} Markets We Serve
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {state.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/sell-my-house-fast/${city.slug}`}
                className="flex items-center justify-between bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-800 hover:shadow-sm transition-all"
              >
                <div>
                  <p className="font-bold text-gray-900">
                    {city.city}, {city.state}
                  </p>
                  <p className="text-sm text-gray-500">
                    Pop. {formatPopulation(city.population)} · Median{" "}
                    {formatCurrency(city.medianHomeValue)}
                  </p>
                </div>
                <span className="text-blue-800 font-bold">→</span>
              </Link>
            ))}
          </div>

          {/* Why Sell in State */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why {state.name} Homeowners Sell to {COMPANY_NAME}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: "Fast Closings",
                desc: `Close on your ${state.name} property in as little as 7 days. We use our own cash — no waiting on bank approvals.`,
              },
              {
                title: "Zero Fees",
                desc: "We pay all closing costs. No agent commissions (saving you 5-6%), no hidden fees.",
              },
              {
                title: "Any Condition",
                desc: `We buy ${state.name} homes in any condition. Roof damage, mold, structural issues — you don't spend a dollar on repairs.`,
              },
              {
                title: "Any Situation",
                desc: "Foreclosure, divorce, inherited property, relocation, behind on payments — we've helped homeowners in every situation.",
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

          {/* Situations */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Situations We Help With
          </h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              { name: "Foreclosure", href: "/situations/foreclosure" },
              { name: "Divorce", href: "/situations/divorce" },
              { name: "Inherited Property", href: "/situations/inherited-property" },
              { name: "Probate", href: "/situations/probate" },
              { name: "Relocation", href: "/situations/relocation" },
              { name: "Behind on Payments", href: "/situations/behind-on-payments" },
              { name: "Vacant Property", href: "/situations/vacant-property" },
            ].map((situation) => (
              <Link
                key={situation.name}
                href={situation.href}
                className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:border-blue-800 hover:text-blue-800 transition-colors"
              >
                {situation.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Sell Your {state.name} Home Fast
          </h2>
          <p className="text-blue-100 text-center mb-8">
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
