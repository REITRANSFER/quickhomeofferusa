export interface GuideSection {
  heading: string;
  content: string; // HTML string for rich content
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  category: string;
  sections: GuideSection[];
  faqs: Array<{ question: string; answer: string }>;
  relatedGuides: string[]; // slugs
  relatedSituations: string[]; // paths
}

// Guide registry — import individual guide data files
import { guideHowToSellFast } from "@/data/guides/how-to-sell-your-house-fast";
import { guideSellAsIs } from "@/data/guides/selling-house-as-is";
import { guideCashBuyerVsRealtor } from "@/data/guides/cash-buyer-vs-realtor";
import { guideForeclosurePrevention } from "@/data/guides/foreclosure-prevention";
import { guideInheritedProperty } from "@/data/guides/inherited-property-guide";

const ALL_GUIDES: Guide[] = [
  guideHowToSellFast,
  guideSellAsIs,
  guideCashBuyerVsRealtor,
  guideForeclosurePrevention,
  guideInheritedProperty,
];

export function getAllGuides(): Guide[] {
  return ALL_GUIDES;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug);
}

export function getRelatedGuides(guide: Guide): Guide[] {
  return guide.relatedGuides
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is Guide => g !== undefined);
}
