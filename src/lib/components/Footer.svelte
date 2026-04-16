<script lang="ts">
  import LPLogo from "./LPLogo.svelte";
</script>

<footer class="border-t border-border bg-background py-12">
  <div class="mx-auto max-w-6xl px-6">
    <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div class="flex items-center gap-2.5">
        <LPLogo class="w-6 h-6" />
        <span class="text-sm font-semibold">LifePreneur</span>
      </div>
      <div class="flex items-center gap-6 text-sm text-muted">
        <a href="/" class="transition-colors hover:text-foreground">
          Privacy Policy
        </a>
        <a href="/" class="transition-colors hover:text-foreground">
          Terms of Service
        </a>
        <a href="/" class="transition-colors hover:text-foreground">
          Documentation
        </a>
      </div>
    </div>
    <div class="mt-8 text-center text-xs text-muted/60">
      © LifePreneur. Built for TikTok Shop affiliates. All data shared with
      explicit user consent.
    </div>
  </div>
</footer>
