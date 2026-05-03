import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import heroImage from "@assets/image_1777735407781.png";

export function Hero() {
  return (
    <section className="pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:pl-4">

          {/* Left: Phone Mockup */}
          <div className="relative order-2 lg:order-1 h-[500px] sm:h-[600px] lg:h-[700px] w-[95%] lg:w-full overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem]">
            <img
              src={heroImage}
              alt="Coinbase App Mockup"
              className="absolute w-[220%] lg:w-[210%] h-auto max-w-none -left-[4%] -top-[2%]"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 pt-16 pb-16">
            <h1 className="text-6xl md:text-[72px] font-bold tracking-tight text-foreground leading-[1.05] mb-6">
              The future of finance is here.
            </h1>
            <p className="text-base text-foreground/70 mb-8">
              Trade crypto and more on a platform you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
              <Input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="h-12 px-4 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-sm flex-1"
              />
              <Link href="/signup">
                <Button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-sm whitespace-nowrap">
                  Sign up
                </Button>
              </Link>
            </div>
            <p className="text-xs text-foreground/40 mt-4">
              Stocks and prediction markets not available in your jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
