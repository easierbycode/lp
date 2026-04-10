<script lang="ts">
  import TikTokIcon from "./TikTokIcon.svelte";
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
>
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
    <div class="flex items-center gap-3">
      <TikTokIcon class="w-7 h-7 text-tiktok-red" />
      <span class="text-lg font-semibold tracking-tight">Agency Connect</span>
    </div>
    <nav class="hidden items-center gap-8 text-sm text-muted md:flex">
      <a href="#features" class="transition-colors hover:text-foreground">
        Features
      </a>
      <a href="#setup" class="transition-colors hover:text-foreground">
        Setup
      </a>
      <a href="#api-keys" class="transition-colors hover:text-foreground">
        API Keys
      </a>
    </nav>
    <a
      href="#connect"
      class="connect-btn rounded-full px-5 py-2 text-sm font-medium text-white"
    >
      Get Started
    </a>
  </div>
</header>
