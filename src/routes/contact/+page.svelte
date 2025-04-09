<script>
  import { onMount } from 'svelte';

  let formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  function handleSubmit() {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    formData = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
  }
</script>

<svelte:head>
  <title>Contact Us - AstralRC Agency</title>
  <meta name="description" content="Get in touch with us to learn how we can help your business save money with AI" />
</svelte:head>

<main class="pt-24 bg-white">
  <!-- Hero Section -->
  <div class="bg-gradient-to-b from-purple-50 to-white">
    <div class="max-w-7xl mx-auto px-4 py-20">
      <h1 class="text-5xl font-bold text-center mb-8">
        Let's Talk About Your<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
          AI Journey
        </span>
      </h1>
      <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Ready to transform your business with AI? Get in touch with our team of experts.
      </p>
    </div>
  </div>

  <!-- Contact Form Section -->
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-16">
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-1">Email</h3>
                <p class="text-gray-600">contact@astralrc.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-1">Phone</h3>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-1">Location</h3>
                <p class="text-gray-600">123 AI Street<br />Tech Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h2 class="text-3xl font-bold mb-8">Send Us a Message</h2>
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                id="company"
                bind:value={formData.company}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                bind:value={formData.message}
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</main> 