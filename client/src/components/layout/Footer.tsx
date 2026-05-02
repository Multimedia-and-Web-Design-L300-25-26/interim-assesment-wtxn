import { Link } from "wouter";

const footerColumns = [
  {
    title: "Company",
    links: [
      "About", "Careers", "Affiliates", "Blog", "Press", "Security",
      "Investors", "Vendors", "Legal & privacy", "Cookie policy",
      "Cookie preferences", "Do Not Sell or Share My Personal Information",
      "Digital Asset Disclosures",
    ],
  },
  {
    title: "Individuals",
    links: ["Buy & sell", "Base App", "Coinbase One", "Coinbase Wealth", "Credit Card", "Debit Card", "Explore predictions"],
    subTitle: "Businesses",
    subLinks: ["Asset Listings", "Coinbase Business", "Payments", "Token Manager"],
  },
  {
    title: "Institutions",
    links: ["Prime", "Staking", "Exchange", "International Exchange", "Derivatives Exchange", "Verified Pools"],
  },
  {
    title: "Developers",
    links: [
      "Developer Platform", "Base", "Server Wallets", "Embedded Wallets",
      "Base Accounts (Smart Wallets)", "Onramp & Offramp", "x402", "Paymaster",
      "OnchainKit", "Data API", "Verifications", "AgentKit", "Node",
      "Staking", "Faucet", "Exchange API", "International Exchange API",
      "Prime API", "Derivatives API",
    ],
  },
  {
    title: "Support",
    links: [
      "Help center", "Contact us", "Create account", "ID verification",
      "Account information", "Payment methods", "Account access", "Supported crypto", "Status",
    ],
    subTitle: "Asset prices",
    subLinks: ["Bitcoin price", "Ethereum price", "Solana price", "XRP price"],
  },
  {
    title: "Learn",
    links: [
      "Explore crypto", "Explore stocks", "Market statistics", "Coinbase Bytes newsletter",
      "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates",
      "What is Bitcoin?", "What is crypto?", "What is a blockchain?",
      "How to set up a crypto wallet?", "How to send crypto?", "Taxes",
    ],
    subTitle: "Stock prices",
    subLinks: ["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"],
  },
];

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <Link href="#" className="text-sm text-foreground/55 hover:text-foreground transition-colors leading-relaxed">
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

        {/* Top: Coinbase logo */}
        <div className="mb-10">
          <Link href="/" className="text-primary text-2xl font-bold">ⓒ</Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground mb-3">{col.title}</h4>
              <ul className="space-y-1.5">
                {col.links.map((l) => <FooterLink key={l} label={l} />)}
              </ul>
              {col.subTitle && (
                <>
                  <h4 className="text-sm font-semibold text-foreground mt-6 mb-3">{col.subTitle}</h4>
                  <ul className="space-y-1.5">
                    {col.subLinks!.map((l) => <FooterLink key={l} label={l} />)}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.2 8.2 0 004.78 1.52V6.8a4.85 4.85 0 01-1.01-.11z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
            <span>© 2026 Coinbase</span>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>

          {/* Region */}
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3a14.5 14.5 0 010 18M3 12h18" />
            </svg>
            <span>United States</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
