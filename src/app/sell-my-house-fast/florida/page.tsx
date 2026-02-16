import type { Metadata } from "next";
import { getStateBySlug } from "@/lib/cities";
import { StateHub } from "@/components/sections/StateHub";
import { SITE_URL, COMPANY_NAME } from "@/lib/schema";

const state = getStateBySlug("florida")!;

export const metadata: Metadata = {
  title: `Sell My House Fast in Florida — Cash Home Buyers in ${state.cities.length} Markets`,
  description: `${COMPANY_NAME} buys houses for cash across Florida including Tampa, St. Petersburg, Clearwater, Brandon, and Lakeland. No fees, no commissions. Close in 7-14 days.`,
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast/florida` },
};

export default function FloridaPage() {
  return <StateHub state={state} />;
}
