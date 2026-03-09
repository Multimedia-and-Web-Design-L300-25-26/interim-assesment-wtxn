import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import ctaImg from "@assets/image_1773008901047.png";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Take control of your money
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your portfolio today and discover crypto
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
          <div className="relative">
            <img src={ctaImg} alt="Control your money" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
