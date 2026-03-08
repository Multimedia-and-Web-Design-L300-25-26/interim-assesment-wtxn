import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-sm text-muted-foreground mb-12 py-6 border-b border-border">
          <p>DEX trading is offered by Coinbase Formula Technologies Ltd.</p>
          <p className="mt-2">Products and features may not be available in all regions. Information is for informational purposes only, and is not in an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or do intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          
          <div>
            <Link href="/" className="text-primary text-2xl font-bold block mb-6">
              ⓒ
            </Link>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Investors", "Vendors", "Legal & privacy", "Cookie policy", "Cookie preferences", "Digital Asset Disclosures"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Individuals</h4>
            <ul className="space-y-3">
              {["Buy & sell", "Earn free crypto", "Base App", "Coinbase One", "Debit Card"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mt-8 mb-4">Businesses</h4>
            <ul className="space-y-3">
              {["Asset Listings", "Coinbase Business", "Payments", "Commerce", "Token Manager"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mt-8 mb-4">Institutions</h4>
            <ul className="space-y-3">
              {["Prime", "Staking", "Exchange"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Developers</h4>
            <ul className="space-y-3">
              {["Developer Platform", "Base", "Server Wallets", "Embedded Wallets", "Base Accounts (Smart Wallets)", "Onramp & Offramp", "x402", "Trade API", "Paymaster", "OnchainKit", "Data API", "Verifications", "Node", "AgentKit", "Staking", "Teapot", "Exchange API"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods", "Account access", "Supported crypto", "Status"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mt-8 mb-4">Asset prices</h4>
            <ul className="space-y-3">
              {["Bitcoin price", "Ethereum price", "Solana price", "XRP price"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mt-8 mb-4">Stock prices</h4>
            <ul className="space-y-3">
              {["NVIDIA price"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coinbase
          </p>
        </div>
      </div>
    </footer>
  );
}
