import { Link } from "wouter";
import { Twitter, Youtube, Instagram, Tv2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Press", "Investors", "Vendors"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Individuals & Businesses */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Individuals</h4>
            <ul className="space-y-2 mb-8">
              {["Buy & sell", "Earn free crypto", "Base App", "Coinbase One"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mb-4">Businesses</h4>
            <ul className="space-y-2">
              {["Asset Listings", "Coinbase Business", "Payments", "Commerce"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutions & Developers */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Institutions</h4>
            <ul className="space-y-2 mb-8">
              {["Prime", "Staking", "Exchange", "International Exchange"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mb-4">Developers</h4>
            <ul className="space-y-2">
              {["Developer Platform", "Base", "Server Wallets", "Embedded Wallets"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Learn */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 mb-8">
              {["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learn</h4>
            <ul className="space-y-2 mb-8">
              {["Market statistics", "Coinbase Bytes newsletter", "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Learn & Prices */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 opacity-0">Learn</h4>
            <ul className="space-y-2 mb-8">
              {["What is Bitcoin?", "What is crypto?", "What is a blockchain?", "How to set up a crypto wallet?", "How to send crypto?", "Taxes"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mb-4">Stock prices</h4>
            <ul className="space-y-2">
              {["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Tv2 size={20} />
            </a>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Coinbase</p>
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">🌐 Global</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">English</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
