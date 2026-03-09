import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Explore() {
  const assets = [
    { symbol: "BTC", name: "Bitcoin", price: 45230.12, change: 4.32, volume: "28.5B" },
    { symbol: "ETH", name: "Ethereum", price: 3450.89, change: 2.14, volume: "15.2B" },
    { symbol: "SOL", name: "Solana", price: 145.20, change: -1.05, volume: "2.1B" },
    { symbol: "XRP", name: "XRP", price: 2.45, change: 5.67, volume: "1.8B" },
    { symbol: "USDC", name: "USD Coin", price: 1.00, change: 0.02, volume: "5.3B" },
    { symbol: "ADA", name: "Cardano", price: 0.98, change: -0.5, volume: "900M" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Explore Assets</h1>
            <p className="text-lg text-muted-foreground">Discover and trade hundreds of cryptocurrencies</p>
          </div>

          <div className="mb-8">
            <Input
              type="text"
              placeholder="Search by name or symbol..."
              className="h-12 px-4 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-base max-w-md"
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
                    <th className="text-right px-6 py-4 font-semibold text-foreground text-sm">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.symbol} className="border-b border-border hover:bg-gray-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <Link href={`/asset/${asset.symbol.toLowerCase()}`}>
                          <div className="flex flex-col">
                            <span className="font-semibold text-foreground">{asset.name}</span>
                            <span className="text-sm text-muted-foreground">{asset.symbol}</span>
                          </div>
                        </Link>
                      </td>
                      <td className="text-right px-6 py-4 font-semibold text-foreground">
                        ${asset.price.toFixed(2)}
                      </td>
                      <td className="text-right px-6 py-4">
                        <div className={`flex items-center justify-end space-x-1 font-semibold ${asset.change > 0 ? "text-green-600" : "text-red-600"}`}>
                          {asset.change > 0 ? (
                            <ArrowUpRight size={16} />
                          ) : (
                            <ArrowDownRight size={16} />
                          )}
                          <span>{Math.abs(asset.change)}%</span>
                        </div>
                      </td>
                      <td className="text-right px-6 py-4 text-muted-foreground">{asset.volume}</td>
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
