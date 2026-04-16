<script lang="ts">
  import TikTokIcon from "./TikTokIcon.svelte";

  function buildTikTokAuthUrl(): string | null {
    const appId = localStorage.getItem("tiktok_app_id");
    if (!appId) return null;

    const redirectUri =
      localStorage.getItem("tiktok_redirect_uri") ||
      `${window.location.origin}/callback`;

    const state = crypto.randomUUID();
    sessionStorage.setItem("tiktok_oauth_state", state);

    const authUrl = new URL("https://business-api.tiktok.com/portal/auth");
    authUrl.searchParams.set("app_id", appId);
    authUrl.searchParams.set("state", state);
    authUrl.searchParams.set("redirect_uri", redirectUri);
    authUrl.searchParams.set("rid", crypto.randomUUID());

    return authUrl.toString();
  }

  function handleConnect() {
    const url = buildTikTokAuthUrl();
    if (!url) {
      document
        .getElementById("api-keys")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.href = url;
  }
</script>

<section
  id="connect"
  class="lp-ambient relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-6 pt-28 pb-16"
>
  <div class="relative z-10 mx-auto max-w-5xl text-center">
    <!-- LooksMaxxing pill badge -->
    <div
      class="lp-badge mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
    >
      <span class="h-2 w-2 rounded-full bg-lp-orange"></span>
      LooksMaxxing TikTok Shop
    </div>

    <h1
      class="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
    >
      Join The #1 Best Looking
      <br />
      <span class="text-lp-orange">TikTok Shop Community</span>
    </h1>

    <p
      class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
    >
      Science says people who make a S*!t Load of money look better…<br />
      Trust the science Bro!
    </p>

    <div
      class="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
    >
      <button
        onclick={handleConnect}
        class="btn-primary animate-pulse-glow flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold"
      >
        <TikTokIcon class="w-5 h-5" />
        Connect TikTok Account
      </button>
      <a
        href="#setup"
        class="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
      >
        View Setup Steps
        <svg
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>

    <!-- Phone mockup -->
    <div class="relative mx-auto max-w-xs animate-float">
      <div
        class="relative rounded-[3rem] border-[10px] border-black bg-black p-2 shadow-2xl shadow-lp-orange/20"
      >
        <div
          class="relative aspect-[9/19] overflow-hidden rounded-[2.2rem] bg-black"
        >
          <!-- Status bar -->
          <div
            class="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-white"
          >
            <span>9:41</span>
            <span class="flex items-center gap-1">
              <!-- signal -->
              <svg class="h-3 w-3" viewBox="0 0 16 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="0.5" />
                <rect x="4" y="6" width="3" height="6" rx="0.5" />
                <rect x="8" y="3" width="3" height="9" rx="0.5" />
                <rect x="12" y="0" width="3" height="12" rx="0.5" />
              </svg>
              <!-- wifi -->
              <svg
                class="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12.55a11 11 0 0 1 14 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" fill="currentColor" />
              </svg>
              <!-- battery -->
              <svg class="h-3 w-5" viewBox="0 0 24 12" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="20"
                  height="10"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="1"
                />
                <rect x="3" y="3" width="16" height="6" rx="1" fill="currentColor" />
                <rect x="22" y="4" width="1.5" height="4" rx="0.5" fill="currentColor" />
              </svg>
            </span>
          </div>

          <!-- Content -->
          <div class="relative flex h-full flex-col px-4 pt-6">
            <div class="flex items-center gap-2">
              <span
                class="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
              >
                #Community
              </span>
              <span
                class="rounded-full bg-lp-orange px-3 py-1 text-xs font-bold text-white shadow-lg shadow-lp-orange/50"
              >
                LIVE
              </span>
            </div>

            <!-- Huge LP letter mark -->
            <div
              class="pointer-events-none absolute inset-x-0 top-24 flex items-center justify-center opacity-90"
            >
              <svg
                viewBox="0 0 200 200"
                class="h-64 w-64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grain"
                    patternUnits="userSpaceOnUse"
                    width="3"
                    height="3"
                  >
                    <rect width="3" height="3" fill="#ff6b1a" />
                    <circle cx="1" cy="1" r="0.6" fill="#000" opacity="0.35" />
                  </pattern>
                </defs>
                <path
                  d="M40 170 C 40 90, 60 40, 110 40 C 150 40, 170 75, 170 110 C 170 145, 140 170, 105 170 C 85 170, 65 165, 45 158"
                  stroke="url(#grain)"
                  stroke-width="28"
                  stroke-linecap="round"
                  fill="none"
                />
                <path
                  d="M100 100 L 100 175"
                  stroke="url(#grain)"
                  stroke-width="28"
                  stroke-linecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <!-- Notch -->
          <div
            class="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>
