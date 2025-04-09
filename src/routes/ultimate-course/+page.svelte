<script lang="ts">
  import { onMount } from 'svelte';

  interface Module {
    id: number;
    title: string;
    description: string;
    duration: string;
    topics: string[];
    icon: string;
  }

  const modules: Module[] = [
    {
      id: 1,
      title: "Foundations of Unreal Engine 5",
      description: "Master the core concepts and workflow of UE5, including navigation, asset management, and basic scene creation.",
      duration: "4 weeks",
      topics: [
        "UE5 Interface & Workflow",
        "Blueprint Visual Scripting",
        "Level Design Basics",
        "Material System Introduction"
      ],
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      id: 2,
      title: "Advanced Game Development",
      description: "Deep dive into game mechanics, AI systems, and advanced Blueprint programming for interactive experiences.",
      duration: "6 weeks",
      topics: [
        "Advanced Blueprint Systems",
        "Game Mechanics Implementation",
        "AI & Behavior Trees",
        "Multiplayer Fundamentals"
      ],
      icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    },
    {
      id: 3,
      title: "Virtual Production & Cinematics",
      description: "Learn industry-standard virtual production techniques and create cinematic sequences.",
      duration: "5 weeks",
      topics: [
        "Virtual Camera Systems",
        "LED Wall Integration",
        "Sequencer Mastery",
        "Real-time Cinematography"
      ],
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    },
    {
      id: 4,
      title: "Advanced Visual Effects",
      description: "Create stunning visual effects using Niagara, ray tracing, and advanced material systems.",
      duration: "4 weeks",
      topics: [
        "Niagara Particle Systems",
        "Ray Traced Effects",
        "Advanced Materials",
        "Post-Process Effects"
      ],
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    }
  ];

  let activeTab = 'curriculum';
</script>

<svelte:head>
  <title>Ultimate Unreal Engine Course - AstralRC</title>
  <meta name="description" content="Master game development and virtual production with our comprehensive Unreal Engine 5 course." />
</svelte:head>

<style>
  .hero-gradient {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 25, 0.95) 100%);
  }

  .module-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .module-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(64, 233, 233, 0.25);
  }

  .tab-button {
    transition: all 0.3s ease;
  }

  .tab-button.active {
    background: linear-gradient(135deg, rgba(64, 233, 233, 0.1) 0%, rgba(64, 233, 233, 0.05) 100%);
    border-color: rgba(64, 233, 233, 0.4);
  }
</style>

<main class="min-h-screen bg-black">
  <!-- Hero Section -->
  <section class="relative py-24 overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,233,233,0.1),transparent_50%)]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <span class="text-[#40E9E9] font-mono text-sm tracking-wider mb-4 opacity-90 inline-flex items-center justify-center">
          <span class="inline-block w-12 h-[1px] bg-[#40E9E9] mr-4"></span>
          COMPREHENSIVE PROGRAM
          <span class="inline-block w-12 h-[1px] bg-[#40E9E9] ml-4"></span>
        </span>
        <h1 class="text-5xl md:text-6xl font-black mb-6 text-white">
          Master Unreal Engine 5
          <span class="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">
            From Zero to Professional
          </span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          A comprehensive 6-month program covering game development, virtual production, and visual effects. Build a professional portfolio with real-world projects.
        </p>
        <div class="flex justify-center gap-6">
          <a href="/apply" 
             class="inline-flex items-center bg-[#40E9E9] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#40E9E9]/90 transition-all transform hover:scale-105 duration-200 shadow-[0_0_30px_rgba(64,233,233,0.3)]">
            Apply Now
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <button class="inline-flex items-center bg-white/5 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white/10 transition-all border border-[#40E9E9]/20 backdrop-blur-sm">
            Download Syllabus
          </button>
        </div>
      </div>

      <!-- Course Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#40E9E9]/20">
          <div class="text-3xl font-bold text-[#40E9E9] mb-2">6</div>
          <div class="text-gray-400">Months Duration</div>
        </div>
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#40E9E9]/20">
          <div class="text-3xl font-bold text-[#40E9E9] mb-2">19</div>
          <div class="text-gray-400">Modules</div>
        </div>
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#40E9E9]/20">
          <div class="text-3xl font-bold text-[#40E9E9] mb-2">12</div>
          <div class="text-gray-400">Projects</div>
        </div>
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#40E9E9]/20">
          <div class="text-3xl font-bold text-[#40E9E9] mb-2">24/7</div>
          <div class="text-gray-400">Support</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Course Content -->
  <section class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Navigation Tabs -->
      <div class="flex justify-center gap-4 mb-16">
        <button 
          class="tab-button px-6 py-3 rounded-lg text-lg font-medium {activeTab === 'curriculum' ? 'active text-[#40E9E9]' : 'text-gray-400'}"
          on:click={() => activeTab = 'curriculum'}>
          Curriculum
        </button>
        <button 
          class="tab-button px-6 py-3 rounded-lg text-lg font-medium {activeTab === 'projects' ? 'active text-[#40E9E9]' : 'text-gray-400'}"
          on:click={() => activeTab = 'projects'}>
          Projects
        </button>
        <button 
          class="tab-button px-6 py-3 rounded-lg text-lg font-medium {activeTab === 'mentorship' ? 'active text-[#40E9E9]' : 'text-gray-400'}"
          on:click={() => activeTab = 'mentorship'}>
          Mentorship
        </button>
      </div>

      <!-- Curriculum Tab -->
      {#if activeTab === 'curriculum'}
        <div class="grid md:grid-cols-2 gap-8">
          {#each modules as module}
            <div class="module-card bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#40E9E9]/20">
              <div class="w-12 h-12 bg-[#40E9E9]/10 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={module.icon} />
                </svg>
              </div>
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold text-white">{module.title}</h3>
                <span class="text-[#40E9E9] text-sm font-medium">{module.duration}</span>
              </div>
              <p class="text-gray-400 mb-6">{module.description}</p>
              <div class="space-y-3">
                {#each module.topics as topic}
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-300">{topic}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}

      <!-- Projects Tab -->
      {#if activeTab === 'projects'}
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4">Build Your Professional Portfolio</h3>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Complete 12 industry-standard projects that demonstrate your mastery of game development and virtual production.
          </p>
        </div>
        <!-- Project list will go here -->
      {/if}

      <!-- Mentorship Tab -->
      {#if activeTab === 'mentorship'}
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4">Learn from Industry Experts</h3>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Get personalized guidance from professionals working at top game studios and production houses.
          </p>
        </div>
        <!-- Mentorship details will go here -->
      {/if}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24 bg-black relative">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,233,233,0.1),transparent_50%)]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-[#40E9E9]/20 text-center">
        <h2 class="text-4xl font-bold mb-6 text-white">
          Start Your Journey to Becoming a
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">Professional Creator</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Join our next cohort and master the skills needed for the future of game development and virtual production.
        </p>
        <div class="flex justify-center gap-6">
          <a href="/apply" 
             class="inline-flex items-center bg-[#40E9E9] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#40E9E9]/90 transition-all transform hover:scale-105 duration-200 shadow-[0_0_30px_rgba(64,233,233,0.3)]">
            Apply Now
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <button class="inline-flex items-center bg-white/5 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white/10 transition-all border border-[#40E9E9]/20 backdrop-blur-sm">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
</main> 