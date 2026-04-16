<script lang="ts">
  let expandedStep: number | null = $state(null);

  const steps = [
    {
      number: "01",
      title: "Create a TikTok Business Account",
      description:
        "Sign up for a TikTok for Business account at ads.tiktok.com. This gives you access to TikTok Ads Manager and the Marketing API.",
      details: [
        "Go to ads.tiktok.com and click 'Create an Ad'",
        "Complete the business registration form",
        "Verify your email address and business details",
        "Set up your first ad account (required for API access)",
      ],
    },
    {
      number: "02",
      title: "Register as a Developer",
      description:
        "Apply for TikTok Marketing API access through the TikTok for Developers portal to get your App ID and Secret.",
      details: [
        "Visit developers.tiktok.com and sign in",
        "Navigate to 'My Apps' and click 'Create App'",
        "Select 'Marketing API' as the app type",
        "Fill in your app details and submit for review",
      ],
    },
    {
      number: "03",
      title: "Configure API Credentials",
      description:
        "Once approved, configure your App ID and App Secret in the section below. These credentials authenticate your API requests.",
      details: [
        "Copy your App ID from the developer portal",
        "Generate and securely store your App Secret",
        "Enter both credentials in the API Keys section below",
        "Set your authorized redirect URI to match your domain",
      ],
    },
    {
      number: "04",
      title: "Connect & Authorize",
      description:
        'Click the "Connect TikTok Account" button above. You\'ll be redirected to TikTok to authorize data sharing with our agency.',
      details: [
        "Click the Connect button at the top of this page",
        "Log in to your TikTok Business account",
        "Review the requested permissions carefully",
        "Click 'Authorize' to grant access",
      ],
    },
    {
      number: "05",
      title: "Start Sharing Data",
      description:
        "Once connected, your campaign data syncs automatically. View your dashboard for real-time analytics and optimization recommendations.",
      details: [
        "Data sync begins immediately after authorization",
        "Historical data (up to 90 days) imports within 24 hours",
        "Real-time campaign metrics update every 15 minutes",
        "Access your agency dashboard for insights and reports",
      ],
    },
  ];

  function toggleStep(index: number) {
    expandedStep = expandedStep === index ? null : index;
  }
</script>

<section id="setup" class="py-24 px-6 bg-surface/50">
  <div class="mx-auto max-w-4xl">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        Setup in 5 Steps
      </h2>
      <p class="mx-auto max-w-2xl text-muted">
        Get connected in minutes. Follow these steps to link your TikTok account
        and start sharing performance data with our agency.
      </p>
    </div>

    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8"></div>

      <div class="space-y-6">
        {#each steps as step, index}
          <div class="relative pl-16 md:pl-20">
            <!-- Step number circle -->
            <div
              class="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-lp-orange bg-background text-sm font-bold text-lp-orange md:left-2 md:h-14 md:w-14"
            >
              {step.number}
            </div>

            <button
              onclick={() => toggleStep(index)}
              class="card w-full cursor-pointer p-6 text-left"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">{step.title}</h3>
                <svg
                  class="w-5 h-5 text-muted transition-transform {expandedStep ===
                  index
                    ? 'rotate-180'
                    : ''}"
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
              </div>
              <p class="mt-2 text-sm text-muted">{step.description}</p>

              {#if expandedStep === index}
                <ul class="mt-4 space-y-2 border-t border-border pt-4">
                  {#each step.details as detail}
                    <li class="flex items-start gap-3 text-sm text-muted">
                      <svg
                        class="mt-0.5 h-4 w-4 shrink-0 text-lp-orange"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  {/each}
                </ul>
              {/if}
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
