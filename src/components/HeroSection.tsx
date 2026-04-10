"use client";

import TikTokIcon from "./TikTokIcon";

export default function HeroSection() {
  return (
    <section
      id="connect"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-tiktok-red/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-tiktok-cyan/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-tiktok-cyan animate-pulse" />
          TikTok Marketing API Partner
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Connect Your
          <br />
          <span className="gradient-text">TikTok Account</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Share your campaign data with our agency to unlock powerful analytics,
          automated optimization, and real-time performance tracking.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => {
              window.location.href = "/api/tiktok/connect";
            }}
            className="connect-btn animate-pulse-glow flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white"
          >
            <TikTokIcon className="w-6 h-6" />
            Connect TikTok Account
          </button>
          <a
            href="#setup"
            className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            View Setup Steps
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-tiktok-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            OAuth 2.0 Secured
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-tiktok-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Encrypted Data
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-tiktok-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Real-time Sync
          </div>
        </div>
      </div>
    </section>
  );
}
