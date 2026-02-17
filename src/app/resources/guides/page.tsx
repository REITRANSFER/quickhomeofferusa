import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_URL } from "@/lib/schema";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Home Selling Guides — Expert Advice for Homeowners",
  description:
    "In-depth guides on selling your house fast, selling as-is, comparing cash buyers vs. realtors, foreclosure prevention, and selling inherited property.",
  alternates: { canonical: `${SITE_URL}/resources/guides` },
};

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources" },
            { name: "Guides", href: "/resources/guides" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Selling Guides
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Everything you need to know about selling your house — written by
            industry experts who have purchased over 500 homes.
          </p>

          <div className="space-y-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-800 hover:shadow-sm transition-all"
              >
                <span className="text-base font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded-full">
                  {guide.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-3">
                  {guide.title}
                </h2>
                <p className="text-gray-600 mt-2">{guide.excerpt}</p>
                <div className="flex items-center gap-3 mt-3 text-base text-gray-400">
                  <span>{guide.readTime}</span>
                  <span>·</span>
                  <time dateTime={guide.dateModified}>
                    Updated{" "}
                    {new Date(guide.dateModified).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
