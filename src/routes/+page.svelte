<script lang="ts">
  import { onMount } from 'svelte';

  interface CosplayTeam {
    id: number;
    name: string;
    description: string;
    image: string;
    characters: string[];
    socialUrl: string;
    leader: {
      name: string;
      avatar: string;
      role: string;
    };
    stats: {
      followers: number;
      events: number;
      photoshoots: number;
    };
    featured: boolean;
    category: string;
  }

  const categories = [
    { id: 'all', name: 'All Teams' },
    { id: 'spearhead', name: 'Spearhead Squadron' },
    { id: 'nordlicht', name: 'Nordlicht Squadron' },
    { id: 'federacy', name: 'Federacy Units' },
  ];

  const teams = [
    {
      id: 1,
      name: "Spearhead Cosplay Unit",
      description: "Dedicated to bringing the Spearhead Squadron characters to life with screen-accurate costumes and props.",
      image: "/teams/spearhead-team.jpg",
      characters: ["Shinei Nouzen", "Raiden Shuga", "Theoto Rikka"],
      socialUrl: "https://instagram.com/spearhead-cosplay",
      leader: {
        name: "Shin",
        avatar: "/members/shin.jpg",
        role: "Squadron Leader"
      },
      stats: {
        followers: 2500,
        events: 12,
        photoshoots: 45
      },
      featured: true,
      category: "spearhead"
    },
    {
      id: 2,
      name: "Nordlicht Cosplay Squad",
      description: "Specializing in the Federacy era costumes and military uniforms of the 86 series.",
      image: "/teams/nordlicht-team.jpg",
      characters: ["Vladilena Milizé", "Ernst Zimmerman", "Grethe Wenzel"],
      socialUrl: "https://instagram.com/nordlicht-cosplay",
      leader: {
        name: "Lena",
        avatar: "/members/lena.jpg",
        role: "Handler One"
      },
      stats: {
        followers: 1800,
        events: 8,
        photoshoots: 32
      },
      featured: true,
      category: "nordlicht"
    }
  ];

  let selectedCategory = 'all';
  let isLoading = false;
  let visibleCount = 6;

  $: filteredTeams = selectedCategory === 'all'
    ? teams
    : teams.filter(p => p.category === selectedCategory);

  $: displayedTeams = filteredTeams.slice(0, visibleCount);

  let isMenuOpen = false;
  let isScrolled = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

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
    font-family: monospace;
  }

  .nav-86 a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: #ef4444;
    transition: width 0.3s ease;
  }

  .nav-86 a:hover::after {
    width: 80%;
  }
</style>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-500/20">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-20">
      <div class="flex items-center gap-8">
        <!-- Logo -->
        <div class="relative w-16 h-16 flex items-center">
          <span class="text-4xl font-bold text-white tracking-widest font-mono">86</span>
          <div class="absolute inset-0 border border-red-500/20 rounded"></div>
          <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500"></div>
          <div class="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500"></div>
          <div class="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500"></div>
        </div>

        <!-- Primary Navigation -->
        <div class="hidden md:flex nav-86 space-x-1">
          <a href="/overview" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">OVERVIEW</a>
          <a href="/costumes" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">COSTUMES</a>
          <a href="/props" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">PROPS</a>
          <a href="/gallery" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">GALLERY</a>
          <a href="/tutorials" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">TUTORIALS</a>
        </div>
      </div>

      <!-- Secondary Navigation -->
      <div class="hidden md:flex nav-86 space-x-1">
        <a href="/events" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">EVENTS</a>
        <a href="/community" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">COMMUNITY</a>
        <a href="/join" class="px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">JOIN</a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" on:click={toggleMenu}>
        <div class="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
          <span class="w-full h-px bg-red-500"></span>
          <span class="w-full h-px bg-red-500"></span>
          <span class="w-full h-px bg-red-500"></span>
        </div>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-black/95 border-t border-red-500/20">
      <div class="px-4 py-6 space-y-4">
        <a href="/overview" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">OVERVIEW</a>
        <a href="/costumes" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">COSTUMES</a>
        <a href="/props" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">PROPS</a>
        <a href="/gallery" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">GALLERY</a>
        <a href="/tutorials" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">TUTORIALS</a>
        <a href="/events" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">EVENTS</a>
        <a href="/community" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">COMMUNITY</a>
        <a href="/join" class="block px-4 py-2 text-sm tracking-[0.2em] hover:text-red-500 transition-colors">JOIN</a>
      </div>
    </div>
  {/if}
</nav>

<!-- Hero Section -->
<main class="relative min-h-screen bg-black">
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0">
    <img 
      src="https://images.alphacoders.com/132/thumb-1920-1320767.jpeg" 
      alt="86 EIGHTY-SIX Background" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
  </div>

  <!-- Red Target Circle Decoration -->
  <div class="absolute top-20 left-20 w-24 h-24">
    <div class="absolute w-full h-full border-2 border-red-600/30 rounded-full animate-ping"></div>
    <div class="absolute w-full h-full border border-red-600/50 rounded-full"></div>
    <div class="absolute top-1/2 left-1/2 w-2 h-2 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute top-1/2 left-0 w-full h-px bg-red-600/30"></div>
    <div class="absolute top-0 left-1/2 w-px h-full bg-red-600/30"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 pt-32 pb-20 relative z-10">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <!-- Military-style Section Label -->
        <div class="inline-block">
          <span class="text-red-500 font-mono text-sm tracking-[0.2em] mb-4 opacity-90 flex items-center">
            <span class="inline-block w-12 h-[1px] bg-red-500 mr-4"></span>
            OPERATION STATUS: ACTIVE
          </span>
        </div>

        <!-- Main Title with Military Typography -->
        <h1 class="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white font-mono">
          Join the
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 block mt-2">
            86 Cosplay Project
          </span>
        </h1>
        
        <p class="text-xl mb-8 text-gray-300 max-w-xl leading-relaxed font-mono">
          死神は、居るべき場所へと呼ばれる<br>
          <span class="text-sm text-gray-400">The Reaper is called to where they should be.</span>
        </p>

        <!-- Military-style Action Buttons -->
        <div class="flex flex-wrap gap-4 mb-12">
          <a href="/join" 
            class="group inline-flex items-center bg-red-800/80 text-white px-8 py-4 rounded border-l-4 border-red-500 font-mono text-xl tracking-wider hover:bg-red-700/80 transition-all transform hover:translate-x-1 duration-200">
            ENLIST NOW
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#gallery" 
            class="inline-flex items-center bg-black/50 text-white px-8 py-4 rounded border border-red-500/30 font-mono tracking-wider hover:bg-black/70 transition-all backdrop-blur-sm">
            VIEW INTEL
          </a>
        </div>

        <!-- Status Display -->
        <div class="flex flex-wrap gap-6">
          <div class="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded border border-red-500/30">
            <span class="text-red-500 font-mono tracking-wider">LATEST MISSION</span>
            <span class="text-gray-400 font-mono">Operation Morpho</span>
          </div>
        </div>
      </div>

      <!-- Right Side Military Stats -->
      <div class="relative hidden md:block">
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div class="relative bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 border border-red-500/20 rounded">
              <div class="text-red-500 font-mono text-2xl font-bold">86</div>
              <div class="text-gray-400 text-sm font-mono">SQUADRON ID</div>
            </div>
            <div class="text-center p-4 border border-red-500/20 rounded">
              <div class="text-red-500 font-mono text-2xl font-bold">1000+</div>
              <div class="text-gray-400 text-sm font-mono">PROCESSORS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Platform Features -->
  <!-- <div class="relative bg-gray-900 py-24">
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
  </div> -->

  <!-- Team Showcase Section -->
  <section id="teams" class="py-24 bg-black relative">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.05),transparent_50%)]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Active
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-500">Cosplay Teams</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Meet our dedicated cosplay teams bringing the world of 86 to life.
        </p>
      </div>

      <div class="flex justify-center gap-4 mb-12 flex-wrap">
        {#each categories as category}
          <button
            class="px-6 py-2 rounded-full text-lg font-medium transition-all
            {selectedCategory === category.id
              ? 'bg-red-800 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-red-800/20'}"
            on:click={() => selectCategory(category.id)}
          >
            {category.name}
          </button>
        {/each}
      </div>

      {#if visibleCount}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each displayedTeams as team}
            <div class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all"></div>
              <div class="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-red-900/20 group-hover:border-red-800/40 transition-all">
                <img src={team.image} alt={team.name} class="w-full aspect-video object-cover" />
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <img src={team.leader.avatar} alt={team.leader.name} class="w-10 h-10 rounded-full" />
                    <div>
                      <h4 class="text-white font-medium">{team.leader.name}</h4>
                      <p class="text-gray-400 text-sm">{team.leader.role}</p>
                    </div>
                  </div>
                  <h3 class="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">{team.name}</h3>
                  <p class="text-gray-400 mb-4">{team.description}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    {#each team.characters as character}
                      <span class="px-3 py-1 rounded-full text-sm font-medium bg-red-900/10 text-red-400 border border-red-900/20">
                        {character}
                      </span>
                    {/each}
                  </div>
                  <div class="flex items-center justify-between text-sm text-gray-400">
                    <div class="flex items-center gap-4">
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {team.stats.followers}
                      </span>
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {team.stats.events}
                      </span>
                    </div>
                    <a href={team.socialUrl} target="_blank" rel="noopener" class="text-red-500 hover:underline">View Team →</a>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <!-- Join CTA Section -->
  <section class="py-24 bg-black relative">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.1),transparent_50%)]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-red-900/20 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Join the
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-500">86 Squadron?</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Become part of our growing community of cosplayers and bring your favorite 86 characters to life.
        </p>
        <a href="/join" 
          class="inline-flex items-center bg-red-800 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-all transform hover:scale-105 duration-200 shadow-[0_0_30px_rgba(128,0,0,0.3)]">
          Join Now
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</main>

<!-- Project Overview Section -->
<section class="py-24 bg-black/80 relative">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Project Description -->
      <div>
        <h2 class="text-3xl font-bold mb-6 text-white font-mono">PROJECT OVERVIEW</h2>
        <div class="space-y-4 text-gray-300">
          <p>The 86 Cosplay Project is a community initiative dedicated to bringing the world of 86 EIGHTY-SIX to life through detailed costume recreation and prop making.</p>
          <p>Our mission is to honor the series' military authenticity while creating opportunities for fans to embody their favorite characters.</p>
        </div>
        
        <!-- Project Stats -->
        <div class="grid grid-cols-3 gap-4 mt-8">
          <div class="bg-black/50 p-4 rounded border border-red-500/20">
            <div class="text-red-500 font-mono text-2xl">20+</div>
            <div class="text-gray-400 text-sm">Active Cosplayers</div>
          </div>
          <div class="bg-black/50 p-4 rounded border border-red-500/20">
            <div class="text-red-500 font-mono text-2xl">15</div>
            <div class="text-gray-400 text-sm">Costume Guides</div>
          </div>
          <div class="bg-black/50 p-4 rounded border border-red-500/20">
            <div class="text-red-500 font-mono text-2xl">10</div>
            <div class="text-gray-400 text-sm">Prop Tutorials</div>
          </div>
        </div>
      </div>

      <!-- Featured Categories -->
      <div class="grid grid-cols-2 gap-4">
        <a href="/costumes" class="group relative overflow-hidden rounded-lg">
          <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all"></div>
          <img src="/categories/uniforms.jpg" alt="Military Uniforms" class="w-full h-48 object-cover" />
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-white font-mono text-lg">MILITARY UNIFORMS</h3>
            <p class="text-gray-300 text-sm">Detailed guides for Republic and Federacy uniforms</p>
          </div>
        </a>
        <a href="/props" class="group relative overflow-hidden rounded-lg">
          <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all"></div>
          <img src="/categories/props.jpg" alt="Military Props" class="w-full h-48 object-cover" />
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-white font-mono text-lg">MILITARY PROPS</h3>
            <p class="text-gray-300 text-sm">Para-RAID devices and military equipment</p>
          </div>
        </a>
        <a href="/tutorials" class="group relative overflow-hidden rounded-lg">
          <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all"></div>
          <img src="/categories/tutorials.jpg" alt="Cosplay Tutorials" class="w-full h-48 object-cover" />
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-white font-mono text-lg">TUTORIALS</h3>
            <p class="text-gray-300 text-sm">Step-by-step guides for costumes and props</p>
          </div>
        </a>
        <a href="/events" class="group relative overflow-hidden rounded-lg">
          <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all"></div>
          <img src="/categories/events.jpg" alt="Cosplay Events" class="w-full h-48 object-cover" />
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-white font-mono text-lg">EVENTS</h3>
            <p class="text-gray-300 text-sm">Upcoming gatherings and photoshoots</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Latest Updates Section -->
<section class="py-24 bg-black relative">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-white font-mono">LATEST UPDATES</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-black/50 rounded-lg border border-red-500/20 overflow-hidden">
        <img src="/updates/new-guide.jpg" alt="New Costume Guide" class="w-full h-48 object-cover" />
        <div class="p-6">
          <div class="text-red-500 text-sm font-mono mb-2">2024.03.15</div>
          <h3 class="text-white font-bold mb-2">New Costume Guide: Frederica Rosenfort</h3>
          <p class="text-gray-400 text-sm">Complete breakdown of Frederica's Federacy uniform with pattern and material recommendations.</p>
        </div>
      </div>
      <div class="bg-black/50 rounded-lg border border-red-500/20 overflow-hidden">
        <img src="/updates/prop-tutorial.jpg" alt="Para-RAID Tutorial" class="w-full h-48 object-cover" />
        <div class="p-6">
          <div class="text-red-500 text-sm font-mono mb-2">2024.03.10</div>
          <h3 class="text-white font-bold mb-2">Para-RAID Device Tutorial</h3>
          <p class="text-gray-400 text-sm">Learn how to create screen-accurate Para-RAID devices using 3D printing and LEDs.</p>
        </div>
      </div>
      <div class="bg-black/50 rounded-lg border border-red-500/20 overflow-hidden">
        <img src="/updates/event-announcement.jpg" alt="Event Announcement" class="w-full h-48 object-cover" />
        <div class="p-6">
          <div class="text-red-500 text-sm font-mono mb-2">2024.03.05</div>
          <h3 class="text-white font-bold mb-2">86 Squadron Gathering 2024</h3>
          <p class="text-gray-400 text-sm">Join us for our annual cosplay gathering featuring photoshoots and workshops.</p>
        </div>
      </div>
    </div>
  </div>
</section>