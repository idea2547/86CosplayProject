<script lang="ts">
  import { goto } from '$app/navigation';

  interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
  }

  const pricingTiers: PricingTier[] = [
    {
      name: "Essential",
      price: "$999",
      description: "Perfect for beginners starting their game development journey",
      features: [
        "3-month program access",
        "Core UE5 fundamentals",
        "Basic Blueprint programming",
        "Community forum access",
        "2 practice projects",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$1,999",
      description: "Comprehensive program with advanced features and mentorship",
      features: [
        "6-month program access",
        "Advanced UE5 features",
        "Advanced Blueprint & C++",
        "1-on-1 mentorship sessions",
        "5 portfolio projects",
        "Priority support",
        "Industry networking",
        "Job preparation guidance"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      description: "Full-scale training for teams and studios",
      features: [
        "12-month program access",
        "Team collaboration features",
        "Custom project guidance",
        "Weekly team mentorship",
        "Unlimited projects",
        "24/7 priority support",
        "Custom workflow setup",
        "Commercial license",
        "Virtual production training"
      ]
    }
  ];

  let selectedTier: PricingTier | null = null;

  function handleJoin(tier: PricingTier) {
    selectedTier = tier;
    goto('/apply');
  }
</script>

<svelte:head>
  <title>Join Our Program - Master Unreal Engine 5</title>
  <meta name="description" content="Choose your learning path and join our comprehensive Unreal Engine 5 development program" />
</svelte:head>

<main class="min-h-screen bg-black">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,233,233,0.1),transparent_50%)]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24 relative z-10">
    <!-- Header -->
    <div class="text-center mb-8 sm:mb-12 lg:mb-16">
      <span class="text-[#40E9E9] font-mono text-xs sm:text-sm tracking-wider mb-3 sm:mb-4 opacity-90 inline-flex items-center justify-center">
        <span class="inline-block w-8 sm:w-12 h-[1px] bg-[#40E9E9] mr-2 sm:mr-4"></span>
        PRICING & PLANS
        <span class="inline-block w-8 sm:w-12 h-[1px] bg-[#40E9E9] ml-2 sm:ml-4"></span>
      </span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-white">
        Choose Your
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">
          Learning Path
        </span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
        Select the program that best fits your goals and start your journey to becoming a professional game developer
      </p>
    </div>

    <!-- Payment Security Notice -->
    <div class="flex items-center justify-center gap-2 mb-8 sm:mb-12">
      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span class="text-sm sm:text-base text-gray-400">Secure payment processing with Stripe</span>
    </div>

    <!-- Pricing Tiers -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {#each pricingTiers as tier}
        <div class="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#40E9E9]/20 flex flex-col pricing-card"
             class:ring-2={tier.recommended}
             class:ring-[#40E9E9]={tier.recommended}>
          {#if tier.recommended}
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-[#40E9E9] text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                Recommended
              </span>
            </div>
          {/if}

          <div class="mb-6 sm:mb-8">
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">{tier.name}</h2>
            <div class="flex items-baseline text-white">
              <span class="text-3xl sm:text-4xl font-bold tracking-tight">{tier.price}</span>
              <span class="text-sm sm:text-base text-gray-400 ml-1">/one-time</span>
            </div>
            <p class="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400">{tier.description}</p>
          </div>

          <div class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
            {#each tier.features as feature}
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#40E9E9] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm sm:text-base text-gray-300">{feature}</span>
              </div>
            {/each}
          </div>

          <button
            on:click={() => handleJoin(tier)}
            class="w-full bg-[#40E9E9] text-black text-base sm:text-lg font-bold py-3 sm:py-4 rounded-lg hover:bg-[#40E9E9]/90 transform hover:scale-[1.02] transition-all duration-200 shadow-[0_0_30px_rgba(64,233,233,0.3)]"
          >
            Join Program
          </button>
        </div>
      {/each}
    </div>

    <!-- FAQ Section -->
    <div class="mt-16 sm:mt-20 lg:mt-24">
      <h2 class="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#40E9E9]/20">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">When does the program start?</h3>
          <p class="text-sm sm:text-base text-gray-400">Our programs have rolling admissions and start dates. Once enrolled, you can begin immediately.</p>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#40E9E9]/20">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Are there payment plans available?</h3>
          <p class="text-sm sm:text-base text-gray-400">Yes, we offer flexible payment plans through Stripe. Contact us for more details about financing options.</p>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#40E9E9]/20">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">What if I'm not satisfied?</h3>
          <p class="text-sm sm:text-base text-gray-400">We offer a 14-day money-back guarantee if you're not completely satisfied with the program.</p>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#40E9E9]/20">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Do I get a certificate?</h3>
          <p class="text-sm sm:text-base text-gray-400">Yes, upon completion you'll receive a verified certificate and a professional portfolio of projects.</p>
        </div>
      </div>
    </div>

    <!-- Money Back Guarantee -->
    <div class="mt-16 sm:mt-20 lg:mt-24 text-center">
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#40E9E9]/20 inline-block max-w-full sm:max-w-none">
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#40E9E9]/10 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div class="text-center sm:text-left">
            <h3 class="text-lg sm:text-xl font-bold text-white">14-Day Money-Back Guarantee</h3>
            <p class="text-sm sm:text-base text-gray-400">Try our program risk-free. If you're not satisfied, get a full refund within 14 days.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Add smooth hover effect for pricing cards */
  .pricing-card {
    transition: transform 0.3s ease-in-out;
  }
  
  .pricing-card:hover {
    transform: translateY(-5px);
  }

  /* Improve mobile touch targets */
  @media (max-width: 640px) {
    button {
      min-height: 48px;
    }
  }
</style> 