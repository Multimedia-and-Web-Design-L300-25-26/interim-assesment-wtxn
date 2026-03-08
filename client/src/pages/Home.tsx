import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CryptoPrices } from "@/components/home/CryptoPrices";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MobileApp } from "@/components/home/MobileApp";
import { LearnSection } from "@/components/home/LearnSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CryptoPrices />
        <Features />
        <HowItWorks />
        <MobileApp />
        <LearnSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
