import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import heroImage from "@assets/image_1777735407781.png";

export function Hero() {
  return (
    <section className="pt-24 pb-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* Left: Phone Mockup */}
          <div
            className="relative flex-shrink-0 overflow-hidden rounded-2xl order-2 lg:order-1"
            style={{ width: "470px", height: "490px" }}
          >
            <img
              src={heroImage}
              alt="Coinbase App Mockup"
              className="absolute top-0 left-0 h-full"
              style={{ width: "auto", maxWidth: "none" }}
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 flex-1">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
              The future of finance is here.
            </h1>
            <p className="text-base text-foreground/70 mb-2">
              Trade crypto, stocks,<sup>2</sup> and more on a platform you can trust.
            </p>
            <p className="text-base text-foreground/70 mb-8">
              Sign up and get up to $2,000 in crypto.<sup>1</sup>
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
            <p className="text-xs text-foreground/40 mt-4 max-w-md">
              Securities offered by Coinbase Capital Markets (member SIPC, FINRA). Listed futures and swaps are offered via Coinbase Financial Markets ("CFM"), a NFA member firm. Crypto offered by Coinbase Inc.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
