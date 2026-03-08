import { Button } from "@/components/ui/button";
import learnImg from "@assets/image_1773008885938.png";

export function LearnSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              New to crypto? Learn some crypto basics
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-semibold py-6 text-base">
              Read More
            </Button>
          </div>
          <div className="relative">
            <img src={learnImg} alt="Learn crypto basics" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
