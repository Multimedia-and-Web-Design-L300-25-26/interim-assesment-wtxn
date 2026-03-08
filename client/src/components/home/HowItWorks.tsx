import { Button } from "@/components/ui/button";
import coinbaseOneImg from "@assets/image_1773008859202.png";
import baseAppImg from "@assets/image_1773008873293.png";

export function HowItWorks() {
  return (
    <>
      {/* Coinbase One Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">COINBASE ONE</p>
              <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Zero trading fees, more rewards.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-semibold py-6 text-base">
                Claim free trial
              </Button>
            </div>
            <div className="relative">
              <img src={coinbaseOneImg} alt="Coinbase One" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Base App Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={baseAppImg} alt="Base App" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-muted-foreground mb-2">BASE APP</p>
              <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Countless ways to earn crypto with the Base App.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                An everything app to trade, create, discover, and chat, all in one place.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-semibold py-6 text-base">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
