import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

const POPULAR = [
  {
    label: "Beginner's Guide",
    title: "What is cryptocurrency?",
    description: "Learn what cryptocurrency is, how it works, and why it matters.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency",
  },
  {
    label: "Getting Started",
    title: "How to earn crypto rewards",
    description: "Discover the many ways to earn crypto rewards on Coinbase.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
    href: "https://www.coinbase.com/learn/tips-and-tutorials/how-to-earn-crypto-rewards",
  },
  {
    label: "Market Update",
    title: "Everything you need to know about the first-ever U.S. Bitcoin ETF",
    description: "A comprehensive guide to Bitcoin ETFs and what they mean for investors.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-bitcoin-futures-etf",
  },
];

const CRYPTO_BASICS = [
  {
    label: "Crypto Basics",
    title: "What is Bitcoin?",
    description: "The ultimate guide to the world's first and largest cryptocurrency.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin",
  },
  {
    label: "Crypto Basics",
    title: "What is Ethereum?",
    description: "Learn about Ethereum, smart contracts, and the decentralized web.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-ethereum",
  },
  {
    label: "Crypto Basics",
    title: "What is DeFi?",
    description: "Decentralized finance explained — from protocols to yield farming.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-defi",
  },
  {
    label: "Crypto Basics",
    title: "What is a blockchain?",
    description: "Understand the technology powering all cryptocurrencies.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain",
  },
  {
    label: "Crypto Basics",
    title: "What are NFTs?",
    description: "Learn about non-fungible tokens and the future of digital ownership.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png",
    href: "https://www.coinbase.com/learn/crypto-basics/what-are-nfts",
  },
  {
    label: "Crypto Basics",
    title: "What is a crypto wallet?",
    description: "Everything you need to know about storing and managing your crypto.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet",
  },
];

const ADVANCED = [
  {
    label: "Advanced Trading",
    title: "What is technical analysis?",
    description: "Learn the tools and terminology you need to take control of your trades.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/50bz6qkc8hSzqqHhbiMtKb/1e4d3f35ff2cd049580a4eb20f861a6e/Learn_Illustration_What_is_Technical_Analysis__1_.png",
    href: "https://www.coinbase.com/learn/advanced-trading",
  },
  {
    label: "Dollar Cost Averaging",
    title: "What is dollar cost averaging?",
    description: "A proven strategy for building wealth through regular investing.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
    href: "https://www.coinbase.com/learn",
  },
  {
    label: "Your Crypto",
    title: "Tax forms, explained",
    description: "A guide to U.S. tax forms and crypto reports — everything you need to know.",
    image: "https://images.ctfassets.net/q5ulk4bp65r7/50bz6qkc8hSzqqHhbiMtKb/1e4d3f35ff2cd049580a4eb20f861a6e/Learn_Illustration_What_is_Technical_Analysis__1_.png",
    href: "https://www.coinbase.com/learn/your-crypto/tax-documents-explained",
  },
];

const GLOSSARY = [
  { term: "Bitcoin", href: "https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin" },
  { term: "Blockchain", href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain" },
  { term: "Cardano", href: "https://www.coinbase.com/learn/crypto-basics/what-is-cardano" },
  { term: "Crypto wallet", href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet" },
  { term: "DeFi", href: "https://www.coinbase.com/learn/crypto-basics/what-is-defi" },
  { term: "Ethereum", href: "https://www.coinbase.com/learn/crypto-basics/what-is-ethereum" },
  { term: "Fork", href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-fork" },
  { term: "Inflation", href: "https://www.coinbase.com/learn/crypto-basics/what-is-inflation" },
  { term: "Market cap", href: "https://www.coinbase.com/learn/crypto-basics/what-is-market-cap" },
  { term: "NFT", href: "https://www.coinbase.com/learn/crypto-basics/what-are-nfts" },
  { term: "Private key", href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-private-key" },
  { term: "Smart contract", href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-smart-contract" },
  { term: "Token", href: "https://www.coinbase.com/learn/crypto-basics/what-is-a-token" },
  { term: "Volatility", href: "https://www.coinbase.com/learn/crypto-basics/what-is-volatility" },
];

function ArticleCard({ article }: { article: typeof POPULAR[0] }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
      data-testid={`card-learn-${article.title.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
    >
      {article.image && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        {article.label && (
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {article.label}
          </span>
        )}
        <h3 className="text-base font-bold text-foreground mt-1 mb-2 leading-snug group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>
        )}
      </div>
    </a>
  );
}

export default function Learn() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-14">
            <h1 className="text-5xl font-bold text-foreground mb-4">Crypto questions, answered.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Everything you need to understand cryptocurrency, blockchain, and the future of finance.
            </p>
          </div>

          {/* Popular */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Popular</h2>
              <a
                href="https://www.coinbase.com/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
              >
                See all <ExternalLink size={12} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {POPULAR.map((a) => <ArticleCard key={a.href} article={a} />)}
            </div>
          </section>

          {/* Crypto Basics */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Crypto basics</h2>
              <a
                href="https://www.coinbase.com/learn/crypto-basics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
              >
                See more crypto basics <ExternalLink size={12} />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CRYPTO_BASICS.map((a) => <ArticleCard key={a.href} article={a} />)}
            </div>
          </section>

          {/* What is... glossary */}
          <section className="mb-14 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">What is...</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {GLOSSARY.map((item) => (
                <a
                  key={item.term}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                  data-testid={`link-glossary-${item.term.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.term}
                </a>
              ))}
            </div>
          </section>

          {/* Advanced Trading */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Advanced trading</h2>
              <a
                href="https://www.coinbase.com/learn/advanced-trading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
              >
                See more advanced trading <ExternalLink size={12} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADVANCED.map((a) => <ArticleCard key={a.href} article={a} />)}
            </div>
          </section>

          {/* CTA banner */}
          <section className="bg-[#0052FF] rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">New to crypto? Start on Coinbase.</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Create a free account. Track prices, learn the basics and buy when you're ready.
            </p>
            <Link href="/signup">
              <Button
                className="bg-white text-[#0052FF] hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full"
                data-testid="button-learn-cta"
              >
                Start on Coinbase
              </Button>
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
