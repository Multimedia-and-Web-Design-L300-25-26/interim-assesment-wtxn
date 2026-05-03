import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";

interface Coin {
  _id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  change24h: number;
}

function formatPrice(price: number) {
  if (price >= 1000) return "$" + price.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (price >= 1) return "$" + price.toFixed(4);
  return "$" + price.toFixed(4);
}

export function CryptoPrices() {
  const [tab, setTab] = useState<"tradable" | "gainers" | "new">("tradable");

  const endpoint = tab === "gainers" ? "/api/crypto/gainers" : tab === "new" ? "/api/crypto/new" : "/api/crypto";

  const { data: displayCoins, isLoading } = useQuery<Coin[]>({
    queryKey: ["cryptoList", endpoint],
    queryFn: async () => {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    refetchInterval: 60000,
    staleTime: 30000,
  });

  return (
    <section className="py-20 bg-[#f0f2f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight mb-5">
              Explore millions of tokens and stocks, all in one place.
            </h2>
            <p className="text-base text-foreground/60 mb-8">
              One trusted account for trading everything—from stocks to Bitcoin.<sup>1</sup>
            </p>
            <Link href="/explore">
              <button className="bg-black text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-black/80 transition-colors">
                Get started
              </button>
            </Link>
          </div>

          {/* Right: Dark crypto widget */}
          <div className="bg-[#141414] rounded-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10 px-2 pt-2">
              {[
                { key: "tradable", label: "Tradable" },
                { key: "gainers", label: "Top gainers" },
                { key: "new", label: "New on Coinbase" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key as typeof tab)}
                  className={`px-4 py-3 text-sm font-medium rounded-t transition-colors ${
                    tab === key
                      ? "text-white bg-white/10"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Coin list */}
            <div>
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-4 animate-pulse border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                        <div className="h-4 w-24 bg-white/10 rounded" />
                      </div>
                      <div className="text-right">
                        <div className="h-4 w-20 bg-white/10 rounded mb-1 ml-auto" />
                        <div className="h-3 w-12 bg-white/10 rounded ml-auto" />
                      </div>
                    </div>
                  ))
                : (displayCoins || []).map((coin) => {
                    const isUp = coin.change24h >= 0;
                    return (
                      <Link href={`/asset/${coin._id}`} key={coin._id}>
                        <div
                          className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0"
                          data-testid={`row-widget-${coin._id}`}
                        >
                          <div className="flex items-center gap-3">
                            <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                            <span className="text-white font-medium text-sm">{coin.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold text-sm">
                              {formatPrice(coin.price)}
                            </div>
                            <div
                              className={`flex items-center justify-end gap-0.5 text-xs font-semibold ${
                                isUp ? "text-green-400" : "text-red-400"
                              }`}
                            >
                              {isUp ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                              {Math.abs(coin.change24h).toFixed(2)}%
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
