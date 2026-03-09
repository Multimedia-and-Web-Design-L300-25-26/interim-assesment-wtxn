import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Learn() {
  const guides = [
    { title: "What is Bitcoin?", description: "Learn about the world's first cryptocurrency and how it works." },
    { title: "Understanding Blockchain", description: "Explore the technology behind cryptocurrency and its applications." },
    { title: "How to Secure Your Assets", description: "Best practices for protecting your crypto investments." },
    { title: "Trading Basics", description: "Get started with the fundamentals of cryptocurrency trading." },
    { title: "DeFi Explained", description: "Discover decentralized finance and its opportunities." },
    { title: "NFTs & Web3", description: "Learn about digital ownership and the future of the web." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Learn Crypto</h1>
            <p className="text-xl text-muted-foreground">Everything you need to know about cryptocurrency and blockchain technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-bold text-foreground mb-2">{guide.title}</h3>
                <p className="text-muted-foreground">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
