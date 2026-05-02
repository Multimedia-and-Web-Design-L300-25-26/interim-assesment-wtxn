import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function formatPrice(price: number) {
  if (price >= 1000) return "$" + price.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (price >= 1) return "$" + price.toFixed(2);
  return "$" + price.toFixed(4);
}

export function CryptoPrices() {
  const { data: coins, isLoading } = useQuery<Coin[]>({
    queryKey: ["/coingecko/markets"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
      );
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    refetchInterval: 60000,
    staleTime: 30000,
  });

  const displayCoins = coins?.slice(0, 6);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Link href="/explore">
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 font-semibold py-6 text-base">
                See more assets
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 border-b border-border last:border-0 animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gray-200 rounded-full" />
                      <div>
                        <div className="h-4 w-20 bg-gray-200 rounded mb-1" />
                        <div className="h-3 w-12 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="h-4 w-16 bg-gray-200 rounded mb-1 ml-auto" />
                      <div className="h-3 w-10 bg-gray-100 rounded ml-auto" />
                    </div>
                  </div>
                ))
              : displayCoins?.map((coin) => {
                  const isUp = coin.price_change_percentage_24h >= 0;
                  return (
                    <Link href={`/asset/${coin.id}`} key={coin.id}>
                      <div
                        className="flex items-center justify-between px-5 py-4 border-b border-border last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
                        data-testid={`row-home-coin-${coin.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <img src={coin.image} alt={coin.name} className="w-9 h-9 rounded-full" />
                          <div>
                            <div className="font-semibold text-sm text-foreground">{coin.name}</div>
                            <div className="text-xs text-muted-foreground uppercase">{coin.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-sm text-foreground">
                            {formatPrice(coin.current_price)}
                          </div>
                          <div
                            className={`flex items-center justify-end gap-0.5 text-xs font-semibold ${
                              isUp ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
}
