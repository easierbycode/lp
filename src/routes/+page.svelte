<script>
  import Header from "$lib/components/Header.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import DataPermissions from "$lib/components/DataPermissions.svelte";
  import SetupSteps from "$lib/components/SetupSteps.svelte";
  import ApiKeysSection from "$lib/components/ApiKeysSection.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import CookieBanner from "$lib/components/CookieBanner.svelte";
</script>

<Header />
<main class="flex-1">
  <HeroSection />
  <DataPermissions />
  <SetupSteps />
  <ApiKeysSection />
</main>
<Footer />
<CookieBanner />
