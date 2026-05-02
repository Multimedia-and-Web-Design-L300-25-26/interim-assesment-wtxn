import { Link, useLocation } from "wouter";
import {
  Menu, X, Search, Globe,
  TrendingUp, BarChart2, Layers, LineChart, Tag, Sliders,
  CreditCard, Wallet, Percent, DollarSign, PiggyBank, Smartphone,
  Briefcase, Settings, ArrowRight, Clock, Eye, Repeat2, LayoutGrid,
  Zap, Building2, Landmark, Rocket,
  Info, Users, Newspaper, HelpCircle, Shield,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// ── Menu data ──────────────────────────────────────────────────────────────────

const individualsMenu = {
  trade: [
    { icon: TrendingUp, label: "Crypto",             badge: null,  desc: "Buy and sell cryptocurrencies" },
    { icon: BarChart2,  label: "Prediction markets", badge: "New", desc: "Trade on sports, crypto, politics, and more" },
    { icon: Layers,     label: "Derivatives",         badge: "New", desc: "Amplify your trades with futures and perpetual futures" },
    { icon: LineChart,  label: "Stocks",              badge: "New", desc: "Commission-free 24/5 stock trading" },
    { icon: Tag,        label: "Token sales",         badge: "New", desc: "Get early access to upcoming tokens" },
    { icon: Sliders,    label: "Advanced",            badge: null,  desc: "Professional-grade trading tools" },
  ],
  earn: [
    { icon: CreditCard, label: "Credit Card",    badge: "New", desc: "Earn up to 4% Bitcoin back on every purchase. Terms apply." },
    { icon: Wallet,     label: "Debit card",     badge: null,  desc: "Earn crypto rewards in Visa debit" },
    { icon: Percent,    label: "Staking",        badge: null,  desc: "Stake your crypto and earn rewards" },
    { icon: DollarSign, label: "USDC rewards",   badge: null,  desc: "Earn up to 3.50% APY through USDC" },
    { icon: PiggyBank,  label: "Borrow",         badge: null,  desc: "Get a crypto-backed loan up to $1M" },
    { icon: Smartphone, label: "Base App",       badge: null,  desc: "Post, earn, trade, discover apps, and chat with friends, all in one place" },
  ],
};

const businessesMenu = {
  left: [
    { icon: Briefcase, label: "Business",       badge: null, desc: "Crypto trading and payments for startups and SMBs" },
    { icon: Settings,  label: "Asset Listings", badge: null, desc: "List your asset on Coinbase" },
  ],
  right: [
    { icon: CreditCard, label: "Payments",       badge: null, desc: "The stablecoin payments stack for commerce platforms" },
    { icon: Tag,        label: "Token Manager",  badge: null, desc: "The platform for token distributions, vesting, and lockups" },
  ],
};

const institutionsMenu = {
  prime: [
    { icon: Clock,      label: "Trading and Financing", badge: null, desc: "Professional prime brokerage services" },
    { icon: Eye,        label: "Custody",                badge: null, desc: "Securely store all your digital assets" },
    { icon: Percent,    label: "Staking",                badge: null, desc: "Explore staking across our products" },
    { icon: LayoutGrid, label: "Onchain Wallet",         badge: null, desc: "Institutional-grade wallet to get onchain" },
  ],
  markets: [
    { icon: Repeat2,  label: "Exchange",              badge: null, desc: "Spot markets for high-frequency trading" },
    { icon: Globe,    label: "International Exchange", badge: null, desc: "Access perpetual futures markets" },
    { icon: Settings, label: "Derivatives Exchange",   badge: null, desc: "Trade an accessible futures market" },
    { icon: Layers,   label: "Verified Pools",         badge: null, desc: "Transparent, verified liquidity pools" },
  ],
};

const developersMenu = {
  platform: [
    { icon: Zap,      label: "Payments",    badge: null, desc: "Fast and global stablecoin payments with a single integration" },
    { icon: BarChart2, label: "Trading",    badge: null, desc: "Launch crypto trading and custody for your users" },
    { icon: Wallet,   label: "Wallets",     badge: null, desc: "Deploy customizable and scalable wallets for your business" },
    { icon: DollarSign, label: "Stablecoins", badge: null, desc: "Access USDC and Coinbase Custom Stablecoins" },
  ],
  solutions: [
    { icon: Landmark, label: "Banks & Brokerages", badge: null, desc: "Secure, regulated offerings for retail, private banking, & institutional clients" },
    { icon: Building2, label: "Payment Firms",     badge: null, desc: "Near-instant, low-cost, global payment rails for modern providers" },
    { icon: Rocket,   label: "Startups",           badge: null, desc: "Launch your business with the world's leader in crypto" },
  ],
};

const companyMenu = {
  left: [
    { icon: Info,      label: "About",      badge: null, desc: "Powering the crypto economy" },
    { icon: Users,     label: "Affiliates", badge: null, desc: "Help introduce the world to crypto" },
    { icon: Newspaper, label: "Blog",       badge: null, desc: "Read the latest from Coinbase" },
  ],
  right: [
    { icon: Briefcase,  label: "Careers",  badge: null, desc: "Work with us" },
    { icon: HelpCircle, label: "Support",  badge: null, desc: "Find answers to your questions" },
    { icon: Shield,     label: "Security", badge: null, desc: "The most trusted & secure" },
  ],
};

// ── Shared menu item row ───────────────────────────────────────────────────────
function MenuItem({ icon: Icon, label, badge, desc, onClose }: {
  icon: React.ElementType; label: string; badge: string | null; desc: string; onClose: () => void;
}) {
  return (
    <button
      onClick={onClose}
      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group"
    >
      <div className="w-9 h-9 rounded-xl bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
        <Icon size={16} className="text-foreground/70" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground leading-tight">
          {label}
          {badge && <span className="ml-1.5 text-xs font-semibold text-primary">• {badge}</span>}
        </p>
        <p className="text-xs text-muted-foreground leading-snug mt-0.5">{desc}</p>
      </div>
    </button>
  );
}

// ── Individuals dropdown ───────────────────────────────────────────────────────
function IndividualsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex gap-8">
        {/* Trade */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Trade</p>
          <div className="space-y-1">
            {individualsMenu.trade.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Earn */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Earn</p>
          <div className="space-y-1">
            {individualsMenu.earn.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Promo */}
        <div className="w-64 shrink-0 flex items-start gap-4">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a1a4e] via-[#0a0a3e] to-[#050520] flex items-center justify-center shrink-0 shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">⬡</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight mb-3">
              One month of more. More rewards. More earnings. More upside.
            </h3>
            <button onClick={onClose} className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Businesses dropdown ────────────────────────────────────────────────────────
function BusinessesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex gap-8">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <div className="space-y-1">
            {businessesMenu.left.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Right column */}
        <div className="flex-1 min-w-0">
          <div className="space-y-1">
            {businessesMenu.right.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Promo */}
        <div className="w-64 shrink-0 flex items-start gap-4">
          <div className="w-28 h-24 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-primary" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-16 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="w-12 h-8 bg-white/20 rounded" />
              </div>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-white/30" />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight mb-2">
              Commerce Payments Protocol
            </h3>
            <p className="text-sm text-muted-foreground mb-3">A new standard for onchain payments.</p>
            <button onClick={onClose} className="text-sm font-semibold text-foreground hover:underline flex items-center gap-1">
              Go to Payments <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Institutions dropdown ──────────────────────────────────────────────────────
function InstitutionsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex gap-8">
        {/* Prime column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Prime</p>
            <ArrowRight size={11} className="text-muted-foreground" />
          </div>
          <div className="space-y-1">
            {institutionsMenu.prime.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Markets column */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Markets</p>
          <div className="space-y-1">
            {institutionsMenu.markets.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Promo */}
        <div className="w-64 shrink-0 flex items-start gap-4">
          {/* Dotted globe illustration */}
          <div className="w-28 h-24 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
            <svg viewBox="0 0 80 80" className="w-20 h-20 opacity-90" fill="none">
              {/* Simple dotted-world feel using circles in a grid */}
              {Array.from({ length: 10 }).map((_, row) =>
                Array.from({ length: 10 }).map((_, col) => {
                  const cx = 8 + col * 7;
                  const cy = 8 + row * 7;
                  const dx = cx - 40, dy = cy - 40;
                  const inCircle = dx * dx + dy * dy < 38 * 38;
                  return inCircle ? (
                    <circle key={`${row}-${col}`} cx={cx} cy={cy} r="2" fill="white" opacity="0.7" />
                  ) : null;
                })
              )}
              {/* Continent-like blob overlay */}
              <ellipse cx="35" cy="38" rx="14" ry="18" fill="white" opacity="0.15" />
              <ellipse cx="54" cy="34" rx="8" ry="12" fill="white" opacity="0.15" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-0.5">Our clients</p>
            <h3 className="text-xl font-bold text-foreground leading-tight mb-3">
              Trusted by institutions and government.
            </h3>
            <button onClick={onClose} className="text-sm font-semibold text-foreground underline hover:no-underline flex items-center gap-1">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Developers dropdown ────────────────────────────────────────────────────────
function DevelopersDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex gap-8">
        {/* Coinbase Developer Platform column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Coinbase Developer Platform</p>
            <ArrowRight size={11} className="text-muted-foreground" />
          </div>
          <div className="space-y-1">
            {developersMenu.platform.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Solutions column */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Solutions for any company</p>
          <div className="space-y-1">
            {developersMenu.solutions.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Promo */}
        <div className="w-64 shrink-0 flex items-start gap-4">
          <div className="w-28 h-24 rounded-2xl bg-gray-100 border border-border flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            <svg viewBox="0 0 80 60" className="w-24 h-20" fill="none">
              <rect x="5" y="5" width="70" height="50" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="5" y1="40" x2="75" y2="40" stroke="#e5e7eb" strokeWidth="0.8"/>
              <polyline points="10,35 22,28 34,32 46,20 58,24 70,15" stroke="#0052FF" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <circle cx="46" cy="20" r="3" fill="#0052FF"/>
              <rect x="38" y="11" width="20" height="12" rx="2" fill="#0052FF"/>
              <text x="40" y="20" fontSize="5" fill="white" fontFamily="sans-serif">$24.6B</text>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight mb-3">
              World class crypto infrastructure.{" "}
              <span className="font-normal text-muted-foreground">Discover Coinbase's complete crypto-as-a-service platform.</span>
            </h3>
            <button onClick={onClose} className="text-sm font-semibold text-foreground underline hover:no-underline">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Company dropdown ───────────────────────────────────────────────────────────
function CompanyDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl z-50">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex gap-8">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <div className="space-y-1">
            {companyMenu.left.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Right column */}
        <div className="flex-1 min-w-0">
          <div className="space-y-1">
            {companyMenu.right.map(item => (
              <MenuItem key={item.label} {...item} onClose={onClose} />
            ))}
          </div>
        </div>
        {/* Promo */}
        <div className="w-64 shrink-0 flex items-start gap-4">
          <div className="w-28 h-24 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg overflow-hidden p-3">
            <p className="text-white text-[10px] font-bold tracking-widest uppercase leading-tight text-center">
              CRYPTO MOVES MONEY FORWARD
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight mb-3">
              Learn all about Coinbase:{" "}
              <span className="font-normal">We're building the open financial system.</span>
            </h3>
            <Link href="/signup" onClick={onClose} className="text-sm font-semibold text-foreground underline hover:no-underline">
              Create your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
type DropdownName = "individuals" | "businesses" | "institutions" | "developers" | "company" | null;

export function Navbar({ showBanner = false }: { showBanner?: boolean }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  const toggleDropdown = (name: DropdownName) =>
    setActiveDropdown(prev => (prev === name ? null : name));

  const navLinks: { name: string; href: string; dropdown: DropdownName }[] = [
    { name: "Cryptocurrencies", href: "/cryptocurrencies", dropdown: null },
    { name: "Individuals",      href: "/individuals",      dropdown: "individuals" },
    { name: "Businesses",       href: "/businesses",       dropdown: "businesses" },
    { name: "Institutions",     href: "/institutions",     dropdown: "institutions" },
    { name: "Developers",       href: "/developers",       dropdown: "developers" },
    { name: "Company",          href: "/company",          dropdown: "company" },
  ];

  const closeAll = () => setActiveDropdown(null);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-sm" : ""} bg-white`}
    >
      {showBanner && (
        <div className="bg-[#1a1a2e] text-white text-center py-2.5 px-4 text-sm font-medium">
          <a href="#" className="hover:underline">
            Unlock One month of rewards with Coinbase One. Join now for 20% off your first year of an annual plan.
            <span className="ml-1">→</span>
          </a>
        </div>
      )}

      <div className="max-w-full px-6 lg:px-8 border-b border-border/40">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex-shrink-0">
            <img src="/coinbase-logo.png" alt="Coinbase" className="h-8 w-8" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map(link =>
              link.dropdown ? (
                <button
                  key={link.name}
                  data-testid={`button-${link.dropdown}-menu`}
                  onClick={() => toggleDropdown(link.dropdown)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    activeDropdown === link.dropdown || location === link.href
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeAll}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    location === link.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center space-x-1">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={18} className="text-foreground/70" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe size={18} className="text-foreground/70" />
            </button>
            <Link href="/signin">
              <Button variant="ghost" className="font-medium text-sm text-foreground/80 hover:text-foreground hover:bg-gray-100 px-4 rounded-full">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 font-semibold text-sm shadow-sm">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(o => !o)} className="text-foreground p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      {activeDropdown === "individuals"  && <IndividualsDropdown  onClose={closeAll} />}
      {activeDropdown === "businesses"   && <BusinessesDropdown   onClose={closeAll} />}
      {activeDropdown === "institutions" && <InstitutionsDropdown onClose={closeAll} />}
      {activeDropdown === "developers"   && <DevelopersDropdown   onClose={closeAll} />}
      {activeDropdown === "company"      && <CompanyDropdown      onClose={closeAll} />}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-foreground/70 hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3 border-t border-border">
              <Link href="/signin">
                <Button variant="outline" className="w-full rounded-full py-6">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full rounded-full py-6 bg-primary text-white">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
