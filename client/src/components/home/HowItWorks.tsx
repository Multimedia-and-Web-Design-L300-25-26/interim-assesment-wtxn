import { UserPlus, CreditCard, ArrowRightLeft } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-primary" />,
      title: "Create an account",
      description: "Get started securely and simply."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Add a payment method",
      description: "Link a debit card or bank account."
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-primary" />,
      title: "Start trading",
      description: "Buy, sell, and swap cryptocurrencies."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Get started in a few minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Coinbase supports a variety of the most popular digital currencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-border z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-2 border-border shadow-soft flex items-center justify-center mb-6 relative group cursor-pointer hover:border-primary transition-colors">
                <div className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
