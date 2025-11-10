<script>
  import BookingModal from '$lib/components/BookingModal.svelte';
  import { page } from '$app/stores';

  const roomTypes = ['House'];
  let selectedRoomTypes = [...roomTypes];
  let priceRange = 136;
  let contractLength = '51wks';
  let showBookingModal = false;
  let selectedRoom = '';
  let initialized = false;

  // All rooms data for Naburn & Welby
  const allRooms = [
    { type: 'House', price51: 125, price45: 136, description: 'Traditional student house with shared living spaces and independent living' }
  ];

  // Initialize selected room types from query parameter (only once)
  $: if ($page.url.searchParams.has('type') && !initialized) {
    const typeParam = $page.url.searchParams.get('type');
    selectedRoomTypes = [typeParam];
    initialized = true;
  }

  // Get current price based on contract length
  function getCurrentPrice(room) {
    return contractLength === '51wks' ? room.price51 : room.price45;
  }

  // Handle checkbox changes
  function toggleRoomType(type) {
    if (selectedRoomTypes.includes(type)) {
      selectedRoomTypes = selectedRoomTypes.filter(t => t !== type);
    } else {
      selectedRoomTypes = [...selectedRoomTypes, type];
    }
  }

  // Filter rooms based on selections
  $: filteredRooms = (contractLength, selectedRoomTypes, priceRange, allRooms) && allRooms.filter(room => {
    const matchesType = selectedRoomTypes.length === 0 || selectedRoomTypes.includes(room.type);
    const price = getCurrentPrice(room);
    const matchesPrice = price <= priceRange;
    return matchesType && matchesPrice;
  });

  function openBookingModal(roomType = '') {
    selectedRoom = roomType;
    showBookingModal = true;
  }

  function toggleContractLength() {
    contractLength = contractLength === '51wks' ? '45wks' : '51wks';
  }

  const subLocations = ['Naburn & Welby'];

  const roomPricing = {
    'House': { '51wks': 125, '45wks': 136 }
  };
</script>

<svelte:head>
  <title>Naburn & Welby - All Rooms | Njoy Student Living</title>
  <meta name="description" content="Browse all available rooms at Naburn & Welby with flexible filtering options" />
</svelte:head>

<!-- Header -->
<header class="bg-njoy-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" class="flex items-center text-xl font-bold hover:opacity-80 transition-opacity" style="text-decoration: none; color: inherit;">
      <img src="/favicon.svg" alt="Njoy Logo" class="h-8 w-8 mr-3" />
      Njoy<span class="ml-1 text-njoy-green font-poppins">Student Living</span>
    </a>
    
    <div class="flex items-center space-x-8">
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="hover:text-njoy-green transition-colors" style="text-decoration: none;">Home</a>
        <div class="relative group">
          <button class="hover:text-njoy-green transition-colors text-white" style="text-decoration: none; background: none; border: none; padding: 0; font-size: inherit; font-family: inherit; cursor: pointer;">
            Locations
          </button>
          <div class="absolute top-full left-0 mt-2 bg-njoy-dark border border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[120px]">
            <a href="/locations/manchester" class="block px-4 py-3 text-white hover:bg-gray-700 hover:text-njoy-green transition-colors rounded-t-lg no-underline" style="text-decoration: none !important;">Manchester</a>
            <a href="/locations/leeds" class="block px-4 py-3 text-white hover:bg-gray-700 hover:text-njoy-green transition-colors rounded-b-lg no-underline" style="text-decoration: none !important;">Leeds</a>
          </div>
        </div>
        <a href="/about" class="hover:text-njoy-green transition-colors" style="text-decoration: none;">About</a>
      </nav>
      <div class="flex space-x-4">
        <a href="/login" class="px-4 py-2 border border-gray-600 rounded text-white hover:bg-gray-700 transition-colors" style="text-decoration: none; display: flex; align-items: center;">
          Sign in
        </a>
        <a href="/register" class="px-4 py-2 bg-njoy-green text-white rounded hover:bg-green-700 transition-colors" style="text-decoration: none; display: flex; align-items: center;">
          Register
        </a>
      </div>
    </div>
  </div>
</header>

<!-- Main Content -->
<main class="bg-[#1E1E1E] min-h-screen pt-20">
  <!-- Hero Section with Property Image -->
  {@html `
  <section style="position: relative; height: 400px; background-image: url('/naburn-and-welby.jpg'); background-size: cover; background-position: center;">
    <!-- Dark overlay -->
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));"></div>
    
    <!-- Property title overlay -->
    <div style="position: absolute; bottom: 40px; left: 40px; color: white;">
      <h1 style="font-size: 3rem; font-weight: 700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Naburn & Welby - All Rooms</h1>
    </div>
  </section>
  `}

  <!-- Content Section -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Sidebar with Filters -->
        <div class="lg:col-span-1">
          <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-6 sticky top-24">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-white font-bold text-lg">Filters</h3>
              <!-- Contract Length Pill Slider -->
              <div class="relative bg-gray-600 rounded-full p-1 flex">
                <button 
                  class="px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 {contractLength === '51wks' ? 'bg-njoy-green text-white' : 'text-gray-300 hover:text-white'}"
                  on:click={toggleContractLength}
                >
                  51wks
                </button>
                <button 
                  class="px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 {contractLength === '45wks' ? 'bg-njoy-green text-white' : 'text-gray-300 hover:text-white'}"
                  on:click={toggleContractLength}
                >
                  45wks
                </button>
              </div>
            </div>

            <!-- Room Type Filter -->
            <div class="mb-8">
              <!-- svelte-ignore a11y_label_has_associated_control -->
              <div class="text-gray-300 text-sm font-medium mb-3 block">Room Type</div>
              <div class="space-y-2">
                {#each roomTypes as type}
                  <label class="flex items-center cursor-pointer group">
                    <div class="relative">
                      <input 
                        type="checkbox"
                        checked={selectedRoomTypes.includes(type)}
                        on:change={() => toggleRoomType(type)}
                        class="sr-only"
                      />
                      <div class="w-5 h-5 rounded border-2 border-gray-600 bg-gray-800 group-hover:border-njoy-green transition-colors flex items-center justify-center" style="border-color: {selectedRoomTypes.includes(type) ? '#22c55e' : 'rgb(75, 85, 99)'}; background-color: {selectedRoomTypes.includes(type) ? '#22c55e' : 'rgb(30, 30, 30)'};">
                        {#if selectedRoomTypes.includes(type)}
                          <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        {/if}
                      </div>
                    </div>
                    <span class="ml-3 text-gray-300 text-sm group-hover:text-njoy-green transition-colors">{type}</span>
                  </label>
                {/each}
              </div>
            </div>

            <!-- Price Range Slider -->
            <div>
              <!-- svelte-ignore a11y_label_has_associated_control -->
              <div class="text-gray-300 text-sm font-medium mb-2 block">
                Max Price: <span class="text-njoy-green font-bold">£{priceRange}/week</span>
              </div>
              <input 
                type="range"
                min="125"
                max="136"
                step="1"
                bind:value={priceRange}
                class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-njoy-green"
              />
              <div class="flex justify-between text-xs text-gray-400 mt-2">
                <span>£125</span>
                <span>£136</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-3">
          {#if filteredRooms.length === 0}
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-12 text-center">
              <p class="text-gray-300 text-lg">No rooms match your filters. Try adjusting your criteria.</p>
            </div>
          {:else}
            <!-- Room Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {#each filteredRooms as room (room.type)}
                <div style="background-color: rgb(43, 43, 43);" class="rounded-lg overflow-hidden">
                  <div class="relative">
                    <img src="/naburn-and-welby.jpg" alt={room.type} class="w-full h-48 object-cover">
                    <div class="absolute top-3 right-3 bg-njoy-green text-white px-2 py-1 rounded text-sm font-medium">
                      £{getCurrentPrice(room)} per week
                    </div>
                  </div>
                  <div class="p-4">
                    <h3 class="text-white font-bold text-lg mb-2">{room.type}</h3>
                    <p class="text-gray-300 text-sm mb-4">{room.description}</p>
                    <div class="flex gap-2">
                      <button 
                        on:click={() => openBookingModal(room.type)}
                        class="flex-1 bg-njoy-green text-white py-2 px-3 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        Book viewing
                      </button>
                      <a 
                        href="/locations/manchester/naburn-welby"
                        class="flex-1 border border-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors text-center"
                        style="text-decoration: none;"
                      >
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
</main>

<BookingModal 
  bind:isOpen={showBookingModal} 
  roomType={selectedRoom}
  {subLocations}
/>

<style>
  /* Custom range slider styling */
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #22c55e;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #22c55e;
    border: none;
    cursor: pointer;
  }
</style>
