<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    experience?: string;
    portfolio?: string;
    country?: string;
  }

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    country: '',
    programmingSkills: '',
    gameEngineExperience: '',
    learningGoals: ''
  };

  let isSubmitting = false;
  let showSuccess = false;
  let errors: FormErrors = {};

  function validateForm() {
    errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.experience) errors.experience = 'Please select your experience level';
    if (!formData.country) errors.country = 'Please select your country';
    
    return Object.keys(errors).length === 0;
  }

  async function submitToGoogleSheets() {
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby1eqiSZlTrCSocWnameikZ_RuaWeywblaMowWzMdJ1rGdo68IfbKmVPOm6UAuNGz7a/exec';
    
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...formData
        })
      });

      console.log('Form submitted successfully');
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    
    isSubmitting = true;
    showSuccess = false;
    
    try {
      const success = await submitToGoogleSheets();
      if (success) {
        showSuccess = true;
        await new Promise(resolve => setTimeout(resolve, 1000));
        sessionStorage.setItem('formSubmitted', 'true');
        window.location.href = '/apply/thank-you';
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Apply - Master Unreal Engine 5 Development</title>
  <meta name="description" content="Apply to our comprehensive game development and virtual production program using Unreal Engine 5" />
</svelte:head>

<main class="min-h-screen bg-black">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,233,233,0.1),transparent_50%)]"></div>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
    <!-- Success Message -->
    {#if showSuccess}
      <div class="fixed top-20 right-4 bg-[#40E9E9] text-black px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100 backdrop-blur-sm">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Application submitted successfully!
        </div>
      </div>
    {/if}

    <!-- Header -->
    <div class="text-center mb-12">
      <span class="text-[#40E9E9] font-mono text-sm tracking-wider mb-4 opacity-90 inline-flex items-center justify-center">
        <span class="inline-block w-12 h-[1px] bg-[#40E9E9] mr-4"></span>
        APPLICATION FORM
        <span class="inline-block w-12 h-[1px] bg-[#40E9E9] ml-4"></span>
      </span>
      <h1 class="text-4xl sm:text-5xl font-black mb-6 text-white">
        Begin Your Journey to
        <span class="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">
          Game Development Mastery
        </span>
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Join our intensive program and learn to create professional-grade games and virtual productions with Unreal Engine 5
      </p>
    </div>

    <!-- Program Highlights -->
    <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-[#40E9E9]/20">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold text-white mb-6">Why Choose Our Program?</h2>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#40E9E9]/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Industry-Standard Curriculum</h3>
                <p class="text-gray-400">Learn the latest UE5 features and workflows</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#40E9E9]/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Expert Mentorship</h3>
                <p class="text-gray-400">Learn from industry professionals</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-[#40E9E9]/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Portfolio Building</h3>
                <p class="text-gray-400">Create professional-grade projects</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#40E9E9]/20">
          <h3 class="text-2xl font-bold text-white mb-6">What You'll Master</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">Advanced Blueprint Systems</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">Real-time Rendering</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">Virtual Production</span>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">Game Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Container -->
    <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#40E9E9]/20">
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <!-- Name Fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-lg font-medium text-white mb-2">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              bind:value={formData.firstName}
              class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white placeholder-gray-400"
              class:border-red-500={errors.firstName}
              required
            />
            {#if errors.firstName}
              <p class="mt-1 text-red-400">{errors.firstName}</p>
            {/if}
          </div>

          <div>
            <label for="lastName" class="block text-lg font-medium text-white mb-2">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              bind:value={formData.lastName}
              class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white placeholder-gray-400"
              class:border-red-500={errors.lastName}
              required
            />
            {#if errors.lastName}
              <p class="mt-1 text-red-400">{errors.lastName}</p>
            {/if}
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-lg font-medium text-white mb-2">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white placeholder-gray-400"
            class:border-red-500={errors.email}
            required
          />
          {#if errors.email}
            <p class="mt-1 text-red-400">{errors.email}</p>
          {/if}
        </div>

        <!-- Phone -->
        <div>
          <label for="phone" class="block text-lg font-medium text-white mb-2">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            bind:value={formData.phone}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white placeholder-gray-400"
            class:border-red-500={errors.phone}
            required
          />
          {#if errors.phone}
            <p class="mt-1 text-red-400">{errors.phone}</p>
          {/if}
        </div>

        <!-- Experience Level -->
        <div>
          <label for="experience" class="block text-lg font-medium text-white mb-2">
            Game Development Experience*
          </label>
          <select
            id="experience"
            bind:value={formData.experience}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white appearance-none"
            class:border-red-500={errors.experience}
            required
          >
            <option value="" class="bg-gray-900">Select your experience level</option>
            <option value="beginner" class="bg-gray-900">Beginner - No experience</option>
            <option value="hobby" class="bg-gray-900">Hobby Developer - Made small games</option>
            <option value="student" class="bg-gray-900">Student - Currently studying game dev</option>
            <option value="professional" class="bg-gray-900">Professional - Working in game dev</option>
          </select>
          {#if errors.experience}
            <p class="mt-1 text-red-400">{errors.experience}</p>
          {/if}
        </div>

        <!-- Programming Skills -->
        <div>
          <label for="programmingSkills" class="block text-lg font-medium text-white mb-2">
            Programming Experience
          </label>
          <select
            id="programmingSkills"
            bind:value={formData.programmingSkills}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white appearance-none"
          >
            <option value="" class="bg-gray-900">Select your programming level</option>
            <option value="none" class="bg-gray-900">No programming experience</option>
            <option value="basic" class="bg-gray-900">Basic programming knowledge</option>
            <option value="intermediate" class="bg-gray-900">Intermediate programmer</option>
            <option value="advanced" class="bg-gray-900">Advanced programmer</option>
          </select>
        </div>

        <!-- Game Engine Experience -->
        <div>
          <label for="gameEngineExperience" class="block text-lg font-medium text-white mb-2">
            Game Engine Experience
          </label>
          <select
            id="gameEngineExperience"
            bind:value={formData.gameEngineExperience}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white appearance-none"
          >
            <option value="" class="bg-gray-900">Select your game engine experience</option>
            <option value="none" class="bg-gray-900">No game engine experience</option>
            <option value="unity" class="bg-gray-900">Unity</option>
            <option value="unreal" class="bg-gray-900">Unreal Engine</option>
            <option value="godot" class="bg-gray-900">Godot</option>
            <option value="multiple" class="bg-gray-900">Multiple engines</option>
          </select>
        </div>

        <!-- Portfolio -->
        <div>
          <label for="portfolio" class="block text-lg font-medium text-white mb-2">
            Portfolio/GitHub (Optional)
          </label>
          <input
            type="url"
            id="portfolio"
            bind:value={formData.portfolio}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white placeholder-gray-400"
            placeholder="https://your-portfolio.com"
          />
        </div>

        <!-- Country -->
        <div>
          <label for="country" class="block text-lg font-medium text-white mb-2">
            Country*
          </label>
          <select
            id="country"
            bind:value={formData.country}
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white appearance-none"
            class:border-red-500={errors.country}
            required
          >
            <option value="" class="bg-gray-900">Select your country</option>
            <option value="US" class="bg-gray-900">United States</option>
            <option value="CA" class="bg-gray-900">Canada</option>
            <option value="UK" class="bg-gray-900">United Kingdom</option>
            <option value="AU" class="bg-gray-900">Australia</option>
            <option value="TH" class="bg-gray-900">Thailand</option>
            <!-- Add more countries as needed -->
          </select>
          {#if errors.country}
            <p class="mt-1 text-red-400">{errors.country}</p>
          {/if}
        </div>

        <!-- Learning Goals -->
        <div>
          <label for="learningGoals" class="block text-lg font-medium text-white mb-2">
            What are your game development goals?
          </label>
          <textarea
            id="learningGoals"
            bind:value={formData.learningGoals}
            rows="4"
            class="w-full px-4 py-3 text-lg bg-white/10 backdrop-blur-sm border-2 border-[#40E9E9]/20 rounded-lg focus:ring-2 focus:ring-[#40E9E9] focus:border-transparent transition-all text-white placeholder-gray-400"
            placeholder="Tell us what you want to achieve with game development..."
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-[#40E9E9] text-black text-xl font-bold py-4 rounded-lg hover:bg-[#40E9E9]/90 transform hover:scale-[1.02] transition-all duration-200 shadow-[0_0_30px_rgba(64,233,233,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {#if isSubmitting}
            <span class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          {:else}
            Submit Application
          {/if}
        </button>
      </form>
    </div>
  </div>
</main>

<style>
  /* Custom select arrow */
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-position: right 1rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
  }

  /* Hide default select arrow */
  select::-ms-expand {
    display: none;
  }
</style> 