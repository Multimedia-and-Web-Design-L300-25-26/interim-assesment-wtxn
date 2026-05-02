import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, ArrowDownRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  image: { large: string };
  market_cap_rank: number;
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };
    ath: { usd: number };
    atl: { usd: number };
    circulating_supply: number;
    total_supply: number;
  };
}

function formatPrice(price: number) {
  if (price >= 1000) return "$" + price.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (price >= 1) return "$" + price.toFixed(2);
  return "$" + price.toFixed(6);
}

function formatLarge(n: number) {
  if (n >= 1e12) return "$" + (n / 1e12).toFixed(2) + "T";
  if (n >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
  return "$" + n.toLocaleString();
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-5">
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-xl font-bold text-foreground">{value}</p>
    </div>
  );
}

export default function AssetDetail() {
  const params = useParams<{ symbol: string }>();
  const coinId = params.symbol || "bitcoin";

  const { data: coin, isLoading, isError } = useQuery<CoinDetail>({
    queryKey: ["/coingecko/coin", coinId],
    queryFn: async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false`
      );
      if (!res.ok) throw new Error("Coin not found");
      return res.json();
    },
    staleTime: 30000,
  });

  const md = coin?.market_data;
  const change24h = md?.price_change_percentage_24h ?? 0;
  const isUp = change24h >= 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/explore">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors" data-testid="button-back">
              <ArrowLeft size={16} />
              Back to Explore
            </button>
          </Link>

          {isLoading && (
            <div className="animate-pulse space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
                <div>
                  <div className="h-8 w-40 bg-gray-200 rounded mb-2" />
                  <div className="h-5 w-20 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="h-12 w-48 bg-gray-200 rounded" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 h-20" />
                ))}
              </div>
            </div>
          )}

          {isError && (
            <div className="text-center py-24">
              <p className="text-xl text-muted-foreground mb-4">Could not load coin data.</p>
              <Link href="/explore">
                <Button variant="outline">Back to Explore</Button>
              </Link>
            </div>
          )}

          {coin && md && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <img src={coin.image.large} alt={coin.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-4xl font-bold text-foreground">{coin.name}</h1>
                      <span className="text-sm font-semibold uppercase text-muted-foreground bg-gray-100 px-2 py-1 rounded">
                        {coin.symbol}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Rank #{coin.market_cap_rank}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-bold text-foreground">
                    {formatPrice(md.current_price.usd)}
                  </p>
                  <div
                    className={`flex items-center justify-end gap-1 mt-1 font-semibold text-lg ${
                      isUp ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isUp ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                    {Math.abs(change24h).toFixed(2)}% (24h)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <StatCard label="Market Cap" value={formatLarge(md.market_cap.usd)} />
                <StatCard label="24h Volume" value={formatLarge(md.total_volume.usd)} />
                <StatCard label="24h High" value={formatPrice(md.high_24h.usd)} />
                <StatCard label="24h Low" value={formatPrice(md.low_24h.usd)} />
                <StatCard label="All-Time High" value={formatPrice(md.ath.usd)} />
                <StatCard label="All-Time Low" value={formatPrice(md.atl.usd)} />
                <StatCard label="7d Change" value={`${md.price_change_percentage_7d >= 0 ? "+" : ""}${md.price_change_percentage_7d?.toFixed(2)}%`} />
                <StatCard label="30d Change" value={`${md.price_change_percentage_30d >= 0 ? "+" : ""}${md.price_change_percentage_30d?.toFixed(2)}%`} />
              </div>

              {coin.description.en && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">About {coin.name}</h2>
                  <p className="text-muted-foreground leading-relaxed line-clamp-6"
                    dangerouslySetInnerHTML={{
                      __html: coin.description.en.split(". ").slice(0, 4).join(". ") + ".",
                    }}
                  />
                </div>
              )}

              <div className="bg-[#0052FF] rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Trade {coin.name} on Coinbase</h2>
                <p className="text-blue-100 mb-6">
                  Buy, sell, and manage {coin.symbol.toUpperCase()} securely in minutes.
                </p>
                <Link href="/signup">
                  <Button className="bg-white text-[#0052FF] hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full" data-testid="button-trade">
                    Get started
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
