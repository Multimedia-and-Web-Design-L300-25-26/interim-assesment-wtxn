import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
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
  if (price >= 1) return "$" + price.toFixed(2);
  return "$" + price.toFixed(6);
}

export default function Explore() {
  const [search, setSearch] = useState("");

  const { data: coins, isLoading } = useQuery<Coin[]>({
    queryKey: ["/api/crypto"],
    queryFn: async () => {
      const res = await fetch("/api/crypto");
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
                    <th className="text-left px-6 py-4 font-semibold text-foreground text-sm">Asset</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm">Price</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? Array.from({ length: 10 }).map((_, i) => (
                        <tr key={i} className="border-b border-border animate-pulse">
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
                        </tr>
                      ))
                    : filtered?.map((coin) => (
                        <tr
                          key={coin._id}
                          className="border-b border-border hover:bg-gray-50 transition-colors cursor-pointer"
                          data-testid={`row-coin-${coin._id}`}
                        >
                          <td className="px-6 py-4">
                            <Link href={`/asset/${coin._id}`}>
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
                            {formatPrice(coin.price)}
                          </td>
                          <td className="text-right px-6 py-4">
                            <div
                              className={`flex items-center justify-end gap-1 font-semibold ${
                                coin.change24h >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {coin.change24h >= 0 ? (
                                <ArrowUpRight size={14} />
                              ) : (
                                <ArrowDownRight size={14} />
                              )}
                              {Math.abs(coin.change24h).toFixed(2)}%
                            </div>
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
