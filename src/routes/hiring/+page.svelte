<script>
  import { onMount } from 'svelte';
</script>

<svelte:head>
  <title>We're Hiring - AstralRC Agency</title>
  <meta name="description" content="Join our team of AI experts and help businesses transform with cutting-edge technology" />
</svelte:head>

<main class="pt-24 bg-white">
  <!-- Hero Section -->
  <div class="bg-gradient-to-b from-purple-50 to-white">
    <div class="max-w-7xl mx-auto px-4 py-20">
      <h1 class="text-5xl font-bold text-center mb-8">
        Join Our Team of<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
          AI Innovators
        </span>
      </h1>
      <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        We're looking for passionate individuals who want to shape the future of business through AI innovation.
      </p>
    </div>
  </div>

  <!-- Why Join Us -->
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16">Why Join AstralRC?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Innovation First</h3>
          <p class="text-gray-600">Work with cutting-edge AI technologies and shape the future of business.</p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Growth & Development</h3>
          <p class="text-gray-600">Continuous learning opportunities and career advancement paths.</p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Amazing Team</h3>
          <p class="text-gray-600">Work with talented professionals in a collaborative environment.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Open Positions -->
  <div class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16">Open Positions</h2>
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold">AI Solutions Architect</h3>
              <p class="text-gray-600">Full-time · Remote</p>
            </div>
            <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>
          <p class="text-gray-600">Design and implement AI solutions for our clients, working with cutting-edge technologies.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold">AI Implementation Specialist</h3>
              <p class="text-gray-600">Full-time · Hybrid</p>
            </div>
            <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>
          <p class="text-gray-600">Help businesses integrate and optimize AI solutions in their workflows.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold">Business AI Consultant</h3>
              <p class="text-gray-600">Full-time · Remote</p>
            </div>
            <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>
          <p class="text-gray-600">Analyze client needs and develop strategies for AI implementation.</p>
        </div>
      </div>
    </div>
  </div>
</main> 