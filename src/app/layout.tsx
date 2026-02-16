import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, SITE_URL, COMPANY_NAME } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Sell Your House Fast for Cash | ${COMPANY_NAME}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "We buy houses fast for cash in any condition. No fees, no commissions, no repairs. Get a fair cash offer in 24 hours. Serving Tampa Bay, DMV, New York, Raleigh-Durham, and Atlanta.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `Sell Your House Fast for Cash | ${COMPANY_NAME}`,
    description:
      "We buy houses fast for cash in any condition. No fees, no commissions, no repairs. Get a fair cash offer in 24 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Sell Your House Fast for Cash | ${COMPANY_NAME}`,
    description:
      "We buy houses fast for cash in any condition. No fees, no commissions, no repairs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
