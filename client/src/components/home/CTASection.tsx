import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Start your crypto journey today
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Sign up now to build your portfolio and explore the world of digital currency.
        </p>
        <Button className="h-14 px-10 rounded-full bg-white text-primary hover:bg-gray-100 font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
          Get Started
        </Button>
      </div>
    </section>
  );
}
