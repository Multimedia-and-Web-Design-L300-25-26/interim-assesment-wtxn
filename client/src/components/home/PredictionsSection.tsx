import predictionsImg from "@assets/image_1777731615143.png";

export function PredictionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Phone mockup */}
          <div className="flex justify-center">
            <img
              src={predictionsImg}
              alt="Predictions app mockup"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight mb-5">
              Turn your insights into trades.
            </h2>
            <p className="text-base text-foreground/60 mb-8 max-w-sm">
              Trade your predictions on thousands of real world events across sports, politics, crypto, culture and more.<sup>3</sup>
            </p>
            <button className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-black/80 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
