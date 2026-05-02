import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import ctaImg from "@assets/image_1773008901047.png";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h2 className="text-6xl font-bold text-foreground leading-tight mb-5">
              Take control of your money.
            </h2>
            <p className="text-base text-foreground/60 mb-8">
              Start your portfolio today and <strong>get up to $2,000 in crypto.</strong>
              <sup>1</sup>
              <span className="ml-1">→</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
              <Input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="h-12 px-4 rounded-lg border-border bg-white shadow-sm text-sm flex-1"
              />
              <Link href="/signup">
                <button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm whitespace-nowrap transition-colors">
                  Sign up
                </button>
              </Link>
            </div>
          </div>

          {/* Right: crypto circles */}
          <div className="flex justify-center">
            <img
              src={ctaImg}
              alt="Cryptocurrencies"
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
