import coinbaseOneImg from "@assets/image_1777731651653.png";
import baseAppImg from "@assets/image_1777731667518.png";
import primeImg from "@assets/image_1777731684061.png";

export function HowItWorks() {
  return (
    <>
      {/* Coinbase One */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <div className="flex justify-center">
              <img
                src={coinbaseOneImg}
                alt="Coinbase One"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            {/* Right: text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-foreground inline-block" />
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">COINBASE ONE</span>
              </div>
              <h2 className="text-5xl font-bold text-foreground leading-tight mb-5">
                Zero trading fees, more rewards.
              </h2>
              <p className="text-base text-foreground/60 mb-8 max-w-sm">
                Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
              </p>
              <button className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-black/80 transition-colors">
                Claim free trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Base App */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-foreground inline-block" />
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">BASE APP</span>
              </div>
              <h2 className="text-5xl font-bold text-foreground leading-tight mb-5">
                Countless ways to earn crypto with the Base App.
              </h2>
              <p className="text-base text-foreground/60 mb-8 max-w-sm">
                An everything app to trade, create, discover, and chat, all in one place.
              </p>
              <button className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-black/80 transition-colors">
                Learn more
              </button>
            </div>
            {/* Right: image */}
            <div className="flex justify-center">
              <img
                src={baseAppImg}
                alt="Base App"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prime */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <div className="flex justify-center">
              <img
                src={primeImg}
                alt="Coinbase Prime"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            {/* Right: text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-foreground inline-block" />
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">PRIME</span>
              </div>
              <h2 className="text-5xl font-bold text-foreground leading-tight mb-5">
                The financial institution for a digital asset future.
              </h2>
              <p className="text-base text-foreground/60 mb-8 max-w-sm">
                Coinbase Prime is the first choice for sophisticated investors and institutions that want to invest in digital assets.
              </p>
              <button className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-black/80 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
