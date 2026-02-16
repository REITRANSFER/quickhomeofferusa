import type { Metadata } from "next";
import { getStateBySlug } from "@/lib/cities";
import { StateHub } from "@/components/sections/StateHub";
import { SITE_URL, COMPANY_NAME } from "@/lib/schema";

const state = getStateBySlug("virginia")!;

export const metadata: Metadata = {
  title: `Sell My House Fast in Virginia — Cash Home Buyers in ${state.cities.length} Markets`,
  description: `${COMPANY_NAME} buys houses for cash across Virginia including Arlington, Alexandria, and Fairfax. No fees, no commissions. Close in 7-14 days.`,
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast/virginia` },
};

export default function VirginiaPage() {
  return <StateHub state={state} />;
}
