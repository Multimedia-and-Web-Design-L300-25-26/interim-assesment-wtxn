import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-16">
        <div className="w-full max-w-md px-4">
          <div className="bg-white">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Create account</h1>
              <p className="text-lg text-muted-foreground">
                Join millions of users on Coinbase
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email address
                </label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="h-12 px-4 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="At least 8 characters"
                  className="h-12 px-4 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-base"
                  required
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Use at least 8 characters including uppercase, lowercase, numbers and symbols
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full name
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  className="h-12 px-4 rounded-lg border-border bg-white shadow-sm focus-visible:ring-primary text-base"
                  required
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Create account
                </Button>
              </div>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-muted-foreground">or</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-border rounded-lg font-medium text-base"
                >
                  Continue with Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-border rounded-lg font-medium text-base"
                >
                  Continue with Apple
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/" className="text-primary font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-xs text-muted-foreground space-y-4">
              <p>
                By creating an account, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
              <p>
                Coinbase is committed to user privacy and security. We never request your private keys.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
