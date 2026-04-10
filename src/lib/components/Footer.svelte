<script lang="ts">
  import TikTokIcon from "./TikTokIcon.svelte";
</script>

<footer class="border-t border-border bg-background py-12">
  <div class="mx-auto max-w-6xl px-6">
    <div
      class="flex flex-col items-center justify-between gap-6 md:flex-row"
    >
      <div class="flex items-center gap-3">
        <TikTokIcon class="w-5 h-5 text-muted" />
        <span class="text-sm text-muted">TikTok Agency Connect</span>
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
    <div class="mt-8 text-center text-xs text-muted/50">
      Built for TikTok Marketing API partners. All data shared with explicit
      user consent.
    </div>
  </div>
</footer>
