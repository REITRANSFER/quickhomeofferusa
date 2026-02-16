import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { howToSchema, PHONE, SITE_URL } from "@/lib/schema";
import { MultiStepForm } from "@/components/forms/MultiStepForm";

export const metadata: Metadata = {
  title: "How It Works — Sell Your House for Cash in 3 Simple Steps",
  description:
    "Our process is simple: tell us about your property, get a cash offer in 24 hours, and close on your timeline. No fees, no commissions, no repairs needed.",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
};

const STEPS = [
  {
    name: "Tell Us About Your Property",
    text: "Fill out our quick online form or call us at " + PHONE + ". We just need the property address, general condition, and your preferred timeline. Takes less than 2 minutes.",
    url: `${SITE_URL}/#get-offer`,
  },
  {
    name: "Get Your Cash Offer Within 24 Hours",
    text: "Our team evaluates your property using current market data, comparable sales, and property condition. We present a fair, no-obligation cash offer — typically within 24 hours of your submission.",
  },
  {
    name: "Choose Your Closing Date and Get Paid",
    text: "Accept our offer and pick a closing date that works for you — as fast as 7 days or up to 60 days out. We handle all paperwork, title work, and closing costs. You walk away with cash.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={howToSchema(
          "How to Sell Your House Fast for Cash",
          "A simple 3-step process to sell your home for cash with no fees, no commissions, and no repairs.",
          STEPS
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "How It Works", href: "/how-it-works" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Selling Your House for Cash Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selling your house to a cash buyer takes 3 simple steps and can be completed
            in as little as 7 days. No real estate agents, no showings, no repairs, and
            zero fees or commissions.
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Step {i + 1}: {step.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            What Makes Selling to Us Different?
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "No Repairs Needed", desc: "We buy houses in any condition — fire damage, mold, structural issues, outdated everything. You don't spend a dollar." },
              { title: "Zero Fees or Commissions", desc: "Unlike selling with an agent (5-6% commission = $15K-$25K+), you pay absolutely nothing. Our offer is your net amount." },
              { title: "Close in 7-14 Days", desc: "Traditional sales take 60-90+ days. We can close in as little as 7 days because we use our own cash — no bank financing delays." },
              { title: "No Showings or Open Houses", desc: "No strangers walking through your home. No staging. No cleaning. We make one visit (or just use photos) and that's it." },
              { title: "Guaranteed Closing", desc: "30% of traditional deals fall through due to financing issues. We pay cash — when we make an offer, we close. Period." },
              { title: "We Handle Everything", desc: "Title work, paperwork, closing coordination, even clearing out items you leave behind. You just sign and collect your check." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Ready to Get Started?
          </h2>
          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
