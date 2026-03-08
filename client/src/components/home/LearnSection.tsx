import { Link } from "wouter";

export function LearnSection() {
  const articles = [
    {
      title: "Crypto basics",
      description: "A beginner's guide to cryptocurrencies.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&h=400&fit=crop"
    },
    {
      title: "Blockchain explained",
      description: "How the technology behind crypto works.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4eccd4?w=600&h=400&fit=crop"
    },
    {
      title: "Trading tips",
      description: "Strategies for managing your portfolio.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
    },
    {
      title: "Wallet security",
      description: "Keep your digital assets safe.",
      image: "https://images.unsplash.com/photo-1614064016625-f71661b17bce?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Learn crypto
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about crypto, straight from the experts.
            </p>
          </div>
          <Link href="/learn" className="text-primary font-semibold hover:underline">
            View all articles
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                {/* learn crypto topic thumbnail */}
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
