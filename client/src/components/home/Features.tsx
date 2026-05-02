import tradingImg from "@assets/image_1777731636029.png";

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight mb-5">
              Powerful tools, designed for the advanced trader.
            </h2>
            <p className="text-base text-foreground/60 mb-8 max-w-sm">
              Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <button className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-black/80 transition-colors">
              Start trading
            </button>
          </div>

          {/* Right: Screenshot */}
          <div className="flex justify-center">
            <img
              src={tradingImg}
              alt="Advanced trading platform"
              className="w-full max-w-lg h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
