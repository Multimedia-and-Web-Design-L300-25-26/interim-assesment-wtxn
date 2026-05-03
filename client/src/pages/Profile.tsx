import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { 
  Home, PieChart, ArrowLeftRight, Percent, Gift, Globe, MoreVertical, 
  Search, Bell, Grid, User, Star, ChevronRight, X, ArrowUpRight, ArrowDownRight, Menu
} from "lucide-react";
import { AreaChart, Area, Tooltip, ResponsiveContainer, YAxis } from "recharts";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [cryptos, setCryptos] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLocation("/login"));

    fetch("/api/crypto")
      .then((res) => res.json())
      .then((data) => setCryptos(data.slice(0, 5)))
      .catch((err) => console.error(err));

    fetch("/api/portfolio/chart")
      .then((res) => res.ok ? res.json() : [])
      .then((data) => {
        if (Array.isArray(data)) {
          setChartData(data);
        }
      })
      .catch((err) => console.error(err));
  }, [setLocation]);

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      setLocation("/login");
    } catch {
      toast({ title: "Error logging out", variant: "destructive" });
    }
  };

  const [cryptoForm, setCryptoForm] = useState({ name: "", symbol: "", price: "", image: "", change24h: "" });
  const handleAddCrypto = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/crypto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...cryptoForm,
          price: Number(cryptoForm.price),
          change24h: Number(cryptoForm.change24h)
        }),
      });
      if (res.ok) {
        toast({ title: "Crypto added successfully!" });
        setCryptoForm({ name: "", symbol: "", price: "", image: "", change24h: "" });
      } else {
        const data = await res.json();
        toast({ title: "Error", description: data.message, variant: "destructive" });
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  if (loading) {
    return <div className="p-10 flex min-h-screen justify-center items-center text-xl font-bold">Loading...</div>;
  }

  // Derived Top Movers from cryptos state (just mock sorting)
  const topMovers = [...cryptos].sort((a, b) => b.change24h - a.change24h).slice(0, 4);

  return (
    <div className="min-h-screen bg-white flex text-foreground font-sans">
      
      {/* Left Sidebar */}
      <aside className="w-[240px] border-r border-border hidden md:flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 pb-8">
          <Link href="/">
            <img src="/coinbase-logo.png" alt="Coinbase" className="h-8 w-8 cursor-pointer" />
          </Link>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
          <a href="#" className="flex items-center gap-4 px-4 py-3 bg-blue-50 text-blue-600 rounded-full font-bold text-[15px]">
            <Home className="w-[22px] h-[22px]" /> Home
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-gray-100 rounded-full font-bold text-[15px] transition-colors">
            <PieChart className="w-[22px] h-[22px]" /> My assets
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-gray-100 rounded-full font-bold text-[15px] transition-colors">
            <ArrowLeftRight className="w-[22px] h-[22px]" /> Trade
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-gray-100 rounded-full font-bold text-[15px] transition-colors">
            <Percent className="w-[22px] h-[22px]" /> Earn
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-gray-100 rounded-full font-bold text-[15px] transition-colors">
            <Gift className="w-[22px] h-[22px]" /> Learning rewards
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-gray-100 rounded-full font-bold text-[15px] transition-colors">
            <Globe className="w-[22px] h-[22px]" /> Web3
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-gray-100 rounded-full font-bold text-[15px] transition-colors">
            <MoreVertical className="w-[22px] h-[22px]" /> More
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-[72px] border-b border-border flex items-center justify-between px-6 sticky top-0 bg-white z-50">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-foreground">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-[22px] font-bold text-foreground">Home</h1>
          </div>
          
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Search Input */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[300px]">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search for an asset" 
                className="bg-transparent border-none outline-none text-[15px] w-full"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:block bg-[#0052ff] hover:bg-[#0045d8] text-white px-5 py-2.5 rounded-full font-bold text-[15px] transition-colors">
                Buy & Sell
              </button>
              <button className="hidden sm:block bg-gray-100 hover:bg-gray-200 text-foreground px-5 py-2.5 rounded-full font-bold text-[15px] transition-colors">
                Send & Receive
              </button>
              
              {/* Icons */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="w-[22px] h-[22px]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <Grid className="w-[22px] h-[22px]" />
              </button>
              <button 
                onClick={handleLogout}
                className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold cursor-pointer border-2 border-transparent hover:border-blue-600 transition-colors"
                title="Logout"
              >
                {profile.name.charAt(0).toUpperCase()}
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content Grid */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col xl:flex-row border-b border-border min-h-full">
            
            {/* Center Feed */}
            <div className="flex-1 xl:max-w-none p-6 lg:p-8 xl:border-r border-border">
              
              {/* Promo Banner */}
              <div className="bg-[#F5F8FF] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-100 mb-10 relative group">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">
                    ₿
                  </div>
                  <div>
                    <h2 className="text-[17px] font-bold text-gray-900 mb-1">{profile.name}, let's buy your first crypto</h2>
                    <p className="text-[14px] text-gray-600">Invest $50.00 in Bitcoin, the safest haven of assets to start with.</p>
                  </div>
                </div>
                <button className="bg-[#0052ff] hover:bg-[#0045d8] text-white px-5 py-2.5 rounded-full font-bold text-[15px] whitespace-nowrap transition-colors">
                  Buy Bitcoin &rarr;
                </button>
              </div>

              {/* My Balance */}
              <div className="mb-12 border-b border-gray-100 pb-12 relative">
                <h3 className="text-[15px] font-semibold text-gray-600 mb-1">My balance</h3>
                <div className="flex items-center gap-2">
                  <h1 className="text-[34px] font-bold text-gray-900">$3.92</h1>
                  <ChevronRight className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-900 transition-colors mt-2" />
                </div>
                {/* Visual Chart Setup */}
                <div className="absolute bottom-6 right-0 w-full sm:w-[55%] h-[100px] sm:h-[120px]">
                  {chartData.length > 0 && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0052ff" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#0052ff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Tooltip 
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          labelStyle={{ display: 'none' }}
                          formatter={(value: any) => [`$${value}`, "Balance"]} 
                        />
                        <YAxis domain={['auto', 'auto']} hide />
                        <Area type="monotone" dataKey="value" stroke="#0052ff" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              {/* Prices Section */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-[20px] font-bold text-gray-900">Prices</h2>
                  <select className="bg-gray-100 border-none px-4 py-2 rounded-full font-semibold text-[14px] cursor-pointer outline-none">
                    <option>Watchlist</option>
                    <option>All assets</option>
                  </select>
                </div>
                
                <div className="flex flex-col space-y-2">
                  {cryptos.length === 0 ? (
                    <div className="p-8 text-center border border-dashed rounded-xl border-gray-300 bg-gray-50 mt-4">
                      <p className="text-gray-500 font-medium mb-2">No cryptocurrencies found in database.</p>
                      <p className="text-sm text-gray-400">Please scroll down to the "Admin: Add New Listing" form to add some tokens, or they will appear here once added!</p>
                    </div>
                  ) : (
                    cryptos.map((coin: any) => (
                      <div key={coin._id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                        
                        <div className="flex items-center gap-4 w-[50%] md:w-[35%] lg:w-[30%]">
                          <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                          <div className="min-w-0">
                            <p className="font-bold text-[15px] text-gray-900 truncate">{coin.name}</p>
                            <p className="text-[14px] text-gray-500 font-medium truncate">{coin.symbol.toUpperCase()} • 4.35% APY</p>
                          </div>
                        </div>

                        <div className="hidden md:block w-[15%]">
                          <p className="font-medium text-[15px]">${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>

                        <div className="hidden lg:block w-[15%]">
                          <svg className="w-16 h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <polyline 
                              points={coin.change24h > 0 ? "0,25 20,20 40,28 60,15 80,18 100,5" : "0,5 20,12 40,8 60,20 80,18 100,28"} 
                              fill="none" 
                              stroke={coin.change24h > 0 ? "#05a265" : "#e03737"} 
                              strokeWidth="2" 
                            />
                          </svg>
                        </div>

                        <div className="w-[20%] md:w-[15%] text-right font-medium text-[15px]">
                          <span className={coin.change24h > 0 ? "text-green-600" : "text-red-600"}>
                            {coin.change24h > 0 ? <ArrowUpRight className="inline w-3 h-3" /> : <ArrowDownRight className="inline w-3 h-3" />}
                            {Math.abs(coin.change24h).toFixed(2)}%
                          </span>
                        </div>
                        
                        <div className="hidden lg:block w-[10%] text-right">
                          <p className="font-medium text-[15px] text-gray-900">${((coin.price * 100000) / 1e9).toFixed(1)}B</p>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-5 justify-end w-[30%] md:w-[20%] lg:w-[15%]">
                          <button className="text-[#0052ff] font-bold text-[14px] hover:text-[#0045d8]">Buy</button>
                          <Star className="w-5 h-5 text-[#0052ff] fill-[#0052ff] cursor-pointer hidden sm:block shrink-0" />
                          <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hidden sm:block shrink-0" />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar (Top Movers & Tools) */}
            <div className="w-full xl:w-[320px] bg-white flex-shrink-0">
              
              {/* Developer Database Admin Area - Move to top of right sidebar so it's impossible to miss on mobile */}
              <div className="p-6 xl:p-8 bg-blue-50 m-6 rounded-xl border border-blue-200 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <Globe className="w-24 h-24 text-blue-600" />
                </div>
                <h3 className="font-bold text-[16px] text-blue-900 mb-3 relative z-10">Admin: Setup Database</h3>
                <p className="text-xs text-blue-700 mb-4 relative z-10">Your database is empty. Add a cryptocurrency to see the dashboard come to life!</p>
                <form onSubmit={handleAddCrypto} className="space-y-3 relative z-10">
                   <input type="text" required value={cryptoForm.name} onChange={e => setCryptoForm({...cryptoForm, name: e.target.value})} className="w-full border-blue-200 rounded p-2 text-[13px]" placeholder="Name (e.g. Solana)" />
                   <div className="flex gap-2">
                     <input type="text" required value={cryptoForm.symbol} onChange={e => setCryptoForm({...cryptoForm, symbol: e.target.value})} className="w-1/2 border-blue-200 rounded p-2 text-[13px]" placeholder="Symbol (SOL)" />
                     <input type="number" required value={cryptoForm.change24h} onChange={e => setCryptoForm({...cryptoForm, change24h: e.target.value})} className="w-1/2 border-blue-200 rounded p-2 text-[13px]" placeholder="Change %" />
                   </div>
                   <input type="number" step="any" required value={cryptoForm.price} onChange={e => setCryptoForm({...cryptoForm, price: e.target.value})} className="w-full border-blue-200 rounded p-2 text-[13px]" placeholder="Price ($)" />
                   <input type="url" required value={cryptoForm.image} onChange={e => setCryptoForm({...cryptoForm, image: e.target.value})} className="w-full border-blue-200 rounded p-2 text-[13px]" placeholder="Image URL (https://...)" />
                   <button type="submit" className="w-full bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold py-2.5 rounded text-[13px] shadow-sm transition-colors">Add Token Data</button>
                </form>
              </div>
              
              {/* Transfer Card */}
              <div className="p-6 xl:p-8 border-b border-border relative">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
                <div className="flex gap-4 items-center mb-4 text-gray-400">
                  <ArrowLeftRight className="w-5 h-5" /> &rarr;
                </div>
                <h3 className="font-bold text-[18px] text-gray-900 leading-snug mb-2 pr-8">Transfer your crypto into Coinbase</h3>
                <p className="text-[14px] text-gray-600 mb-4">Coinbase is plain and simple the safest place to store your crypto</p>
                <a href="#" className="text-[#0052ff] font-bold text-[15px] hover:text-[#0045d8] flex items-center gap-1">
                  Store your crypto <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
                <div className="absolute right-4 top-[50%] -translate-y-1/2 w-16 h-16 opacity-10 xl:opacity-100 hidden sm:block">
                  <div className="w-full h-full rounded-full border-8 border-blue-600 border-t-yellow-400 border-l-black rotate-45"></div>
                </div>
              </div>

              {/* Top Movers List */}
              <div className="p-6 xl:p-8 border-b border-border">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-[18px] text-gray-900">Top Movers</h3>
                  <a href="#" className="text-[#0052ff] font-bold text-[14px] hover:text-[#0045d8]">See all</a>
                </div>
                
                <div className="space-y-4">
                  {topMovers.map((coin: any) => (
                    <div key={coin._id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-bold text-[15px] text-gray-900 leading-tight">{coin.name}</p>
                          <p className="text-[13px] text-gray-500 font-medium">{coin.symbol.toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[15px] text-gray-900">${coin.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                        <p className={coin.change24h > 0 ? "text-green-600 text-[13px] font-medium" : "text-red-600 text-[13px] font-medium"}>
                          {coin.change24h > 0 ? <ArrowUpRight className="inline w-3 h-3" /> : <ArrowDownRight className="inline w-3 h-3" />}
                          {Math.abs(coin.change24h).toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  ))}
                  {topMovers.length === 0 && (
                     <p className="text-sm text-gray-500">Loading top movers...</p>
                  )}
                </div>
              </div>

            </div>
          </div>
          
          {/* Global Footer */}
          <footer className="mt-8 mb-8 mx-auto max-w-[1200px] px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-4">
            <div className="flex items-center gap-4 text-[#0052ff] font-medium flex-wrap">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Legal & Privacy</a>
              <span className="text-gray-500 font-normal">© 2026 Coinbase</span>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <select className="bg-transparent border-none text-gray-600 font-medium outline-none">
                <option>English</option>
              </select>
              <button className="bg-[#0052ff] text-white px-4 py-2 rounded font-bold text-[13px]">
                Need help?
              </button>
            </div>
          </footer>

        </div>


      </main>
    </div>
  );
}
