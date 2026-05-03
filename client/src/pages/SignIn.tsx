import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast({ title: "Sign in successful" });
        setLocation("/profile"); // Redirects to protected dashboard on successful login
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

      <main className="flex-1 flex items-start justify-center pt-16 px-4">
        <div className="w-full max-w-[400px]">
          <h1 className="text-[26px] font-bold text-foreground mb-6">Sign in to Coinbase</h1>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-2 border-primary bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-2 border-primary bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 mt-4 bg-[#6b8eff] hover:bg-[#5a7dee] text-white font-semibold text-sm rounded-full transition-colors"
            >
              Continue
            </button>
          </form>

          <p className="text-center text-sm text-foreground mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
