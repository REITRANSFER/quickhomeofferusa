import type { Metadata } from "next";
import { getStateBySlug } from "@/lib/cities";
import { StateHub } from "@/components/sections/StateHub";
import { SITE_URL, COMPANY_NAME } from "@/lib/schema";

const state = getStateBySlug("north-carolina")!;

export const metadata: Metadata = {
  title: `Sell My House Fast in North Carolina — Cash Home Buyers in ${state.cities.length} Markets`,
  description: `${COMPANY_NAME} buys houses for cash across North Carolina including Raleigh, Durham, Cary, and Chapel Hill. No fees, no commissions. Close in 7-14 days.`,
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast/north-carolina` },
};

export default function NorthCarolinaPage() {
  return <StateHub state={state} />;
}
