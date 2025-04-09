<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    // Check if form was submitted using sessionStorage
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    if (!formSubmitted) {
      goto('/apply');
    } else {
      // Clear the submission status after checking
      sessionStorage.removeItem('formSubmitted');
    }
  });
</script>

<svelte:head>
  <title>Thank You - AstralRC Agency</title>
  <meta name="description" content="Thank you for applying to work with AstralRC Agency" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white pt-24">
  <div class="max-w-3xl mx-auto px-4 py-12">
    <div class="text-center mb-12">
      <!-- Success Icon -->
      <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 class="text-4xl font-bold mb-4">
        Thank You for Your Application!
      </h1>
      
      <p class="text-xl text-gray-600 mb-8">
        We've received your information and we're excited to explore how we can help your business grow with AI.
      </p>

      <!-- Next Steps -->
      <div class="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <h2 class="text-2xl font-bold mb-6">Next Steps</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 font-bold">1</span>
            </div>
            <h3 class="font-bold mb-2">Review</h3>
            <p class="text-gray-600">Our team will review your application within 24 hours</p>
          </div>

          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 font-bold">2</span>
            </div>
            <h3 class="font-bold mb-2">Contact</h3>
            <p class="text-gray-600">We'll reach out to schedule an initial consultation</p>
          </div>

          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 font-bold">3</span>
            </div>
            <h3 class="font-bold mb-2">Plan</h3>
            <p class="text-gray-600">We'll create a customized AI implementation plan</p>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="text-center">
        <p class="text-gray-600 mb-4">
          If you have any questions, feel free to contact us:
        </p>
        <p class="text-purple-600 font-bold">support@astralrc.com</p>
      </div>

      <!-- Return Home Button -->
      <div class="mt-12">
        <a
          href="/"
          class="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105 duration-200"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  </div>
</main> 