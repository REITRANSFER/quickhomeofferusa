import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_URL } from "@/lib/schema";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Home Selling Resources — Guides, Tips, and Expert Advice",
  description:
    "Free guides and resources for homeowners looking to sell their house. Learn about cash buyers, selling as-is, foreclosure prevention, inherited property, and more.",
  alternates: { canonical: `${SITE_URL}/resources` },
};

export default function ResourcesPage() {
  const guides = getAllGuides();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Selling Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free guides, expert advice, and everything you need to know about
            selling your house — whether you&apos;re exploring options or ready to sell today.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Comprehensive Guides
          </h2>
          <div className="space-y-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-800 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-base font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-base mt-1">{guide.excerpt}</p>
                    <p className="text-base text-gray-400 mt-2">{guide.readTime}</p>
                  </div>
                  <span className="text-blue-800 font-bold text-xl flex-shrink-0">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Situation Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Selling in a Specific Situation?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Facing Foreclosure", href: "/situations/foreclosure" },
              { name: "Going Through Divorce", href: "/situations/divorce" },
              { name: "Inherited a Property", href: "/situations/inherited-property" },
              { name: "Dealing With Probate", href: "/situations/probate" },
              { name: "Relocating for Work", href: "/situations/relocation" },
              { name: "Behind on Payments", href: "/situations/behind-on-payments" },
              { name: "Own a Vacant Property", href: "/situations/vacant-property" },
              { name: "How Our Process Works", href: "/how-it-works" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-800 transition-colors"
              >
                <span className="text-blue-800 font-bold">→</span>
                <span className="text-gray-700 font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
