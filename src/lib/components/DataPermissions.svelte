<script lang="ts">
  const permissions = [
    {
      title: "Campaign Performance",
      description:
        "Access to ad campaign metrics including impressions, clicks, conversions, and spend data.",
      iconPaths: [
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      ],
    },
    {
      title: "Audience Insights",
      description:
        "Demographic and behavioral data about your audience segments for targeting optimization.",
      iconPaths: [
        "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      ],
    },
    {
      title: "Creative Assets",
      description:
        "Read access to ad creatives and videos for performance analysis and A/B testing insights.",
      iconPaths: [
        "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      ],
    },
    {
      title: "Pixel & Events",
      description:
        "Conversion tracking pixel data and event logs for attribution modeling and ROAS optimization.",
      iconPaths: ["M13 10V3L4 14h7v7l9-11h-7z"],
    },
    {
      title: "Ad Account Management",
      description:
        "Manage campaign budgets, bidding strategies, and ad group configurations on your behalf.",
      iconPaths: [
        "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
        "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      ],
    },
    {
      title: "Reporting & Analytics",
      description:
        "Generate custom reports and export historical data for cross-platform analysis.",
      iconPaths: [
        "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      ],
    },
  ];
</script>

<section id="features" class="py-24 px-6">
  <div class="mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        Data You'll Share
      </h2>
      <p class="mx-auto max-w-2xl text-muted">
        When you connect your TikTok account, you grant our agency access to the
        following data. You can revoke access at any time.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each permissions as perm}
        <div class="card p-6">
          <div
            class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lp-orange/10 text-lp-orange"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {#each perm.iconPaths as d}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  {d}
                />
              {/each}
            </svg>
          </div>
          <h3 class="mb-2 text-lg font-semibold">{perm.title}</h3>
          <p class="text-sm leading-relaxed text-muted">{perm.description}</p>
        </div>
      {/each}
    </div>

    <div
      class="mt-10 rounded-2xl border border-lp-orange/20 bg-lp-orange/5 p-6 text-center"
    >
      <p class="text-sm text-lp-orange">
        <strong>Your data is protected.</strong> We use read-only access by default.
        Management permissions require explicit approval. You retain full control
        and can disconnect at any time from your TikTok Business Center.
      </p>
    </div>
  </div>
</section>
