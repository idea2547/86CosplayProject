<script lang="ts">
  interface Resource {
    id: string;
    title: string;
    type: 'project' | 'slide' | 'asset';
    description: string;
    downloadUrl: string;
    size: string;
    lastUpdated: string;
    category?: string;
  }

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Starter Project Template',
      type: 'project',
      description: 'Complete UE5 project template with basic setup and common features',
      downloadUrl: '#',
      size: '2.4 GB',
      lastUpdated: '2024-03-15',
      category: 'Templates'
    },
    {
      id: '2',
      type: 'slide',
      title: 'UE5 Fundamentals - Week 1',
      description: 'Introduction to Unreal Engine 5 interface and basic concepts',
      downloadUrl: '#',
      size: '45 MB',
      lastUpdated: '2024-03-10',
      category: 'Course Materials'
    },
    {
      id: '3',
      type: 'asset',
      title: 'Character Animation Pack',
      description: 'Collection of high-quality character animations for game development',
      downloadUrl: '#',
      size: '1.2 GB',
      lastUpdated: '2024-03-12',
      category: 'Assets'
    },
    {
      id: '4',
      type: 'project',
      title: 'Advanced Lighting Demo',
      description: 'Example project showcasing Lumen and Nanite features',
      downloadUrl: '#',
      size: '3.1 GB',
      lastUpdated: '2024-03-14',
      category: 'Demos'
    },
    {
      id: '5',
      type: 'slide',
      title: 'Blueprint Programming Guide',
      description: 'Comprehensive guide to visual scripting in UE5',
      downloadUrl: '#',
      size: '32 MB',
      lastUpdated: '2024-03-11',
      category: 'Course Materials'
    },
    {
      id: '6',
      type: 'asset',
      title: 'Environment Textures Pack',
      description: 'High-resolution PBR textures for environment creation',
      downloadUrl: '#',
      size: '850 MB',
      lastUpdated: '2024-03-13',
      category: 'Assets'
    }
  ];

  let selectedCategory = 'all';
  let searchQuery = '';

  $: filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'Templates', 'Course Materials', 'Demos', 'Assets'];
</script>

<svelte:head>
  <title>Student Dashboard - Learning Resources</title>
  <meta name="description" content="Access your course materials, project files, and learning resources" />
</svelte:head>

<main class="min-h-screen bg-black">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,233,233,0.1),transparent_50%)]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
    <!-- Header -->
    <div class="mb-8 sm:mb-12">
      <h1 class="text-3xl sm:text-4xl font-black mb-4 text-white">
        Learning
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#40E9E9] to-[#40E9E9]/70">
          Resources
        </span>
      </h1>
      <p class="text-lg text-gray-400">Access your course materials, project files, and learning resources</p>
    </div>

    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <div class="relative flex-grow">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search resources..."
          class="w-full bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 text-white placeholder-gray-400 border border-[#40E9E9]/20 focus:outline-none focus:ring-2 focus:ring-[#40E9E9]"
        />
        <svg class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <select
        bind:value={selectedCategory}
        class="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 text-white border border-[#40E9E9]/20 focus:outline-none focus:ring-2 focus:ring-[#40E9E9]"
      >
        {#each categories as category}
          <option value={category}>{category === 'all' ? 'All Categories' : category}</option>
        {/each}
      </select>
    </div>

    <!-- Resources Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredResources as resource}
        <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#40E9E9]/20 hover:border-[#40E9E9]/40 transition-colors duration-200 resource-card">
          <div class="flex items-start justify-between mb-4">
            <div>
              <span class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 {resource.type === 'project' ? 'bg-[#40E9E9]/10 text-[#40E9E9]' : resource.type === 'slide' ? 'bg-purple-500/10 text-purple-500' : 'bg-orange-500/10 text-orange-500'}">
                {resource.type === 'project' ? 'Project' : resource.type === 'slide' ? 'Slide' : 'Asset'}
              </span>
              <h3 class="text-xl font-bold text-white mb-2">{resource.title}</h3>
            </div>
            <div class="w-10 h-10 rounded-lg bg-[#40E9E9]/10 flex items-center justify-center">
              {#if resource.type === 'project'}
                <svg class="w-5 h-5 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              {:else if resource.type === 'slide'}
                <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              {:else}
                <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              {/if}
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mb-4">{resource.description}</p>
          
          <div class="flex items-center justify-between text-sm text-gray-400">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                {resource.size}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {resource.lastUpdated}
              </span>
            </div>
            <a
              href={resource.downloadUrl}
              class="text-[#40E9E9] hover:text-[#40E9E9]/80 flex items-center gap-1"
            >
              Download
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>

    <!-- Empty State -->
    {#if filteredResources.length === 0}
      <div class="text-center py-12">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#40E9E9]/10 flex items-center justify-center">
          <svg class="w-8 h-8 text-[#40E9E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No resources found</h3>
        <p class="text-gray-400">Try adjusting your search or filter criteria</p>
      </div>
    {/if}
  </div>
</main>

<style>
  /* Add smooth transitions for hover effects */
  .resource-card {
    transition: all 0.2s ease-in-out;
  }
  
  .resource-card:hover {
    transform: translateY(-2px);
  }
</style> 