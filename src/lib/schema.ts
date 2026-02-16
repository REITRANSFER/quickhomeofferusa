// JSON-LD Schema generators for quickhomeofferusa.com
// All schemas follow schema.org specifications for SEO + GEO optimization

export const SITE_URL = "https://quickhomeofferusa.com";
export const COMPANY_NAME = "Quick Home Offer USA";
export const PHONE = "(813) 540-9555";
export const EMAIL = "info@quickhomeofferusa.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "We buy houses fast for cash in any condition. Get a fair cash offer within 24 hours — no fees, no commissions, no repairs needed.",
    telephone: PHONE,
    email: EMAIL,
    areaServed: [
      { "@type": "State", name: "Florida" },
      { "@type": "State", name: "Virginia" },
      { "@type": "State", name: "Maryland" },
      { "@type": "State", name: "New York" },
      { "@type": "State", name: "North Carolina" },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "District of Columbia" },
    ],
    sameAs: [
      "https://www.facebook.com/quickhomeofferusa",
      "https://www.linkedin.com/company/quickhomeofferusa",
      "https://www.youtube.com/@quickhomeofferusa",
      "https://www.instagram.com/quickhomeofferusa",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "sales",
      availableLanguage: "English",
    },
  };
}

export function localBusinessSchema(city: string, state: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/sell-my-house-fast/${city.toLowerCase().replace(/\s+/g, "-")}-${state.toLowerCase()}/#localbusiness`,
    name: `${COMPANY_NAME} — ${city}, ${state}`,
    url: `${SITE_URL}/sell-my-house-fast/${city.toLowerCase().replace(/\s+/g, "-")}-${state.toLowerCase()}`,
    telephone: PHONE,
    description: `We buy houses fast for cash in ${city}, ${state}. Get a fair offer in 24 hours — no fees, no commissions, no repairs.`,
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: state,
      },
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; url?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  };
}

export function articleSchema(
  headline: string,
  description: string,
  datePublished: string,
  dateModified: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: `${SITE_URL}/blog/${slug}/og-image.jpg`,
  };
}

export function aggregateRatingSchema(
  ratingValue: string,
  reviewCount: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      bestRating: "5",
      ratingCount: reviewCount,
      reviewCount,
    },
  };
}

export function serviceSchema(city: string, state: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cash Home Buying in ${city}, ${state}`,
    description: `Fast cash offers for houses in ${city}, ${state}. We buy houses in any condition — close in as little as 7 days.`,
    provider: {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: state,
      },
    },
    serviceType: "Cash Home Buying",
    category: "Real Estate",
  };
}
