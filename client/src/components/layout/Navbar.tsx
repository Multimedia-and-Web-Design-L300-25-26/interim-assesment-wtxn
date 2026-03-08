import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Prices", href: "/prices" },
    { name: "Learn", href: "/learn" },
    { name: "Individuals", href: "/individuals" },
    { name: "Businesses", href: "/businesses" },
    { name: "Developers", href: "/developers" },
    { name: "Company", href: "/company" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-primary text-2xl font-bold tracking-tighter"
          >
            coinbase
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="font-semibold text-sm hover:text-primary hover:bg-transparent">
              Sign in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="block text-lg font-semibold text-foreground/80 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 flex flex-col space-y-3 border-t border-border">
              <Button variant="outline" className="w-full justify-center rounded-full text-base py-6">
                Sign in
              </Button>
              <Button className="w-full justify-center rounded-full text-base py-6 bg-primary text-white">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
