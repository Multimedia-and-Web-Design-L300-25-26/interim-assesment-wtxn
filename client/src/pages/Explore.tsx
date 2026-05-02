import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
}

function formatPrice(price: number) {
  if (price >= 1000) return "$" + price.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (price >= 1) return "$" + price.toFixed(2);
  return "$" + price.toFixed(6);
}

function formatVolume(vol: number) {
  if (vol >= 1e12) return "$" + (vol / 1e12).toFixed(2) + "T";
  if (vol >= 1e9) return "$" + (vol / 1e9).toFixed(2) + "B";
  if (vol >= 1e6) return "$" + (vol / 1e6).toFixed(2) + "M";
  return "$" + vol.toLocaleString();
}

export default function Explore() {
  const [search, setSearch] = useState("");

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

  const filtered = coins?.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Explore Assets</h1>
            <p className="text-lg text-muted-foreground">
              Discover and trade hundreds of cryptocurrencies
            </p>
          </div>

          <div className="mb-8 relative max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or symbol..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 pl-9 pr-4 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-base"
              data-testid="input-search"
            />
          </div>

          <div className="bg-white rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">#</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Asset</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm">Price</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm">24h Change</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm hidden md:table-cell">Volume (24h)</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm hidden lg:table-cell">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? Array.from({ length: 10 }).map((_, i) => (
                        <tr key={i} className="border-b border-border animate-pulse">
                          <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded" /></td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-200 rounded-full" />
                              <div>
                                <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
                                <div className="h-3 w-10 bg-gray-100 rounded" />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right"><div className="h-4 w-20 bg-gray-200 rounded ml-auto" /></td>
                          <td className="px-6 py-4 text-right"><div className="h-4 w-14 bg-gray-200 rounded ml-auto" /></td>
                          <td className="px-6 py-4 text-right hidden md:table-cell"><div className="h-4 w-20 bg-gray-200 rounded ml-auto" /></td>
                          <td className="px-6 py-4 text-right hidden lg:table-cell"><div className="h-4 w-20 bg-gray-200 rounded ml-auto" /></td>
                        </tr>
                      ))
                    : filtered?.map((coin) => (
                        <tr
                          key={coin.id}
                          className="border-b border-border hover:bg-gray-50 transition-colors cursor-pointer"
                          data-testid={`row-coin-${coin.id}`}
                        >
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {coin.market_cap_rank}
                          </td>
                          <td className="px-6 py-4">
                            <Link href={`/asset/${coin.id}`}>
                              <div className="flex items-center gap-3">
                                <img
                                  src={coin.image}
                                  alt={coin.name}
                                  className="w-8 h-8 rounded-full"
                                />
                                <div>
                                  <div className="font-semibold text-foreground">{coin.name}</div>
                                  <div className="text-sm text-muted-foreground uppercase">{coin.symbol}</div>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-right px-6 py-4 font-semibold text-foreground">
                            {formatPrice(coin.current_price)}
                          </td>
                          <td className="text-right px-6 py-4">
                            <div
                              className={`flex items-center justify-end gap-1 font-semibold ${
                                coin.price_change_percentage_24h >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {coin.price_change_percentage_24h >= 0 ? (
                                <ArrowUpRight size={14} />
                              ) : (
                                <ArrowDownRight size={14} />
                              )}
                              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                            </div>
                          </td>
                          <td className="text-right px-6 py-4 text-muted-foreground hidden md:table-cell">
                            {formatVolume(coin.total_volume)}
                          </td>
                          <td className="text-right px-6 py-4 text-muted-foreground hidden lg:table-cell">
                            {formatVolume(coin.market_cap)}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
