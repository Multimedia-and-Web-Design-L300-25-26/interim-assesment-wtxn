import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { Button } from "@/components/ui/button";

const generateMockData = (trend: 'up' | 'down') => {
  let current = 100;
  return Array.from({ length: 20 }).map((_, i) => {
    const change = (Math.random() - (trend === 'up' ? 0.3 : 0.7)) * 5;
    current += change;
    return { value: current };
  });
};

const cryptos = [
  { id: "BTC", name: "Bitcoin", symbol: "BTC", price: "$64,230.12", change: "+4.32%", trend: "up", color: "#16a34a", icon: "₿", iconBg: "bg-orange-100", iconColor: "text-orange-500" },
  { id: "ETH", name: "Ethereum", symbol: "ETH", price: "$3,450.89", change: "+2.14%", trend: "up", color: "#16a34a", icon: "Ξ", iconBg: "bg-blue-100", iconColor: "text-blue-500" },
  { id: "SOL", name: "Solana", symbol: "SOL", price: "$145.20", change: "-1.05%", trend: "down", color: "#dc2626", icon: "S", iconBg: "bg-purple-100", iconColor: "text-purple-500" },
  { id: "USDC", name: "USDC", symbol: "USDC", price: "$1.00", change: "0.00%", trend: "up", color: "#64748b", icon: "$", iconBg: "bg-green-100", iconColor: "text-green-600" },
];

export function CryptoPrices() {
  return (
    <section className="py-16 bg-gray-50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Explore crypto like Bitcoin, Ethereum, and Dogecoin</h2>
          <Button variant="ghost" className="hidden sm:flex text-primary hover:text-primary/80 font-semibold hover:bg-transparent p-0 h-auto">
            See all assets <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptos.map((crypto) => (
            <div 
              key={crypto.id} 
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover border border-border/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${crypto.iconBg}`}>
                    <span className={`font-bold ${crypto.iconColor}`}>{crypto.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{crypto.name}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{crypto.symbol}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-2xl font-bold text-foreground">{crypto.price}</p>
                <p className={`text-sm font-medium mt-1 ${crypto.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                  {crypto.change}
                </p>
              </div>

              <div className="h-16 mt-4 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generateMockData(crypto.trend as 'up' | 'down')}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={crypto.color} 
                      strokeWidth={2.5} 
                      dot={false} 
                      isAnimationActive={false} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-8 sm:hidden py-6 rounded-xl font-semibold border-border">
          See all assets
        </Button>

      </div>
    </section>
  );
}
