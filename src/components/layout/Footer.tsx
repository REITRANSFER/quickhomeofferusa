import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME, PHONE, EMAIL } from "@/lib/schema";

const MARKET_LINKS = [
  { href: "/sell-my-house-fast/tampa-fl", label: "Tampa, FL" },
  { href: "/sell-my-house-fast/washington-dc", label: "Washington, DC" },
  { href: "/sell-my-house-fast/queens-ny", label: "Queens, NY" },
  { href: "/sell-my-house-fast/raleigh-nc", label: "Raleigh, NC" },
  { href: "/sell-my-house-fast/atlanta-ga", label: "Atlanta, GA" },
  { href: "/sell-my-house-fast/st-petersburg-fl", label: "St. Petersburg, FL" },
  { href: "/sell-my-house-fast/durham-nc", label: "Durham, NC" },
  { href: "/sell-my-house-fast/arlington-va", label: "Arlington, VA" },
];

const SITUATION_LINKS = [
  { href: "/situations/foreclosure", label: "Foreclosure" },
  { href: "/situations/divorce", label: "Divorce" },
  { href: "/situations/inherited-property", label: "Inherited Property" },
  { href: "/situations/probate", label: "Probate" },
  { href: "/situations/relocation", label: "Relocation" },
  { href: "/situations/behind-on-payments", label: "Behind on Payments" },
  { href: "/situations/vacant-property", label: "Vacant Property" },
];

const COMPANY_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Quick Home Offer USA" width={32} height={32} />
              <span className="text-white font-bold text-lg">
                Quick Home Offer<span className="text-green-400"> USA</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              We buy houses fast for cash in any condition. No fees, no commissions,
              no repairs. Get a fair offer in 24 hours.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`} className="hover:text-white">
                  {PHONE}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Markets We Serve</h3>
            <ul className="space-y-2 text-sm">
              {MARKET_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Situations</h3>
            <ul className="space-y-2 text-sm">
              {SITUATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
