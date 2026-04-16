<script lang="ts">
  import LPLogo from "./LPLogo.svelte";

  let dark = $state(true);

  function toggleTheme() {
    // Visual-only toggle — the site is dark-mode by design.
    dark = !dark;
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
>
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
    <a href="/" class="flex items-center gap-2.5">
      <LPLogo class="w-8 h-8" />
      <span class="text-lg font-bold tracking-tight">LifePreneur</span>
    </a>

    <div class="flex items-center gap-3">
      <button
        type="button"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="flex h-10 w-10 items-center justify-center rounded-full text-lp-orange transition-colors hover:bg-surface"
      >
        {#if dark}
          <!-- Moon icon -->
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        {:else}
          <!-- Sun icon -->
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
        {/if}
      </button>
      <a
        href="#connect"
        class="btn-navy rounded-full px-5 py-2 text-sm font-medium"
      >
        Login
      </a>
    </div>
  </div>
</header>
