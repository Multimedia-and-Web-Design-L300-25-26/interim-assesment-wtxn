import { Link, useLocation } from "wouter";
import { Menu, X, Search, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar({ showBanner = false }: { showBanner?: boolean }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cryptocurrencies", href: "/cryptocurrencies" },
    { name: "Individuals", href: "/individuals" },
    { name: "Businesses", href: "/businesses" },
    { name: "Institutions", href: "/institutions" },
    { name: "Developers", href: "/developers" },
    { name: "Company", href: "/company" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-sm" : ""} bg-white`}>
      {showBanner && (
        <div className="bg-[#1a1a2e] text-white text-center py-2.5 px-4 text-sm font-medium">
          <a href="#" className="hover:underline">
            Unlock One month of rewards with Coinbase One. Join now for 20% off your first year of an annual plan.
            <span className="ml-1">→</span>
          </a>
        </div>
      )}
      <div className="max-w-full px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <Link href="/" className="text-primary text-2xl font-bold tracking-tighter flex-shrink-0">
            ⓒ
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  location === link.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
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
