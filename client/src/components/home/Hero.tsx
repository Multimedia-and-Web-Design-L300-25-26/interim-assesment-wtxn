import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import heroImage from "@assets/image_1773008660009.png";

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Phone Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Crypto Dashboard Mockup" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="max-w-2xl order-1 lg:order-2">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              The future of finance is here.
            </h1>
            
            <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-md">
              Trade crypto and more on a platform you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <Input 
                type="email" 
                placeholder="satoshi@nakamoto.com" 
                className="h-12 px-5 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-base flex-1"
                required
              />
              <Link href="/signup">
                <Button className="h-12 px-7 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
