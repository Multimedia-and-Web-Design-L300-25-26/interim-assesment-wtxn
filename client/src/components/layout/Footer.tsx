import { Link } from "wouter";

export function Footer() {
  const footerLinks = {
    Company: ["About", "Careers", "Affiliates", "Blog", "Press", "Investors", "Legal & privacy", "Cookie policy", "Cookie preferences"],
    Learn: ["Browse crypto prices", "Coinbase Bytes", "Crypto basics", "Tips & tutorials", "Market updates", "What is Bitcoin?", "What is crypto?", "What is a blockchain?"],
    Support: ["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods", "Account access", "Supported crypto"],
    Developers: ["Developer Platform", "Wallet SDK", "Coinbase Pay SDK", "Node API", "Commerce API", "Rosetta"]
  };

  return (
    <footer className="bg-white border-t border-border/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="text-primary text-2xl font-bold tracking-tighter block mb-4">
              coinbase
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              © {new Date().getFullYear()} Coinbase<br/>
              <span className="mt-2 block">Buy, sell, and manage your crypto on the go.</span>
            </p>
            <div className="flex space-x-4">
              <select className="bg-transparent border border-border rounded-md text-sm py-1 px-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </footer>
  );
}
