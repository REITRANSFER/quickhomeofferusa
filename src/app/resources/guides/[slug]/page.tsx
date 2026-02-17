import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { MultiStepForm } from "@/components/forms/MultiStepForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, faqPageSchema, SITE_URL, COMPANY_NAME } from "@/lib/schema";
import { getAllGuides, getGuideBySlug, getRelatedGuides } from "@/lib/guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/resources/guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedGuides(guide);

  return (
    <>
      <JsonLd
        data={articleSchema(
          guide.title,
          guide.metaDescription,
          guide.datePublished,
          guide.dateModified,
          guide.slug
        )}
      />
      <JsonLd data={faqPageSchema(guide.faqs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources" },
            { name: "Guides", href: "/resources/guides" },
            { name: guide.title, href: `/resources/guides/${guide.slug}` },
          ]}
        />
      </div>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <span className="text-sm font-medium text-blue-800 mb-2 block">
              {guide.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {guide.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{guide.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By {COMPANY_NAME}</span>
              <span>·</span>
              <span>{guide.readTime}</span>
              <span>·</span>
              <time dateTime={guide.dateModified}>
                Updated{" "}
                {new Date(guide.dateModified).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 rounded-xl mb-10">
            <h2 className="font-bold text-gray-900 mb-3">In This Guide</h2>
            <ol className="space-y-2">
              {guide.sections.map((section, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    className="text-sm text-blue-800 hover:underline"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="text-sm text-blue-800 hover:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* Content Sections */}
          {guide.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div
                className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-blue-800 prose-a:no-underline hover:prose-a:underline prose-table:border-collapse prose-td:border prose-td:border-gray-200 prose-td:p-3 prose-th:border prose-th:border-gray-200 prose-th:p-3 prose-th:bg-gray-50 prose-th:text-left prose-th:font-semibold"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <FAQ faqs={guide.faqs} showSchema={false} />
          </section>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Related Guides
              </h2>
              <div className="grid gap-4">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/resources/guides/${related.slug}`}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">
                        {related.title}
                      </p>
                      <p className="text-sm text-gray-500">{related.readTime}</p>
                    </div>
                    <span className="text-blue-800 font-bold">→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Situations */}
          {guide.relatedSituations.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Related Situations
              </h2>
              <div className="flex flex-wrap gap-3">
                {guide.relatedSituations.map((path) => {
                  const name = path
                    .split("/")
                    .pop()!
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:border-blue-800 hover:text-blue-800 transition-colors"
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Ready to Get Your Cash Offer?
          </h2>
          <p className="text-blue-100 text-center mb-8">
            Free, no-obligation offer in 24 hours.
          </p>
          <div className="bg-white p-8 rounded-xl">
            <MultiStepForm />
          </div>
        </div>
      </section>
    </>
  );
}
