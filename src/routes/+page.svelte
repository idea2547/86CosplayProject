<script lang="ts">
  import { onMount } from 'svelte';

  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    steamUrl: string;
    student: {
      name: string;
      avatar: string;
      graduationYear: number;
    };
    stats: {
      downloads: number;
      rating: number;
      reviews: number;
    };
    featured: boolean;
    category: string;
  }

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'games', name: 'Games' },
    { id: 'film', name: 'Film & Animation' },
    { id: 'vfx', name: 'Visual Effects' },
  ];

  const projects = [
    {
      id: 1,
      title: "Stellar Quest",
      description: "A space exploration RPG featuring dynamic combat and procedurally generated worlds.",
      image: "/portfolio/stellar-quest.jpg",
      tags: ["Lumen Lighting", "Procedural Generation", "Combat System"],
      steamUrl: "https://store.steampowered.com/stellar-quest",
      student: {
        name: "Alex Chen",
        avatar: "/students/alex.jpg",
        graduationYear: 2023
      },
      stats: {
        downloads: 25000,
        rating: 4.8,
        reviews: 450
      },
      featured: true,
      category: "games"
    },
    {
      id: 2,
      title: "The Last Journey",
      description: "An emotional short film created entirely in Unreal Engine 5, showcasing next-gen virtual production.",
      image: "/portfolio/last-journey.jpg",
      tags: ["Virtual Production", "MetaHumans", "Ray Tracing"],
      steamUrl: "https://vimeo.com/last-journey",
      student: {
        name: "Sarah Johnson",
        avatar: "/students/sarah.jpg",
        graduationYear: 2023
      },
      stats: {
        downloads: 18000,
        rating: 4.6,
        reviews: 320
      },
      featured: true,
      category: "film"
    },
    {
      id: 3,
      title: "Dragon Realm",
      description: "An open-world adventure featuring dynamic weather and realistic environments.",
      image: "/portfolio/dragon-realm.jpg",
      tags: ["Nanite", "World Building", "Physics System"],
      steamUrl: "https://store.steampowered.com/dragon-realm",
      student: {
        name: "Michael Park",
        avatar: "/students/michael.jpg",
        graduationYear: 2023
      },
      stats: {
        downloads: 22000,
        rating: 4.7,
        reviews: 380
      },
      featured: true,
      category: "games"
    },
    {
      id: 4,
      title: "Neon City VFX",
      description: "A stunning VFX reel showcasing advanced particle systems and environmental effects.",
      image: "/portfolio/neon-city.jpg",
      tags: ["Niagara VFX", "Volumetrics", "Sequencer"],
      steamUrl: "https://vimeo.com/neon-city",
      student: {
        name: "Emily Zhang",
        avatar: "/students/emily.jpg",
        graduationYear: 2023
      },
      stats: {
        downloads: 15000,
        rating: 4.9,
        reviews: 280
      },
      featured: true,
      category: "vfx"
    }
  ];

  let selectedCategory = 'all';
  let isLoading = false;
  let visibleCount = 6;

  $: filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  $: displayedProjects = filteredProjects.slice(0, visibleCount);

  let isMenuOpen = false;
  let isScrolled = false;

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Handle mobile menu
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Handle scroll events
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function selectCategory(categoryId: string) {
    selectedCategory = categoryId;
    visibleCount = 6;
  }

  async function loadMore() {
    isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
    visibleCount += 6;
    isLoading = false;
  }
</script>

<svelte:head>
  <title>AstralRC - Master Unreal Engine 5 Game Development</title>
  <meta name="description" content="Learn Unreal Engine 5 through hands-on projects. Create AAA-quality games with our project-based curriculum and supportive community." />
</svelte:head>

<style>
  .hero-gradient {
    background: linear-gradient(135deg, rgba(20, 20, 25, 0.95) 0%, rgba(128, 0, 0, 0.95) 100%);
  }
  
  .project-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(128, 0, 0, 0.25);
  }

  .project-image {
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-card:hover .project-image {
    transform: scale(1.1);
  }

  .gradient-text {
    background: linear-gradient(135deg, #800000 0%, #FF4040 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .feature-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .feature-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .nav-86 {
    font-family: 'Arial', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .nav-86 a {
    position: relative;
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .nav-86 a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #800000;
    transition: width 0.3s ease;
  }

  .nav-86 a:hover::after {
    width: 80%;
  }
</style>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-20">
      <div class="flex items-center">
        <img src="/logo-86.png" alt="86 Cosplay Project" class="h-12 w-auto" />
      </div>
      
      <div class="hidden md:flex nav-86 space-x-8">
        <a href="/news">NEWS</a>
        <a href="/characters">CHARACTERS</a>
        <a href="/gallery">GALLERY</a>
        <a href="/events">EVENTS</a>
        <a href="/community">COMMUNITY</a>
      </div>

      <button class="md:hidden" on:click={toggleMenu}>
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"/>
        </svg>
      </button>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<main class="relative min-h-screen bg-black">
  <div class="absolute inset-0 bg-gradient-to-b from-red-900/5 via-black to-black mix-blend-multiply"></div>
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.1),transparent_50%)]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 pt-32 pb-20 relative z-10">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div class="inline-block">
          <span class="text-red-600 font-mono text-sm tracking-wider mb-4 opacity-90 flex items-center">
            <span class="inline-block w-12 h-[1px] bg-red-600 mr-4"></span>
            86 COSPLAY PROJECT
          </span>
        </div>
        <h1 class="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white">
          Join the
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-500 block mt-2">
            86 Squadron
          </span>
        </h1>
        
        <p class="text-xl mb-8 text-gray-400 max-w-xl leading-relaxed">
          Bring the world of 86 EIGHTY-SIX to life through detailed cosplay, props, and community events. Share your passion for the series with fellow fans.
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a href="/join" 
            class="group inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-all transform hover:scale-105 duration-200 shadow-[0_0_30px_rgba(128,0,0,0.3)]">
            Join Now
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#gallery" 
            class="inline-flex items-center bg-white/5 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white/10 transition-all border border-red-800/20 backdrop-blur-sm">
            View Gallery
          </a>
        </div>

        <div class="flex flex-wrap gap-6">
          <div class="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-800/20">
            <span class="text-red-500 font-semibold">Latest Event</span>
            <span class="text-gray-400">86 Cosplay Gathering 2024</span>
          </div>
        </div>
      </div>

      <div class="relative">
        <img 
          src="/hero-image.jpg" 
          alt="86 EIGHTY-SIX Cosplay" 
          class="rounded-lg shadow-2xl shadow-red-900/20 w-full"
        />
        <div class="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
          <p class="text-white font-mono">Join our growing community of</p>
          <p class="text-red-500 text-2xl font-bold">1,000+ Members</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Platform Features -->
  <div class="relative bg-gray-900 py-24">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12">
        <div>
          <h2 class="text-4xl font-bold mb-6 text-white">Master Next-Gen Creation Tools</h2>
          <p class="text-gray-400">Learn industry-standard tools used in AAA games and Hollywood productions.</p>
        </div>
        <div class="md:col-span-2 grid sm:grid-cols-2 gap-8">
          <div class="feature-card bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all">
            <div class="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">Virtual Production</h3>
            <p class="text-gray-400">Master LED wall virtual production, real-time cinematography, and in-camera VFX.</p>
          </div>
          <div class="feature-card bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all">
            <div class="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">Cinematic VFX</h3>
            <p class="text-gray-400">Create stunning visual effects using Niagara, ray tracing, and advanced materials.</p>
          </div>
          <div class="feature-card bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all">
            <div class="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">Digital Humans</h3>
            <p class="text-gray-400">Create photorealistic characters with MetaHuman and advanced animation systems.</p>
          </div>
          <div class="feature-card bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all">
            <div class="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">Interactive Storytelling</h3>
            <p class="text-gray-400">Blend cinematic storytelling with engaging gameplay mechanics.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolio Section -->
  <section id="showcase" class="py-24 bg-black relative">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,233,233,0.05),transparent_50%)]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Creator
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">Hall of Fame</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover amazing projects created by our students using Unreal Engine 5.
        </p>
      </div>

      <div class="flex justify-center gap-4 mb-12 flex-wrap">
        {#each categories as category}
          <button
            class="px-6 py-2 rounded-full text-lg font-medium transition-all
            {selectedCategory === category.id
              ? 'bg-[#40E9E9] text-black'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-[#40E9E9]/20'}"
            on:click={() => selectCategory(category.id)}
          >
            {category.name}
          </button>
        {/each}
      </div>

      {#if visibleCount}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each displayedProjects as project}
            <div class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/50 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all"></div>
              <div class="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#40E9E9]/20 group-hover:border-[#40E9E9]/40 transition-all">
                <img src={project.image} alt={project.title} class="w-full aspect-video object-cover" />
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <img src={project.student.avatar} alt={project.student.name} class="w-10 h-10 rounded-full" />
                    <div>
                      <h4 class="text-white font-medium">{project.student.name}</h4>
                      <p class="text-gray-400 text-sm">{project.title}</p>
                    </div>
                  </div>
                  <h3 class="text-xl font-bold mb-2 text-white group-hover:text-[#40E9E9] transition-colors">{project.title}</h3>
                  <p class="text-gray-400 mb-4">{project.description}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    {#each project.tags as tag}
                      <span class="px-3 py-1 rounded-full text-sm font-medium bg-[#40E9E9]/10 text-[#40E9E9] border border-[#40E9E9]/20">
                        {tag}
                      </span>
                    {/each}
                  </div>
                  <div class="flex items-center justify-between text-sm text-gray-400">
                    <div class="flex items-center gap-4">
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {project.stats.downloads}
                      </span>
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        {project.stats.rating}
                      </span>
                    </div>
                    <a href={project.steamUrl} target="_blank" rel="noopener" class="text-[#40E9E9] hover:underline">View Project →</a>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>

        {#if filteredProjects.length < displayedProjects.length}
          <div class="text-center mt-12">
            <button
              class="inline-flex items-center gap-2 bg-white/5 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white/10 transition-all border border-[#40E9E9]/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              on:click={loadMore}
              disabled={isLoading}
            >
              {#if isLoading}
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              {:else}
                Load More Projects
              {/if}
            </button>
          </div>
        {/if}
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
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Start Your
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">Creative Journey?</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Join our community of creators and build amazing games and films with Unreal Engine 5.
        </p>
        <a href="/apply" 
          class="inline-flex items-center bg-[#40E9E9] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#40E9E9]/90 transition-all transform hover:scale-105 duration-200 shadow-[0_0_30px_rgba(64,233,233,0.3)]">
          Apply Now
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</main>