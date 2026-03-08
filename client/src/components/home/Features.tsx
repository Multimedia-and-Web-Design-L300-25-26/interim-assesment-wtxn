import { Button } from "@/components/ui/button";
import tradingImg from "@assets/image_1773008843665.png";

export function Features() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={tradingImg} alt="Trading platform" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Powerful tools, designed for the advanced trader.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Power analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-semibold py-6 text-base">
              Start trading
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
