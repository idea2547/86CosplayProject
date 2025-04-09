<!-- Root layout -->
<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  
  let isMenuOpen = false;
  let isScrolled = false;

  const navItems = [
    { href: '/podcast', label: 'Podcast' },
    { href: '/education', label: 'Education' },
    { href: '/one-mind', label: 'One Mind' },
    { href: '/ultimate-course', label: 'Ultimate Course', highlight: true }
  ];

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

  $: navBackground = isScrolled ? 'bg-[#0A0A0B]/95' : 'bg-[#0A0A0B]/80';
</script>

<!-- Navbar -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {navBackground}">
  <!-- Backdrop Blur and Gradient -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 backdrop-blur-[6px]"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
  </div>
  
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="flex items-center justify-center h-20 relative">
      <!-- Logo and Nav Container -->
      <div class="flex items-center space-x-12">
        <!-- Logo -->
        <a href="/" class="flex items-center group">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-white">Astral</span>
            <span class="text-2xl font-bold text-[#40E9E9]">RC</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          {#each navItems as item}
            <a href={item.href} 
               class="relative text-base font-medium group {item.highlight ? 'text-[#FFD028]' : 'text-gray-200'} hover:text-[#40E9E9] transition-colors duration-200">
              <span class="relative z-10">{item.label}</span>
              {#if !item.highlight}
                <span class="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#40E9E9]/50 to-[#40E9E9] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              {/if}
            </a>
          {/each}
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden absolute right-0">
        <button 
          on:click={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#40E9E9] hover:bg-white/5 focus:outline-none transition-all duration-300"
        >
          <div class="relative w-6 h-6">
            <span class="absolute inset-0 transform transition-transform duration-300 flex items-center justify-center">
              {#if isMenuOpen}
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              {:else}
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              {/if}
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-[#0A0A0B]/95 backdrop-blur-lg border-t border-white/5"
         transition:slide={{ duration: 300 }}>
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <a href={item.href} 
             class="block px-3 py-2 text-base font-medium {item.highlight ? 'text-[#FFD028]' : 'text-gray-300'} hover:text-[#40E9E9] hover:bg-white/5 rounded-lg transition-all duration-300">
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<!-- Main content -->
<div class="pt-20">
  <slot />
</div>

<style lang="postcss">
  nav {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  nav::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent,
      rgba(64, 233, 233, 0.1) 20%,
      rgba(64, 233, 233, 0.2) 50%,
      rgba(64, 233, 233, 0.1) 80%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  nav:not(.bg-transparent)::after {
    opacity: 1;
  }
</style> 