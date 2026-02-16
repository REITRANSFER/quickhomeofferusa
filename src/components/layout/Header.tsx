"use client";

import Link from "next/link";
import { useState } from "react";
import { PHONE } from "@/lib/schema";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/situations/foreclosure", label: "Situations" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-700 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">QH</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
              Quick Home Offer<span className="text-green-700"> USA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
              className="text-sm font-medium text-gray-700 hover:text-green-700"
            >
              {PHONE}
            </a>
            <Link
              href="/#get-offer"
              className="bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors"
            >
              Get My Cash Offer
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-green-700 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                className="text-green-700 font-semibold py-1"
              >
                Call {PHONE}
              </a>
              <Link
                href="/#get-offer"
                onClick={() => setMobileOpen(false)}
                className="bg-green-700 text-white px-5 py-3 rounded-lg text-center font-semibold mt-2"
              >
                Get My Cash Offer
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
