<script lang="ts">
  import { onMount } from "svelte";

  let visible = $state(false);

  onMount(() => {
    visible = !localStorage.getItem("lp_cookie_consent");
  });

  function accept(choice: "essential" | "all") {
    localStorage.setItem("lp_cookie_consent", choice);
    visible = false;
  }
</script>

{#if visible}
  <div
    class="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-surface/95 p-5 shadow-2xl backdrop-blur-xl md:inset-x-0"
    role="dialog"
    aria-label="Cookie consent"
  >
    <div class="flex items-start gap-4">
      <div
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lp-orange/10 text-lp-orange"
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21.6 11.2a9 9 0 1 1-8.8-8.7 4 4 0 0 0 4 4 4 4 0 0 0 4 4 4 4 0 0 0 .8.7z"
          />
          <circle cx="9" cy="10" r="0.6" fill="currentColor" />
          <circle cx="14" cy="8" r="0.6" fill="currentColor" />
          <circle cx="15" cy="14" r="0.6" fill="currentColor" />
          <circle cx="10" cy="16" r="0.6" fill="currentColor" />
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm leading-relaxed text-muted">
          We use essential cookies for authentication, security, and affiliate
          attribution (to fairly compensate creators who refer you). We also use
          optional analytics cookies to improve your experience.
        </p>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onclick={() => accept("essential")}
            class="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            Essential Only
          </button>
          <button
            type="button"
            onclick={() => accept("all")}
            class="btn-navy rounded-full px-5 py-2 text-sm font-medium"
          >
            Accept All
          </button>
          <a
            href="/"
            class="text-sm font-medium text-lp-orange transition-colors hover:text-lp-orange-bright"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}
