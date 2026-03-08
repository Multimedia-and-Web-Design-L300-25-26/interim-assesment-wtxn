import { Link, useLocation } from "wouter";
import { Menu, X, Search, Moon } from "lucide-react";
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
    { name: "Cryptocurrencies", href: "/cryptocurrencies" },
    { name: "Individuals", href: "/individuals" },
    { name: "Businesses", href: "/businesses" },
    { name: "Institutions", href: "/institutions" },
    { name: "Developers", href: "/developers" },
    { name: "Company", href: "/company" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-4"
      }`}
    >
      <div className="max-w-full px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-primary text-2xl font-bold tracking-tighter flex-shrink-0"
          >
            ⓒ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  location === link.href ? "text-foreground" : "text-foreground/70"
                } hover:text-foreground`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-foreground/70" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Moon size={20} className="text-foreground/70" />
            </button>
            <Button variant="ghost" className="font-medium text-sm text-foreground/70 hover:text-foreground hover:bg-transparent px-4">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold shadow-sm hover:shadow-md transition-all duration-200">
              Sign up
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
            <div className="pt-6 flex flex-col space-y-3 border-t border-border">
              <Button variant="outline" className="w-full justify-center rounded-full text-base py-6">
                Sign In
              </Button>
              <Button className="w-full justify-center rounded-full text-base py-6 bg-primary text-white">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
