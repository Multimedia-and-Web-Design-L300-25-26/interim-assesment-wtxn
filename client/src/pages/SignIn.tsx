import { useState } from "react";
import { Link } from "wouter";

function CoinbaseLogo() {
  // Pure C-arc shape: outer ring R=15.5, inner ring r=9.5
  // Opening on right side between y=11.75 and y=20.25 (centre y=16)
  const R = 15.5, r = 9.5, cx = 16, cy = 16;
  const dy = 4.25;
  const ox = cx + Math.sqrt(R * R - dy * dy); // ≈ 30.91
  const ix = cx + Math.sqrt(r * r - dy * dy); // ≈ 24.50
  const barTopY = cy - dy;    // 11.75
  const barBotY = cy + dy;    // 20.25

  const d = [
    `M ${ox.toFixed(2)} ${barTopY}`,
    `A ${R} ${R} 0 1 0 ${ox.toFixed(2)} ${barBotY}`,
    `L ${ix.toFixed(2)} ${barBotY}`,
    `A ${r} ${r} 0 1 1 ${ix.toFixed(2)} ${barTopY}`,
    "Z",
  ].join(" ");

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill="#0052FF" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.045 9.594c-.02-2.018 1.648-2.993 1.724-3.04-1.008-1.391-2.432-1.448-2.943-1.466-1.245-.127-2.447.74-3.08.74-.633 0-1.595-.726-2.627-.706-1.336.02-2.58.782-3.265 1.977-1.403 2.428-.358 6.01 1 7.97.671.965 1.464 2.046 2.501 2.007.998-.04 1.375-.64 2.58-.64 1.205 0 1.546.64 2.603.618 1.082-.018 1.764-.97 2.423-1.939.773-1.11 1.087-2.192 1.1-2.25-.024-.01-2.1-.806-2.016-3.27zM11.918 3.47C12.453 2.83 12.82 1.94 12.72 1.04c-.777.034-1.721.52-2.277 1.146-.497.563-.934 1.467-.818 2.33.868.067 1.758-.44 2.293-1.046z"/>
    </svg>
  );
}

function PasskeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo top-left */}
      <div className="p-6">
        <Link href="/">
          <CoinbaseLogo />
        </Link>
      </div>

      {/* Centered form */}
      <main className="flex-1 flex items-start justify-center pt-16 px-4">
        <div className="w-full max-w-[400px]">
          <h1 className="text-[26px] font-bold text-foreground mb-6">Sign in to Coinbase</h1>

          <form onSubmit={e => e.preventDefault()} className="space-y-3">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-2 border-primary bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary transition-colors"
                data-testid="input-signin-email"
                autoFocus
              />
            </div>

            {/* Continue */}
            <button
              type="submit"
              className="w-full h-12 bg-[#6b8eff] hover:bg-[#5a7dee] text-white font-semibold text-sm rounded-full transition-colors"
              data-testid="button-signin-continue"
            >
              Continue
            </button>
          </form>

          {/* OR */}
          <p className="text-center text-xs text-muted-foreground my-4">OR</p>

          {/* Social buttons */}
          <div className="space-y-2">
            <button
              className="w-full h-12 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-foreground flex items-center justify-center gap-3 transition-colors"
              data-testid="button-signin-passkey"
            >
              <PasskeyIcon />
              Sign In with passkey
            </button>

            <button
              className="w-full h-12 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-foreground flex items-center justify-center gap-3 transition-colors"
              data-testid="button-signin-google"
            >
              <GoogleIcon />
              Sign In with Google
            </button>

            <button
              className="w-full h-12 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-foreground flex items-center justify-center gap-3 transition-colors"
              data-testid="button-signin-apple"
            >
              <AppleIcon />
              Sign In with Apple
            </button>
          </div>

          {/* Footer links */}
          <p className="text-center text-sm text-foreground mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>

          <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
            Not your device? Use a private window. See our{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">
              Privacy Policy
            </a>{" "}
            for more info.
          </p>
        </div>
      </main>
    </div>
  );
}
