import { Button } from "@/components/ui/button";
import cryptoImg from "@assets/image_1773008828315.png";

export function CryptoPrices() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-semibold py-6 text-base">
              See more assets
            </Button>
          </div>
          <div className="relative">
            <img src={cryptoImg} alt="Crypto assets" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
