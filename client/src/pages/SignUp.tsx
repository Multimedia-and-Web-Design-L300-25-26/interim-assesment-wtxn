import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { UserCircle, Users, BarChart3, Layers } from "lucide-react";

export default function SignUp() {
  const [step, setStep] = useState<"type" | "form">("type");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast({ title: "Registration successful" });
        setLocation("/profile");
      } else {
        toast({ title: "Error", description: data.message, variant: "destructive" });
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-6">
        <Link href="/">
          <img src="/coinbase-logo.png" alt="Coinbase" className="h-8 w-8" />
        </Link>
      </div>

      <main className="flex-1 flex items-start justify-center pt-10 px-4">
        {step === "type" ? (
          <div className="w-full max-w-[420px] text-center">
            <h1 className="text-[28px] font-bold text-foreground mb-8 text-left">
              What kind of account are you creating?
            </h1>

            <div className="space-y-4">
              <div 
                onClick={() => setStep("form")}
                className="flex items-center gap-4 p-5 py-6 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded">
                  <UserCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[15px]">Personal</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">Trade crypto as an individual.</p>
                </div>
              </div>

              <div 
                onClick={() => setStep("form")}
                className="flex items-center gap-4 p-5 py-6 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-yellow-500 rounded relative">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[15px]">Business</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">For small businesses and startups.</p>
                </div>
              </div>

              <div 
                onClick={() => setStep("form")}
                className="flex items-center gap-4 p-5 py-6 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center text-blue-600 rounded">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[15px]">Institutional</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">Recommended for larger institutions.</p>
                </div>
              </div>

              <div 
                onClick={() => setStep("form")}
                className="flex items-center gap-4 p-5 py-6 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center text-blue-600 rounded">
                  <Layers className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[15px]">Developer</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">Build onchain using developer tooling.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[420px]">
            <button 
              onClick={() => setStep("type")} 
              className="text-sm font-medium text-blue-600 hover:underline mb-6 block"
            >
              &larr; Back to account types
            </button>
            <h1 className="text-[26px] font-bold text-foreground mb-1">Create your account</h1>
            <p className="text-sm text-muted-foreground mb-6 leading-snug">
              Access all that Coinbase has to offer with a single account.
            </p>

            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#6b8eff] hover:bg-[#5a7dee] text-white font-semibold text-sm rounded-full transition-colors mt-2"
              >
                Continue
              </button>
            </form>

            <p className="text-center text-sm font-semibold text-foreground mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
