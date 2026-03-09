import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function AssetDetail() {
  const [location] = useLocation();
  const symbol = location.split("/").pop()?.toUpperCase() || "BTC";

  const assetData: Record<string, any> = {
    BTC: { name: "Bitcoin", price: 45230.12, change: 4.32, marketCap: "880B", volume: "28.5B" },
    ETH: { name: "Ethereum", price: 3450.89, change: 2.14, marketCap: "415B", volume: "15.2B" },
    SOL: { name: "Solana", price: 145.20, change: -1.05, marketCap: "68B", volume: "2.1B" },
  };

  const asset = assetData[symbol] || { name: "Asset", price: 0, change: 0, marketCap: "N/A", volume: "N/A" };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-2">{asset.name}</h1>
            <p className="text-2xl font-semibold text-foreground mb-4">${asset.price.toFixed(2)}</p>
            <p className={`text-lg font-semibold ${asset.change > 0 ? "text-green-600" : "text-red-600"}`}>
              {asset.change > 0 ? "+" : ""}{asset.change}% (24h)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">Market Cap</p>
              <p className="text-2xl font-bold text-foreground">{asset.marketCap}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">24h Volume</p>
              <p className="text-2xl font-bold text-foreground">{asset.volume}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-2">All-Time High</p>
              <p className="text-2xl font-bold text-foreground">${(asset.price * 1.5).toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to buy {asset.name}?</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-full">
              Buy {symbol}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
