<script>
  let showManchesterVideo = false;
  let showManchesterSketch = false;
  let showLeedsSketch = false;
  let videoElement;
  let currentCircle = 1;
  let currentLeedsCircle = 1;
  let circleInterval;
  let leedsCircleInterval;
  let squiggleIntervals = [];
  let activeSquiggles = [];
  let cursorX = 0;
  let cursorY = 0;
  let isHoveringCity = false;
  
  const squiggleFiles = ['misc-28.svg', 'misc-36.svg', 'misc-44.svg', 'misc-45.svg', 'misc-51.svg', 'misc-53.svg', 'misc-55.svg', 'misc-56.svg', 'misc-6.svg'];
  
  function updateCursor(event) {
    if (isHoveringCity) {
      const rect = event.currentTarget.getBoundingClientRect();
      cursorX = event.clientX - rect.left;
      cursorY = event.clientY - rect.top;
    }
  }
  
  function getRandomPositionAroundCursor() {
    const angle = Math.random() * Math.PI * 2;
    const radius = 30 + Math.random() * 60; // 30-90px from cursor
    const x = cursorX + Math.cos(angle) * radius;
    const y = cursorY + Math.sin(angle) * radius;
    return { x, y };
  }
  
  function addRandomSquiggle() {
    const squiggle = {
      id: Math.random(),
      file: squiggleFiles[Math.floor(Math.random() * squiggleFiles.length)],
      position: getRandomPositionAroundCursor(),
      size: 20 + Math.random() * 30, // 20-50px (smaller for cursor following)
      rotation: Math.random() * 360
    };
    
    activeSquiggles = [...activeSquiggles, squiggle];
    
    // Remove after random duration
    setTimeout(() => {
      activeSquiggles = activeSquiggles.filter(s => s.id !== squiggle.id);
    }, 400 + Math.random() * 800); // 0.4-1.2 seconds (shorter for cursor)
  }
  
  function handleManchesterHover() {
    showManchesterVideo = true;
    showManchesterSketch = true;
    isHoveringCity = true;
    if (videoElement) {
      videoElement.play();
    }
    
    // Start cycling through circle variations
    circleInterval = setInterval(() => {
      currentCircle = (currentCircle % 6) + 1;
    }, 150);
    
    // Start random squiggle spawning
    const spawnSquiggle = () => {
      addRandomSquiggle();
      squiggleIntervals.push(setTimeout(spawnSquiggle, 80 + Math.random() * 200)); // Every 0.08-0.28 seconds (faster for cursor)
    };
    spawnSquiggle();
  }
  
  function handleManchesterLeave() {
    showManchesterVideo = false;
    showManchesterSketch = false;
    isHoveringCity = false;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
    
    // Stop cycling circles
    if (circleInterval) {
      clearInterval(circleInterval);
      currentCircle = 1;
    }
    
    // Stop spawning squiggles and clear existing ones
    squiggleIntervals.forEach(interval => clearTimeout(interval));
    squiggleIntervals = [];
    activeSquiggles = [];
  }
  
  function handleLeedsHover() {
    showLeedsSketch = true;
    isHoveringCity = true;
    
    // Start cycling through Leeds circle variations
    leedsCircleInterval = setInterval(() => {
      currentLeedsCircle = (currentLeedsCircle % 6) + 1;
    }, 150);
    
    // Start random squiggle spawning for Leeds
    const spawnSquiggle = () => {
      addRandomSquiggle();
      squiggleIntervals.push(setTimeout(spawnSquiggle, 80 + Math.random() * 200));
    };
    spawnSquiggle();
  }
  
  function handleLeedsLeave() {
    showLeedsSketch = false;
    isHoveringCity = false;
    
    // Stop cycling Leeds circles
    if (leedsCircleInterval) {
      clearInterval(leedsCircleInterval);
      currentLeedsCircle = 1;
    }
    
    // Stop spawning squiggles and clear existing ones
    squiggleIntervals.forEach(interval => clearTimeout(interval));
    squiggleIntervals = [];
    activeSquiggles = [];
  }
</script>

<!-- Header -->
<header class="bg-njoy-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" class="flex items-center text-xl font-bold hover:opacity-80 transition-opacity" style="text-decoration: none; color: inherit;">
      <!-- Logo to the left -->
      <img src="/favicon.svg" alt="Njoy Logo" class="h-8 w-8 mr-3" />
      Njoy<span class="ml-1 text-njoy-green font-poppins">Student Living</span>
    </a>
    
    <div class="flex items-center space-x-8">
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-6">
          <a href="/" class="hover:text-njoy-green transition-colors" style="text-decoration: none;">Home</a>
          
          <!-- Locations dropdown -->
          <div class="relative group">
            <button class="hover:text-njoy-green transition-colors text-white" style="text-decoration: none; background: none; border: none; padding: 0; font-size: inherit; font-family: inherit; cursor: pointer;">
              Locations
            </button>
            
            <!-- Dropdown menu -->
            <div class="absolute top-full left-0 mt-2 bg-njoy-dark border border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[120px]">
              <a href="/locations/manchester" class="block px-4 py-3 text-white hover:bg-gray-700 hover:text-njoy-green transition-colors rounded-t-lg no-underline" style="text-decoration: none !important;">Manchester</a>
              <a href="/locations/leeds" class="block px-4 py-3 text-white hover:bg-gray-700 hover:text-njoy-green transition-colors rounded-b-lg no-underline" style="text-decoration: none !important;">Leeds</a>
            </div>
          </div>
          
          <a href="/about" class="hover:text-njoy-green transition-colors" style="text-decoration: none;">About</a>
          <a href="/help" class="hover:text-njoy-green transition-colors" style="text-decoration: none;">Help</a>
          <a href="/contact" class="hover:text-njoy-green transition-colors" style="text-decoration: none;">Contact</a>
      </nav>
      
      <!-- Auth buttons -->
      <div class="flex space-x-4">
        <button class="px-4 py-2 border border-gray-600 rounded text-white hover:bg-gray-700 transition-colors">
          Sign in
        </button>
        <button class="px-4 py-2 bg-njoy-green text-white rounded hover:bg-green-700 transition-colors">
          Register
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Hero Section -->
<section class="relative h-screen bg-[#1E1E1E] pt-24 overflow-hidden">
    <!-- Background Video -->
    <video 
      bind:this={videoElement}
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 {showManchesterVideo ? 'opacity-60' : 'opacity-0'}"
      muted
      loop
      preload="metadata"
    >
      <source src="/langdale-drone.mp4" type="video/mp4">
    </video>
    
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div class="relative mb-8">
            <!-- Background favicon -->
            <img src="/favicon.svg" alt="Background" class="w-32 h-32 md:w-40 md:h-40 opacity-80" />
            <!-- NJOY text overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-4xl md:text-5xl font-din-black font-bold">NJOY</span>
            </div>
        </div>
        
        <p class="text-lg md:text-xl text-white/90 mb-12 font-medium">
            Unique, all-inclusive <span class="text-njoy-green">student living</span>.
        </p>
        
        <div class="relative inline-block">
            <h1 class="text-3xl md:text-4xl font-bold mb-16">Choose your city.</h1>
            
            <!-- Sketchy Arrow to the left of "Choose your city" (Manchester) -->
            {#if showManchesterSketch}
                <div class="absolute top-1/2 -left-40 w-40 h-40 transform -translate-y-1/2">
                    <img 
                        src="/arrow-left.svg" 
                        alt="" 
                        class="w-full h-full sketch-green"
                    />
                </div>
            {/if}
            
            <!-- Sketchy Arrow to the right of "Choose your city" (Leeds) -->
            {#if showLeedsSketch}
                <div class="absolute top-1/2 -right-40 w-40 h-40 transform -translate-y-1/2 scale-x-[-1]">
                    <img 
                        src="/arrow-left.svg" 
                        alt="" 
                        class="w-full h-full sketch-green"
                    />
                </div>
            {/if}
        </div>

        <div class="flex flex-col md:flex-row gap-12 md:gap-20">
            <a
                href="/locations/manchester"
                class="group px-6 py-5 text-left transition-all duration-300 cursor-pointer border-0 shadow-none relative flex flex-col items-start w-auto min-w-[220px] bg-transparent"
                style="text-decoration: none; display: inline-flex; background: none;"
                aria-label="Go to Manchester location page"
                on:mouseenter={handleManchesterHover}
                on:mouseleave={handleManchesterLeave}
                on:mousemove={updateCursor}
            >
                <!-- Sketchy Circle around this Manchester button -->
                {#if showManchesterSketch}
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                        <img 
                            src="/circles/circle{currentCircle}.svg" 
                            alt="" 
                            class="w-96 h-32 sketch-green"
                        />
                        
                        <!-- Cursor-following squiggles -->
                        {#each activeSquiggles as squiggle (squiggle.id)}
                            <div 
                                class="absolute sketch-green"
                                style="
                                    left: {squiggle.position.x}px; 
                                    top: {squiggle.position.y}px; 
                                    width: {squiggle.size}px; 
                                    height: {squiggle.size}px;
                                    transform: rotate({squiggle.rotation}deg);
                                "
                            >
                                <img 
                                    src="/squiggles/{squiggle.file}" 
                                    alt="" 
                                    class="w-full h-full sketch-green squiggle-appear"
                                />
                            </div>
                        {/each}
                    </div>
                {/if}
                
                <div class="inline-flex items-center gap-3 mb-2">
                    <!-- Arrow in a circle icon -->
                    <span class="inline-flex items-center justify-center rounded-full bg-white/20 w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-white">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 8l4 4-4 4" />
                        </svg>
                    </span>
                    <h3 class="text-2xl font-semibold leading-tight">Manchester</h3>
                </div>
                <p class="text-white/90 font-medium text-left leading-tight mt-0 text-lg">From £122pw</p>
                <span class="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-white/10"></span>
            </a>

            <a
                href="/locations/leeds"
                class="group px-6 py-5 text-left transition-all duration-300 cursor-pointer border-0 shadow-none relative flex flex-col items-start w-auto min-w-[220px] bg-transparent"
                style="text-decoration: none; display: inline-flex; background: none;"
                aria-label="Go to Leeds location page"
                on:mouseenter={handleLeedsHover}
                on:mouseleave={handleLeedsLeave}
                on:mousemove={updateCursor}
            >
                <!-- Sketchy Circle around this Leeds button -->
                {#if showLeedsSketch}
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                        <img 
                            src="/circles/circle{currentLeedsCircle}.svg" 
                            alt="" 
                            class="w-96 h-32 sketch-green"
                        />
                        
                        <!-- Cursor-following squiggles -->
                        {#each activeSquiggles as squiggle (squiggle.id)}
                            <div 
                                class="absolute sketch-green"
                                style="
                                    left: {squiggle.position.x}px; 
                                    top: {squiggle.position.y}px; 
                                    width: {squiggle.size}px; 
                                    height: {squiggle.size}px;
                                    transform: rotate({squiggle.rotation}deg);
                                "
                            >
                                <img 
                                    src="/squiggles/{squiggle.file}" 
                                    alt="" 
                                    class="w-full h-full sketch-green squiggle-appear"
                                />
                            </div>
                        {/each}
                    </div>
                {/if}
                
                <div class="inline-flex items-center gap-3 mb-2">
                    <!-- Arrow in a circle icon -->
                    <span class="inline-flex items-center justify-center rounded-full bg-white/20 w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-white">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 8l4 4-4 4" />
                        </svg>
                    </span>
                    <h3 class="text-2xl font-semibold leading-tight">Leeds</h3>
                </div>
                <p class="text-white/90 font-medium text-left leading-tight mt-0 text-lg">From £147pw</p>
                <span class="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-white/10"></span>
            </a>
        </div>
    </div>
    
    <!-- Sketchy Annotations -->
    {#if showManchesterSketch}
        <div class="absolute inset-0 pointer-events-none z-20">
            <!-- Arrow is now positioned relative to "Choose your city" text above -->
        </div>
    {/if}
</section>

<style>
    /* Make SVGs njoy green */
    .sketch-green {
        filter: brightness(0) saturate(100%) invert(73%) sepia(55%) saturate(386%) hue-rotate(45deg) brightness(96%) contrast(89%);
    }
    
    /* Squiggle appear animation */
    .squiggle-appear {
        animation: squiggle-pop 0.3s ease-out forwards;
        opacity: 0;
        transform: scale(0.5);
    }
    
    @keyframes squiggle-pop {
        0% {
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.1) rotate(10deg);
        }
        100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
    }
</style>