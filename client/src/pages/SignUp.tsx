import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with logo */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/"><img src="/coinbase-logo.png" alt="Coinbase" className="h-8 w-8" /></Link>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
              <p className="text-sm text-muted-foreground">
                Access all that Coinbase has to offer with a single account.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-11 px-4 rounded-md border-border bg-white shadow-sm focus-visible:ring-primary text-base"
                  required
                />
              </div>

              <Button
                type="button"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                Continue
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-muted-foreground">OR</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 border-border rounded-md font-medium text-base bg-gray-100 hover:bg-gray-200 border-0"
                >
                  <span className="mr-2">G</span>
                  Sign up with Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 border-border rounded-md font-medium text-base bg-gray-100 hover:bg-gray-200 border-0"
                >
                  <span className="mr-2">🍎</span>
                  Sign up with Apple
                </Button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="#" className="text-primary font-semibold hover:underline">
                  Sign In
                </a>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground text-center">
              <p>
                By creating an account you certify that you are over the age of 18 and agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
