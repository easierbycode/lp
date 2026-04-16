<script lang="ts">
  import { onMount } from "svelte";

  let appId = $state("");
  let appSecret = $state("");
  let redirectUri = $state("");
  let showSecret = $state(false);
  let saved = $state(false);

  onMount(() => {
    appId = localStorage.getItem("tiktok_app_id") || "";
    appSecret = localStorage.getItem("tiktok_app_secret") || "";
    redirectUri =
      localStorage.getItem("tiktok_redirect_uri") ||
      `${window.location.origin}/callback`;
  });

  function handleSave() {
    if (!appId) return;
    localStorage.setItem("tiktok_app_id", appId);
    localStorage.setItem("tiktok_app_secret", appSecret);
    localStorage.setItem("tiktok_redirect_uri", redirectUri);
    saved = true;
    setTimeout(() => (saved = false), 3000);
  }
</script>

<section id="api-keys" class="py-24 px-6">
  <div class="mx-auto max-w-3xl">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        API Keys Configuration
      </h2>
      <p class="mx-auto max-w-2xl text-muted">
        Enter your TikTok Marketing API credentials below. These are stored
        locally in your browser and used to initiate the OAuth connection.
      </p>
    </div>

    <div class="card p-8">
      <!-- App ID -->
      <div class="mb-6">
        <label
          for="app-id"
          class="mb-2 block text-sm font-medium text-foreground"
        >
          App ID
        </label>
        <input
          id="app-id"
          type="text"
          bind:value={appId}
          placeholder="Enter your TikTok App ID"
          class="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-lp-orange focus:outline-none focus:ring-1 focus:ring-lp-orange"
        />
        <p class="mt-1.5 text-xs text-muted">
          Found in your TikTok for Developers dashboard under My Apps.
        </p>
      </div>

      <!-- App Secret -->
      <div class="mb-6">
        <label
          for="app-secret"
          class="mb-2 block text-sm font-medium text-foreground"
        >
          App Secret
        </label>
        <div class="relative">
          <input
            id="app-secret"
            type={showSecret ? "text" : "password"}
            bind:value={appSecret}
            placeholder="Enter your TikTok App Secret"
            class="w-full rounded-xl border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted/50 focus:border-lp-orange focus:outline-none focus:ring-1 focus:ring-lp-orange"
          />
          <button
            type="button"
            onclick={() => (showSecret = !showSecret)}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
          >
            {#if showSecret}
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18"
                />
              </svg>
            {:else}
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            {/if}
          </button>
        </div>
        <p class="mt-1.5 text-xs text-muted">
          Used server-side for token exchange. Stored locally in your browser
          only.
        </p>
      </div>

      <!-- Redirect URI -->
      <div class="mb-8">
        <label
          for="redirect-uri"
          class="mb-2 block text-sm font-medium text-foreground"
        >
          Redirect URI
        </label>
        <div class="flex items-center gap-2">
          <input
            id="redirect-uri"
            type="text"
            bind:value={redirectUri}
            class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted focus:border-lp-orange focus:text-foreground focus:outline-none focus:ring-1 focus:ring-lp-orange"
          />
          <button
            type="button"
            onclick={() => navigator.clipboard.writeText(redirectUri)}
            class="shrink-0 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-colors hover:text-foreground"
          >
            Copy
          </button>
        </div>
        <p class="mt-1.5 text-xs text-muted">
          Add this URL to your TikTok app's authorized redirect URIs.
        </p>
      </div>

      <!-- Save button -->
      <button
        onclick={handleSave}
        disabled={!appId}
        class="btn-primary w-full rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {saved ? "Saved!" : "Save API Keys"}
      </button>

      {#if saved}
        <p class="mt-4 text-center text-sm text-lp-orange">
          Credentials saved to your browser. You can now use the Connect button
          to start the OAuth flow.
        </p>
      {/if}
    </div>

    <!-- Environment variables hint -->
    <div class="mt-8 card p-6">
      <h3
        class="mb-3 text-sm font-semibold uppercase tracking-wider text-muted"
      >
        Server-Side Setup
      </h3>
      <p class="mb-4 text-sm text-muted">
        For your backend server that handles the OAuth callback and token
        exchange, set these environment variables:
      </p>
      <div class="space-y-2 rounded-xl bg-background p-4 font-mono text-sm">
        <div>
          <span class="text-lp-orange">TIKTOK_APP_ID</span>
          <span class="text-muted">=your_app_id</span>
        </div>
        <div>
          <span class="text-lp-orange">TIKTOK_APP_SECRET</span>
          <span class="text-muted">=your_app_secret</span>
        </div>
        <div>
          <span class="text-lp-orange">TIKTOK_REDIRECT_URI</span>
          <span class="text-muted">=https://yourdomain.com/callback</span>
        </div>
      </div>
    </div>
  </div>
</section>
