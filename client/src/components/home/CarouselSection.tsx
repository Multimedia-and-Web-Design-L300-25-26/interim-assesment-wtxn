import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  {
    id: "coinbase-one",
    badge: "COINBASE ONE",
    title: "One month of more",
    description: "Join Coinbase One during Member Month for 20% off the first year off all annual plans, exclusive rewards, and weekly prizes.",
    cta: "Learn more",
    bgColor: "bg-[#0a0f1e]",
    iconBg: "bg-[#0a1a4a]",
    icon: (
      <div className="w-32 h-32 rounded-full bg-blue-600/20 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.6)]">
          <svg viewBox="0 0 40 40" fill="white" className="w-10 h-10">
            <path d="M20 4L8 10v10c0 7.4 5.2 14.3 12 16 6.8-1.7 12-8.6 12-16V10L20 4zm0 3.2l9 4.5v8.3c0 5.6-3.9 10.8-9 12.2-5.1-1.4-9-6.6-9-12.2v-8.3l9-4.5z"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: "stocks",
    badge: "STOCKS",
    title: "Trade stocks around the clock",
    description: "Get 24/5 access to thousands of stocks and pay zero commission. Now available to all U.S. traders.",
    cta: "Start trading",
    bgColor: "bg-[#0a0f1e]",
    iconBg: "bg-[#1a1a3e]",
    icon: (
      <div className="w-32 h-32 rounded-full bg-green-600/10 flex items-center justify-center">
        <div className="w-20 h-20 rounded-xl bg-[#1a2a1a] border border-green-500/30 flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" stroke="#22c55e" strokeWidth="2" className="w-10 h-10">
            <polyline points="4,28 12,18 20,22 28,10 36,14" />
            <line x1="4" y1="36" x2="36" y2="36" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: "derivatives",
    badge: "DERIVATIVES",
    title: "Trade more with less",
    description: "Unlock leverage with futures and perpetuals trading.",
    cta: "Trade now",
    bgColor: "bg-[#0a0f1e]",
    iconBg: "bg-[#1a1a3e]",
    icon: (
      <div className="w-32 h-32 rounded-full bg-purple-600/10 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" stroke="#a855f7" strokeWidth="2" className="w-10 h-10">
            <circle cx="20" cy="20" r="12" />
            <line x1="20" y1="8" x2="20" y2="4" />
            <line x1="20" y1="36" x2="20" y2="32" />
            <line x1="8" y1="20" x2="4" y2="20" />
            <line x1="36" y1="20" x2="32" y2="20" />
            <path d="M16 20h4l3-6 3 12 3-6h3" stroke="#a855f7" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    ),
  },
];

export function CarouselSection() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    if (playing) startInterval();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing]);

  const go = (dir: number) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
    if (playing) startInterval();
  };

  const slide = slides[current];
  const nextSlide = slides[(current + 1) % slides.length];

  return (
    <section className="bg-[#060b18] py-10 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4">
          {/* Main slide */}
          <div className="flex-1 bg-[#0d1526] rounded-2xl overflow-hidden flex flex-col sm:flex-row min-h-[280px]">
            {/* Icon area */}
            <div className="flex items-center justify-center bg-[#091020] p-10 sm:w-72 shrink-0 rounded-l-2xl">
              {slide.icon}
            </div>
            {/* Text area */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                {slide.title}
              </h2>
              <p className="text-white/60 text-base mb-8 max-w-sm">
                {slide.description}
              </p>
              <div>
                <button className="border border-white/30 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Peek of next slide on desktop */}
          <div className="hidden lg:flex w-28 bg-[#0d1526]/60 rounded-2xl items-center justify-center shrink-0 opacity-50">
            <div className="text-center p-4">
              <p className="text-white/40 text-xs font-semibold uppercase mb-2">{nextSlide.badge}</p>
              <div className="scale-50">{nextSlide.icon}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            {/* Dots */}
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); if (playing) startInterval(); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/30"}`}
                />
              ))}
            </div>
            {/* Play/Pause */}
            <button
              onClick={() => setPlaying((p) => !p)}
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              {playing ? <Pause size={12} /> : <Play size={12} />}
            </button>
          </div>

          {/* Prev/Next */}
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
