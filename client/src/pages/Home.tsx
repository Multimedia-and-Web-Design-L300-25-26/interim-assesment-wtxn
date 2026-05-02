import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CarouselSection } from "@/components/home/CarouselSection";
import { CryptoPrices } from "@/components/home/CryptoPrices";
import { PredictionsSection } from "@/components/home/PredictionsSection";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LearnSection } from "@/components/home/LearnSection";
import { CTASection } from "@/components/home/CTASection";
import { DisclaimerSection } from "@/components/home/DisclaimerSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar showBanner={true} />
      <main className="flex-1 pt-[96px]">
        <Hero />
        <CarouselSection />
        <CryptoPrices />
        <PredictionsSection />
        <Features />
        <HowItWorks />
        <LearnSection />
        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
}
