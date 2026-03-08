import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileApp() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Buy, sell, and manage your crypto on the go.
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the power of the Coinbase mobile app. Secure, simple, and always at your fingertips.
            </p>

            <ul className="space-y-4">
              {['Manage your portfolio securely', 'Track prices and trends in real-time', 'Set up automatic recurring buys'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-md">
                Download the app
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
            {/* mock mobile phone displaying crypto app */}
            <img 
              src="https://pixabay.com/get/g0b8fa11a058ab9e528d5cc4c2fb6f14e6da2068089b7ac1b641732e00e6a4c21b62665775d7cec64551bd621c0b7bcb9ee8074f1b75982683ade1f83b8d9b2e5_1280.jpg" 
              alt="Coinbase Mobile App Mockup" 
              className="w-full max-w-[400px] mx-auto h-auto rounded-[2.5rem] shadow-2xl border-8 border-gray-900 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
