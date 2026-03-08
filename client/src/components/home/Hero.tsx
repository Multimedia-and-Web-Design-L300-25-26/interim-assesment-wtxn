import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6 cursor-pointer hover:bg-blue-100 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span>Jump start your portfolio</span>
              <ArrowRight size={14} />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              The future of money is here
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg">
              We're the most trusted place for people and businesses to buy, sell, and manage crypto.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email address" 
                className="h-14 px-6 rounded-full border-border bg-white shadow-sm focus-visible:ring-primary text-base"
                required
              />
              <Button type="submit" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">
                Get Started
              </Button>
            </form>
          </div>

          {/* Right Image/Mockup */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            {/* hero crypto dashboard illustration mockup */}
            <img 
              src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=1200&h=900&fit=crop" 
              alt="Crypto Dashboard Mockup" 
              className="w-full h-auto rounded-3xl shadow-2xl border border-white/20 object-cover"
            />
            
            {/* Floating Element 1 */}
            <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 font-bold">₿</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Bitcoin</p>
                  <p className="text-sm font-bold text-foreground">+5.24%</p>
                </div>
              </div>
            </div>

            {/* Floating Element 2 */}
            <div className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Ξ</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Ethereum</p>
                  <p className="text-sm font-bold text-foreground">+2.18%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
