import type { Metadata } from "next";
import { getStateBySlug } from "@/lib/cities";
import { StateHub } from "@/components/sections/StateHub";
import { SITE_URL, COMPANY_NAME } from "@/lib/schema";

const state = getStateBySlug("new-york")!;

export const metadata: Metadata = {
  title: `Sell My House Fast in New York — Cash Home Buyers in ${state.cities.length} Markets`,
  description: `${COMPANY_NAME} buys houses for cash across New York including Queens, Nassau County, Suffolk County, and Long Island. No fees, no commissions. Close in 7-14 days.`,
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast/new-york` },
};

export default function NewYorkPage() {
  return <StateHub state={state} />;
}
