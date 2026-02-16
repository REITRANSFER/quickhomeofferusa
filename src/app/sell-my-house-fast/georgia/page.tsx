import type { Metadata } from "next";
import { getStateBySlug } from "@/lib/cities";
import { StateHub } from "@/components/sections/StateHub";
import { SITE_URL, COMPANY_NAME } from "@/lib/schema";

const state = getStateBySlug("georgia")!;

export const metadata: Metadata = {
  title: `Sell My House Fast in Georgia — Cash Home Buyers in ${state.cities.length} Markets`,
  description: `${COMPANY_NAME} buys houses for cash across Georgia including Atlanta, Marietta, Decatur, Sandy Springs, and Roswell. No fees, no commissions. Close in 7-14 days.`,
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast/georgia` },
};

export default function GeorgiaPage() {
  return <StateHub state={state} />;
}
