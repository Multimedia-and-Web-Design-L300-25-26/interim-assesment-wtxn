import { Wallet, ShieldCheck, PieChart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: "Buy Crypto",
      description: "Buy, sell, and swap cryptos simply and securely.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Secure Wallet",
      description: "Store your crypto in a secure vault with industry-leading protection.",
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary" />,
      title: "Earn Rewards",
      description: "Earn up to 5.0% APY on your crypto while you sleep.",
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Create your cryptocurrency portfolio today
          </h2>
          <p className="text-lg text-muted-foreground">
            Coinbase has a variety of features that make it the best place to start trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-blue-50/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
