import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Search, Star, ArrowUpRight, ArrowDownRight, ChevronLeft, ChevronRight, ChevronDown, Info } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
  sparkline_in_7d?: { price: number[] };
}

interface GlobalData {
  data: {
    total_market_cap: { usd: number };
    total_volume: { usd: number };
    market_cap_change_percentage_24h_usd: number;
    market_cap_percentage: { btc: number };
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmt(n: number) {
  if (n >= 1e12) return "$" + (n / 1e12).toFixed(2) + "T";
  if (n >= 1e9)  return "$" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6)  return "$" + (n / 1e6).toFixed(2) + "M";
  return "$" + n.toLocaleString();
}

function fmtPrice(p: number) {
  if (p >= 1000) return "$" + p.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (p >= 1)    return "$" + p.toFixed(4);
  return "$" + p.toFixed(6);
}

// ── Sparkline ─────────────────────────────────────────────────────────────────
function Sparkline({ data, up }: { data: number[]; up: boolean }) {
  if (!data || data.length < 2) return <div className="w-20 h-8 bg-gray-100 rounded" />;
  const slice = data.slice(-30);
  const min = Math.min(...slice);
  const max = Math.max(...slice);
  const range = max - min || 1;
  const W = 80, H = 32;
  const pts = slice
    .map((v, i) => `${(i / (slice.length - 1)) * W},${H - ((v - min) / range) * H}`)
    .join(" ");
  const color = up ? "#16a34a" : "#dc2626";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-20 h-8" preserveAspectRatio="none">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// ── Mini stat sparkline (wider) ───────────────────────────────────────────────
function StatSparkline({ data, up }: { data: number[]; up: boolean }) {
  if (!data || data.length < 2) return <div className="w-full h-12 bg-gray-100 rounded" />;
  const slice = data.slice(-40);
  const min = Math.min(...slice);
  const max = Math.max(...slice);
  const range = max - min || 1;
  const W = 120, H = 48;
  const pts = slice
    .map((v, i) => `${(i / (slice.length - 1)) * W},${H - ((v - min) / range) * H}`)
    .join(" ");
  const color = up ? "#16a34a" : "#dc2626";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-12" preserveAspectRatio="none">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// ── Change badge ──────────────────────────────────────────────────────────────
function Change({ pct }: { pct: number }) {
  const up = pct >= 0;
  return (
    <span className={`flex items-center gap-0.5 font-semibold text-sm ${up ? "text-green-600" : "text-red-600"}`}>
      {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
      {Math.abs(pct).toFixed(2)}%
    </span>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Cryptocurrencies() {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState(10);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const { data: global } = useQuery<GlobalData>({
    queryKey: ["/coingecko/global"],
    queryFn: async () => {
      const r = await fetch("https://api.coingecko.com/api/v3/global");
      return r.json();
    },
    staleTime: 60000,
    refetchInterval: 120000,
  });

  const { data: coins, isLoading } = useQuery<Coin[]>({
    queryKey: ["/coingecko/markets-spark"],
    queryFn: async () => {
      const r = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
      );
      return r.json();
    },
    staleTime: 30000,
    refetchInterval: 60000,
  });

  const gd = global?.data;
  const totalMcap = gd?.total_market_cap?.usd ?? 0;
  const totalVol  = gd?.total_volume?.usd ?? 0;
  const mcapChg   = gd?.market_cap_change_percentage_24h_usd ?? 0;
  const btcDom    = gd?.market_cap_percentage?.btc ?? 0;

  const filtered = coins
    ?.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, rows) ?? [];

  const topMovers = [...(coins ?? [])]
    .sort((a, b) => Math.abs(b.price_change_percentage_24h) - Math.abs(a.price_change_percentage_24h))
    .slice(0, 4);

  const newOnCoinbase = coins?.slice(15, 19) ?? [];

  const toggleFav = (id: string) =>
    setFavorites(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar showBanner />
      <main className="flex-1 pt-[96px]">

        {/* ── Secondary banner ──────────────────────────────── */}
        <div className="border-b border-border bg-white">
          <div className="max-w-[1200px] mx-auto px-4 py-2 text-xs text-center text-primary font-medium">
            Earn up to $2,000 when you buy $50 in crypto!
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-6 flex gap-6 items-start">

          {/* ── LEFT MAIN ─────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Title + search */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">Explore crypto</h1>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  Coinbase 50 Index is
                  <span className={`font-medium flex items-center gap-0.5 ${mcapChg >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {mcapChg >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {Math.abs(mcapChg).toFixed(2)}% (24hrs)
                  </span>
                  <Info size={13} className="text-muted-foreground/60" />
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for an asset"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-full border border-border text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  data-testid="input-crypto-search"
                />
              </div>
            </div>

            {/* Market stats */}
            <div className="mb-6">
              <h2 className="text-lg font-bold text-foreground mb-1">Market stats</h2>
              <p className="text-sm text-muted-foreground mb-1">
                The overall crypto market is growing this week. As of today, the total crypto market capitalization is {fmt(totalMcap)}, representing a {Math.abs(mcapChg).toFixed(2)}% {mcapChg >= 0 ? "increase" : "decrease"} from last week.
              </p>
              <button className="text-sm text-primary font-medium hover:underline mb-4">Read more</button>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Total market cap", value: fmt(totalMcap), chg: mcapChg, spark: coins?.find(c => c.id === "bitcoin")?.sparkline_in_7d?.price },
                  { label: "Trade volume", value: fmt(totalVol), chg: -16.39, spark: coins?.find(c => c.id === "ethereum")?.sparkline_in_7d?.price },
                  { label: "Buy-sell ratio", value: "$0.80", chg: 4.07, spark: coins?.find(c => c.id === "solana")?.sparkline_in_7d?.price },
                  { label: "BTC dominance", value: btcDom.toFixed(2) + "%", chg: -0.43, spark: coins?.find(c => c.id === "bitcoin")?.sparkline_in_7d?.price },
                ].map(stat => (
                  <div key={stat.label} className="border border-border rounded-xl p-3">
                    <p className="text-xs text-muted-foreground mb-0.5">{stat.label}</p>
                    <p className="text-sm font-bold text-foreground">
                      {stat.value}{" "}
                      <span className={`text-xs font-semibold ${stat.chg >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stat.chg >= 0 ? "↑" : "↓"} {Math.abs(stat.chg).toFixed(2)}%
                      </span>
                    </p>
                    {stat.spark && <StatSparkline data={stat.spark} up={stat.chg >= 0} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Crypto market prices */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Crypto market prices</h2>

              {/* Filters */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {[
                  { label: "All assets" },
                  { label: "1D" },
                  { label: "USD" },
                  { label: `${rows} rows` },
                ].map(f => (
                  <button key={f.label} className="flex items-center gap-1 border border-border rounded-full px-3 py-1.5 text-xs font-medium text-foreground hover:bg-gray-50 transition-colors">
                    {f.label === "All assets" && <span className="text-muted-foreground">🌐</span>}
                    {f.label} <ChevronDown size={12} />
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="border border-border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-border">
                    <tr>
                      <th className="w-6 px-3 py-3" />
                      <th className="text-left px-3 py-3 font-semibold text-foreground/70">Asset</th>
                      <th className="text-right px-3 py-3 font-semibold text-foreground/70">Market price</th>
                      <th className="text-center px-3 py-3 font-semibold text-foreground/70 hidden md:table-cell">Chart</th>
                      <th className="text-right px-3 py-3 font-semibold text-foreground/70">Change</th>
                      <th className="text-right px-3 py-3 font-semibold text-foreground/70 hidden lg:table-cell">Mkt cap</th>
                      <th className="text-right px-3 py-3 font-semibold text-foreground/70 hidden lg:table-cell">Volume</th>
                      <th className="px-3 py-3 font-semibold text-foreground/70 hidden sm:table-cell">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? Array.from({ length: 8 }).map((_, i) => (
                          <tr key={i} className="border-b border-border last:border-0 animate-pulse">
                            <td className="px-3 py-3"><div className="w-4 h-4 bg-gray-200 rounded" /></td>
                            <td className="px-3 py-3">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                <div>
                                  <div className="w-20 h-3.5 bg-gray-200 rounded mb-1" />
                                  <div className="w-10 h-3 bg-gray-100 rounded" />
                                </div>
                              </div>
                            </td>
                            <td className="px-3 py-3 text-right"><div className="w-20 h-3.5 bg-gray-200 rounded ml-auto" /></td>
                            <td className="px-3 py-3 hidden md:table-cell"><div className="w-20 h-8 bg-gray-100 rounded mx-auto" /></td>
                            <td className="px-3 py-3 text-right"><div className="w-14 h-3.5 bg-gray-200 rounded ml-auto" /></td>
                            <td className="px-3 py-3 text-right hidden lg:table-cell"><div className="w-16 h-3.5 bg-gray-200 rounded ml-auto" /></td>
                            <td className="px-3 py-3 text-right hidden lg:table-cell"><div className="w-14 h-3.5 bg-gray-200 rounded ml-auto" /></td>
                            <td className="px-3 py-3 hidden sm:table-cell"><div className="w-16 h-8 bg-gray-200 rounded" /></td>
                          </tr>
                        ))
                      : filtered.map(coin => {
                          const up = coin.price_change_percentage_24h >= 0;
                          return (
                            <tr key={coin.id} className="border-b border-border last:border-0 hover:bg-gray-50 transition-colors" data-testid={`row-crypto-${coin.id}`}>
                              <td className="px-3 py-3">
                                <button onClick={() => toggleFav(coin.id)} className="text-muted-foreground hover:text-yellow-400 transition-colors">
                                  <Star size={14} fill={favorites.has(coin.id) ? "#facc15" : "none"} stroke={favorites.has(coin.id) ? "#facc15" : "currentColor"} />
                                </button>
                              </td>
                              <td className="px-3 py-3">
                                <Link href={`/asset/${coin.id}`}>
                                  <div className="flex items-center gap-2.5">
                                    <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full shrink-0" />
                                    <div>
                                      <div className="font-semibold text-foreground text-sm">{coin.name}</div>
                                      <div className="text-xs text-muted-foreground uppercase">{coin.symbol}</div>
                                    </div>
                                  </div>
                                </Link>
                              </td>
                              <td className="px-3 py-3 text-right font-semibold text-foreground">{fmtPrice(coin.current_price)}</td>
                              <td className="px-3 py-3 hidden md:table-cell">
                                <div className="flex justify-center">
                                  {coin.sparkline_in_7d?.price
                                    ? <Sparkline data={coin.sparkline_in_7d.price} up={up} />
                                    : <div className="w-20 h-8 bg-gray-100 rounded" />}
                                </div>
                              </td>
                              <td className="px-3 py-3 text-right">
                                <Change pct={coin.price_change_percentage_24h} />
                              </td>
                              <td className="px-3 py-3 text-right text-foreground/70 hidden lg:table-cell">{fmt(coin.market_cap)}</td>
                              <td className="px-3 py-3 text-right text-foreground/70 hidden lg:table-cell">{fmt(coin.total_volume)}</td>
                              <td className="px-3 py-3 hidden sm:table-cell">
                                <Link href="/signup">
                                  <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors" data-testid={`button-trade-${coin.id}`}>
                                    Trade
                                  </button>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>

                {/* Load more */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-gray-50">
                  <span className="text-xs text-muted-foreground">Showing {Math.min(rows, filtered.length)} of {coins?.length ?? 0}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setRows(r => Math.max(10, r - 10))}
                      disabled={rows <= 10}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-gray-100 disabled:opacity-40 transition-colors"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={() => setRows(r => Math.min(50, r + 10))}
                      disabled={rows >= 50}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-gray-100 disabled:opacity-40 transition-colors"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
          <aside className="w-72 shrink-0 hidden lg:block space-y-4">

            {/* CTA card */}
            <div className="bg-primary rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="font-bold text-lg leading-snug mb-1">Earn up to $2,000 when<br />you buy $50 in crypto</p>
                <p className="text-blue-100 text-sm mb-4">Create your account today.</p>
                <Link href="/signup">
                  <button className="bg-white text-primary font-semibold text-sm px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
                    Sign up
                  </button>
                </Link>
              </div>
              <div className="absolute right-3 top-3 text-4xl opacity-80">🪙</div>
            </div>
            <p className="text-xs text-muted-foreground px-1">Restrictions apply. <a href="#" className="underline">See full terms.</a></p>

            {/* Top movers */}
            <div className="border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-foreground">Top movers</h3>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-gray-50"><ChevronLeft size={12} /></button>
                  <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-gray-50"><ChevronRight size={12} /></button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">24hr change</p>
              <div className="grid grid-cols-2 gap-2">
                {(isLoading ? [] : topMovers).map(coin => {
                  const up = coin.price_change_percentage_24h >= 0;
                  return (
                    <Link href={`/asset/${coin.id}`} key={coin.id}>
                      <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors cursor-pointer" data-testid={`card-mover-${coin.id}`}>
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full mb-1" />
                        <p className="text-xs font-semibold text-muted-foreground uppercase">{coin.symbol}</p>
                        <p className={`text-sm font-bold ${up ? "text-green-600" : "text-red-600"}`}>
                          {up ? "↑" : "↓"} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </p>
                        <p className="text-xs text-muted-foreground">{fmtPrice(coin.current_price)}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* New on Coinbase */}
            <div className="border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground">New on Coinbase</h3>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-gray-50"><ChevronLeft size={12} /></button>
                  <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-gray-50"><ChevronRight size={12} /></button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(isLoading ? [] : newOnCoinbase).map(coin => (
                  <Link href={`/asset/${coin.id}`} key={coin.id}>
                    <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors cursor-pointer" data-testid={`card-new-${coin.id}`}>
                      <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full mb-1" />
                      <p className="text-xs font-semibold text-muted-foreground uppercase">{coin.symbol}</p>
                      <p className="text-sm font-bold text-foreground truncate">{coin.name}</p>
                      <p className="text-xs text-muted-foreground">Added recently</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ── CTA Banner ────────────────────────────────────────── */}
        <div className="bg-primary mx-4 mb-8 rounded-2xl max-w-[1200px] lg:mx-auto px-10 py-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              Create a Coinbase account to trade crypto. It's quick, easy, and secure.
            </h2>
          </div>
          <div className="flex items-center gap-8 shrink-0 ml-8">
            <div className="text-5xl hidden md:block">📊</div>
            <Link href="/signup">
              <button className="bg-white text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2" data-testid="button-start-trading">
                Start Trading <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
