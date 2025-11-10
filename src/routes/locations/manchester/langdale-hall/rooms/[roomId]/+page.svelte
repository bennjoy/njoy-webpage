<script>
  import BookingModal from '$lib/components/BookingModal.svelte';
  import { page } from '$app/stores';

  const roomId = $page.params.roomId;

  // Room data mapping
  const roomData = {
    'MB1': { type: 'Standard Ensuite', price51: 122, price45: 132, description: 'Comfortable standard ensuite with modern amenities' },
    'MB2': { type: 'Large Ensuite', price51: 136, price45: 148, description: 'Spacious ensuite bedroom with enhanced comfort' },
    'MB3': { type: 'Compact Studio', price51: 143, price45: 155, description: 'Cozy studio apartment with independent living space' },
    'MB4': { type: 'Ensuite with Private Kitchen', price51: 145, price45: 158, description: 'Premium ensuite with private kitchenette' },
    'MB21': { type: 'Standard Ensuite', price51: 122, price45: 132, description: 'Comfortable standard ensuite with modern amenities' },
    'MB22': { type: 'Large Ensuite', price51: 136, price45: 148, description: 'Spacious ensuite bedroom with enhanced comfort' },
    'MB23': { type: 'Compact Studio', price51: 143, price45: 155, description: 'Cozy studio apartment with independent living space' },
    'MB24': { type: 'Ensuite with Private Kitchen', price51: 145, price45: 158, description: 'Premium ensuite with private kitchenette' }
  };

  let contractLength = '51wks';
  let showBookingModal = false;

  const room = roomData[roomId];

  function getCurrentPrice() {
    if (!room) return '—';
    return contractLength === '51wks' ? room.price51 : room.price45;
  }

  function toggleContractLength() {
    contractLength = contractLength === '51wks' ? '45wks' : '51wks';
  }

  function openBookingModal() {
    showBookingModal = true;
  }
</script>

<svelte:head>
  <title>Room {roomId} - Langdale Hall | Njoy Student Living</title>
  <meta name="description" content="View details for room {roomId} at Langdale Hall" />
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
<main class="bg-[#1E1E1E] min-h-screen pt-20 pb-20">
  <!-- Back Button -->
  <section class="py-6">
    <div class="container mx-auto px-4">
      <a 
        href="/locations/manchester/langdale-hall/rooms"
        class="inline-flex items-center gap-2 bg-njoy-green text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
        style="text-decoration: none;"
      >
        <span>←</span>
        <span>Back to all rooms</span>
      </a>
    </div>
  </section>

  {#if room}
    <!-- Room Details Section -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-12 gap-6">
          
          <!-- Left Column - Room Info (3 columns) -->
          <div class="col-span-12 md:col-span-3">
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-6 sticky top-24">
              <h1 class="text-white font-bold text-3xl mb-3">Room {roomId}</h1>
              <p class="text-gray-400 text-base mb-4">{room.type}</p>
              
              <div class="mb-6">
                <h2 class="text-white font-bold text-sm mb-2">About</h2>
                <p class="text-gray-300 text-xs leading-relaxed mb-4">{room.description}</p>
              </div>

              <div>
                <h2 class="text-white font-bold text-sm mb-2">Features</h2>
                <ul class="text-gray-300 space-y-1 text-xs">
                  <li class="flex items-start">
                    <span class="text-njoy-green mr-2 flex-shrink-0">✓</span>
                    Modern furnishings
                  </li>
                  <li class="flex items-start">
                    <span class="text-njoy-green mr-2 flex-shrink-0">✓</span>
                    High-speed broadband
                  </li>
                  <li class="flex items-start">
                    <span class="text-njoy-green mr-2 flex-shrink-0">✓</span>
                    24/7 maintenance
                  </li>
                  <li class="flex items-start">
                    <span class="text-njoy-green mr-2 flex-shrink-0">✓</span>
                    On-site security
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Center Column - Image Gallery (6 columns) -->
          <div class="col-span-12 md:col-span-6">
            <div class="grid grid-cols-2 gap-3">
              <!-- Main large image -->
              <div class="col-span-2 rounded-lg overflow-hidden aspect-video">
                <img src="/langdale-hall.jpg" alt={roomId} class="w-full h-full object-cover">
              </div>
              <!-- Thumbnail images -->
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="/langdale-hall.jpg" alt="Room view 1" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity">
              </div>
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="/langdale-hall.jpg" alt="Room view 2" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity">
              </div>
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="/langdale-hall.jpg" alt="Room view 3" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity">
              </div>
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="/langdale-hall.jpg" alt="Room view 4" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity">
              </div>
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="/langdale-hall.jpg" alt="Room view 5" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity">
              </div>
              <div class="rounded-lg overflow-hidden aspect-square">
                <img src="/langdale-hall.jpg" alt="Room view 6" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity">
              </div>
            </div>
          </div>

          <!-- Right Column - Pricing (3 columns) -->
          <div class="col-span-12 md:col-span-3">
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-6 sticky top-24">
              <h2 class="text-white font-bold text-xl mb-4">Pricing</h2>
              
              <!-- Contract Length Toggle -->
              <div class="mb-6">
                <div class="relative bg-gray-600 rounded-full p-1 flex">
                  <button 
                    class="flex-1 px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 {contractLength === '51wks' ? 'bg-njoy-green text-white' : 'text-gray-300 hover:text-white'}"
                    on:click={toggleContractLength}
                  >
                    51 wks
                  </button>
                  <button 
                    class="flex-1 px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 {contractLength === '45wks' ? 'bg-njoy-green text-white' : 'text-gray-300 hover:text-white'}"
                    on:click={toggleContractLength}
                  >
                    45 wks
                  </button>
                </div>
              </div>

              <!-- Price -->
              <div class="mb-6">
                <div class="text-gray-400 text-xs mb-1">Price per week</div>
                <div class="text-njoy-green font-bold text-3xl">£{getCurrentPrice()}</div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-2">
                <button 
                  on:click={openBookingModal}
                  class="w-full bg-njoy-green text-white py-2 rounded-lg font-bold text-sm hover:bg-green-700 transition-colors"
                >
                  Book Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {:else}
    <!-- Room Not Found -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-12 text-center">
          <h1 class="text-white font-bold text-2xl mb-4">Room Not Found</h1>
          <p class="text-gray-300 mb-6">The room you're looking for doesn't exist.</p>
          <a 
            href="/locations/manchester/langdale-hall/rooms"
            class="bg-njoy-green text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors inline-block"
            style="text-decoration: none;"
          >
            Back to All Rooms
          </a>
        </div>
      </div>
    </section>
  {/if}
</main>

<BookingModal 
  bind:isOpen={showBookingModal} 
  roomType={room?.type || ''}
  subLocations={['Langdale Hall', `Room ${roomId}`]}
/>
