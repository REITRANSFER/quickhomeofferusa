import type { Metadata } from "next";
import { getStateBySlug } from "@/lib/cities";
import { StateHub } from "@/components/sections/StateHub";
import { SITE_URL, COMPANY_NAME } from "@/lib/schema";

const state = getStateBySlug("maryland")!;

export const metadata: Metadata = {
  title: `Sell My House Fast in Maryland — Cash Home Buyers in ${state.cities.length} Markets`,
  description: `${COMPANY_NAME} buys houses for cash across Maryland including Bethesda, Silver Spring, and Rockville. No fees, no commissions. Close in 7-14 days.`,
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast/maryland` },
};

export default function MarylandPage() {
  return <StateHub state={state} />;
}
