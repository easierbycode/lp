"use client";

import { useEffect, useState } from "react";

export default function ApiKeysSection() {
  const [appId, setAppId] = useState("");
  const [appSecret, setAppSecret] = useState("");
  const [redirectUri, setRedirectUri] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setAppId(localStorage.getItem("tiktok_app_id") || "");
    setAppSecret(localStorage.getItem("tiktok_app_secret") || "");
    setRedirectUri(
      localStorage.getItem("tiktok_redirect_uri") ||
        `${window.location.origin}/callback`
    );
  }, []);

  const handleSave = () => {
    if (!appId) return;
    localStorage.setItem("tiktok_app_id", appId);
    localStorage.setItem("tiktok_app_secret", appSecret);
    localStorage.setItem("tiktok_redirect_uri", redirectUri);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section id="api-keys" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            API Keys Configuration
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Enter your TikTok Marketing API credentials below. These are stored
            locally in your browser and used to initiate the OAuth connection.
          </p>
        </div>

        <div className="card p-8">
          {/* App ID */}
          <div className="mb-6">
            <label
              htmlFor="app-id"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              App ID
            </label>
            <input
              id="app-id"
              type="text"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              placeholder="Enter your TikTok App ID"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-tiktok-red focus:outline-none focus:ring-1 focus:ring-tiktok-red"
            />
            <p className="mt-1.5 text-xs text-muted">
              Found in your TikTok for Developers dashboard under My Apps.
            </p>
          </div>

          {/* App Secret */}
          <div className="mb-6">
            <label
              htmlFor="app-secret"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              App Secret
            </label>
            <div className="relative">
              <input
                id="app-secret"
                type={showSecret ? "text" : "password"}
                value={appSecret}
                onChange={(e) => setAppSecret(e.target.value)}
                placeholder="Enter your TikTok App Secret"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted/50 focus:border-tiktok-red focus:outline-none focus:ring-1 focus:ring-tiktok-red"
              />
              <button
                type="button"
                onClick={() => setShowSecret(!showSecret)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
              >
                {showSecret ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-muted">
              Used server-side for token exchange. Stored locally in your browser only.
            </p>
          </div>

          {/* Redirect URI */}
          <div className="mb-8">
            <label
              htmlFor="redirect-uri"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Redirect URI
            </label>
            <div className="flex items-center gap-2">
              <input
                id="redirect-uri"
                type="text"
                value={redirectUri}
                onChange={(e) => setRedirectUri(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted focus:border-tiktok-red focus:text-foreground focus:outline-none focus:ring-1 focus:ring-tiktok-red"
              />
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(redirectUri)}
                className="shrink-0 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                Copy
              </button>
            </div>
            <p className="mt-1.5 text-xs text-muted">
              Add this URL to your TikTok app&apos;s authorized redirect URIs.
            </p>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={!appId}
            className="connect-btn w-full rounded-xl px-6 py-3 text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            {saved ? "Saved!" : "Save API Keys"}
          </button>

          {saved && (
            <p className="mt-4 text-center text-sm text-tiktok-cyan">
              Credentials saved to your browser. You can now use the Connect
              button to start the OAuth flow.
            </p>
          )}
        </div>

        {/* Environment variables hint */}
        <div className="mt-8 card p-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Server-Side Setup
          </h3>
          <p className="mb-4 text-sm text-muted">
            For your backend server that handles the OAuth callback and token exchange,
            set these environment variables:
          </p>
          <div className="space-y-2 rounded-xl bg-background p-4 font-mono text-sm">
            <div>
              <span className="text-tiktok-cyan">TIKTOK_APP_ID</span>
              <span className="text-muted">=your_app_id</span>
            </div>
            <div>
              <span className="text-tiktok-cyan">TIKTOK_APP_SECRET</span>
              <span className="text-muted">=your_app_secret</span>
            </div>
            <div>
              <span className="text-tiktok-cyan">TIKTOK_REDIRECT_URI</span>
              <span className="text-muted">=https://yourdomain.com/callback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
