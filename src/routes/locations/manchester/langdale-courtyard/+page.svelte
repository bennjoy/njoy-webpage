<script>
  import BookingModal from '$lib/components/BookingModal.svelte';
  
  // Langdale Courtyard property page
  let showBookingModal = false;
  let selectedRoom = '';
  let contractLength = '51wks'; // Default to 51 weeks
  
  const subLocations = [
    'Langdale Courtyard'
  ];
  
  // Room pricing based on contract length
  const roomPricing = {
    'Standard Ensuite': { '51wks': 142, '45wks': 154 },
    'Large Ensuite': { '51wks': 156, '45wks': 169 },
    'Compact Studio': { '51wks': 168, '45wks': 182 },
    'Ensuite with Private Kitchen': { '51wks': 185, '45wks': 201 }
  };
  
  function openBookingModal(roomType = '') {
    selectedRoom = roomType;
    showBookingModal = true;
  }
  
  function toggleContractLength() {
    contractLength = contractLength === '51wks' ? '45wks' : '51wks';
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
          <a 
          <a 
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

<!-- Main Content -->
<main class="bg-[#1E1E1E] min-h-screen pt-20">
  <!-- Hero Section with Property Image -->
  {@html `
  <section style="position: relative; height: 400px; background-image: url('/langdale-courtyard.jpg'); background-size: cover; background-position: center;">
    <!-- Dark overlay -->
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));"></div>
    
    <!-- Property title overlay -->
    <div style="position: absolute; bottom: 40px; left: 40px; color: white;">
      <h1 style="font-size: 3rem; font-weight: 700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Langdale Courtyard</h1>
    </div>
  </section>
  `}

  <!-- Content Section -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-6 sticky top-24">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-white font-bold text-lg">Room Types</h3>
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
            
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-300">Standard Ensuite</span>
                <span class="text-njoy-green font-semibold">£{roomPricing['Standard Ensuite'][contractLength]}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300">Large Ensuite</span>
                <span class="text-njoy-green font-semibold">£{roomPricing['Large Ensuite'][contractLength]}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300">Compact Studio</span>
                <span class="text-njoy-green font-semibold">£{roomPricing['Compact Studio'][contractLength]}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-300">Ensuite with Private Kitchen</span>
                <span class="text-njoy-green font-semibold">£{roomPricing['Ensuite with Private Kitchen'][contractLength]}</span>
              </div>
            </div>
            
            <div class="mt-6">
              <button 
                on:click={() => openBookingModal('')}
                class="w-full bg-njoy-green text-white py-3 rounded font-medium hover:bg-green-700 transition-colors mb-3"
              >
                Book a viewing
              </button>
              <button class="w-full border border-gray-600 text-white py-3 rounded font-medium hover:bg-gray-700 transition-colors">
                View all rooms
              </button>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-3">
          <div style="background-color: rgb(43, 43, 43);" class="rounded-lg p-6 mb-8">
            <h2 class="text-white font-bold text-2xl mb-4">About Langdale Courtyard</h2>
            <p class="text-gray-300 mb-4">
              Langdale Courtyard offers modern student living in the heart of Manchester. Our purpose-built accommodation features contemporary design with excellent transport links to the city's universities.
            </p>
            <p class="text-gray-300">
              Located in a vibrant area, residents enjoy easy access to shopping, dining, and entertainment, while benefiting from a secure and supportive living environment.
            </p>
          </div>

          <!-- Room Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Standard Ensuite Card -->
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg overflow-hidden">
              <div class="relative">
                <img src="/langdale-courtyard.jpg" alt="Standard Ensuite" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-njoy-green text-white px-2 py-1 rounded text-sm font-medium">
                  £{roomPricing['Standard Ensuite'][contractLength]} per week
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-white font-bold text-lg mb-2">Standard Ensuite</h3>
                <p class="text-gray-300 text-sm mb-4">Comfortable ensuite room with shared kitchen facilities</p>
                <div class="flex gap-2">
                  <button 
                    on:click={() => openBookingModal('Standard Ensuite')}
                    class="flex-1 bg-njoy-green text-white py-2 px-3 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Book viewing
                  </button>
                  <button class="flex-1 border border-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                    View rooms
                  </button>
                </div>
              </div>
            </div>

            <!-- Large Ensuite Card -->
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg overflow-hidden">
              <div class="relative">
                <img src="/langdale-courtyard.jpg" alt="Large Ensuite" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-njoy-green text-white px-2 py-1 rounded text-sm font-medium">
                  £{roomPricing['Large Ensuite'][contractLength]} per week
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-white font-bold text-lg mb-2">Large Ensuite</h3>
                <p class="text-gray-300 text-sm mb-4">Spacious ensuite room with shared kitchen and additional storage</p>
                <div class="flex gap-2">
                  <button 
                    on:click={() => openBookingModal('Large Ensuite')}
                    class="flex-1 bg-njoy-green text-white py-2 px-3 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Book viewing
                  </button>
                  <button class="flex-1 border border-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                    View rooms
                  </button>
                </div>
              </div>
            </div>

            <!-- Compact Studio Card -->
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg overflow-hidden">
              <div class="relative">
                <img src="/langdale-courtyard.jpg" alt="Compact Studio" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-njoy-green text-white px-2 py-1 rounded text-sm font-medium">
                  £{roomPricing['Compact Studio'][contractLength]} per week
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-white font-bold text-lg mb-2">Compact Studio</h3>
                <p class="text-gray-300 text-sm mb-4">Self-contained studio with private bathroom and kitchenette</p>
                <div class="flex gap-2">
                  <button 
                    on:click={() => openBookingModal('Compact Studio')}
                    class="flex-1 bg-njoy-green text-white py-2 px-3 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Book viewing
                  </button>
                  <button class="flex-1 border border-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                    View rooms
                  </button>
                </div>
              </div>
            </div>

            <!-- Ensuite with Private Kitchen Card -->
            <div style="background-color: rgb(43, 43, 43);" class="rounded-lg overflow-hidden">
              <div class="relative">
                <img src="/langdale-courtyard.jpg" alt="Ensuite with Private Kitchen" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-njoy-green text-white px-2 py-1 rounded text-sm font-medium">
                  £{roomPricing['Ensuite with Private Kitchen'][contractLength]} per week
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-white font-bold text-lg mb-2">Ensuite with Private Kitchen</h3>
                <p class="text-gray-300 text-sm mb-4">Premium ensuite room with your own private kitchen</p>
                <div class="flex gap-2">
                  <button 
                    on:click={() => openBookingModal('Ensuite with Private Kitchen')}
                    class="flex-1 bg-njoy-green text-white py-2 px-3 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Book viewing
                  </button>
                  <button class="flex-1 border border-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                    View rooms
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<BookingModal 
  bind:isOpen={showBookingModal} 
  siteName="Langdale Courtyard"
  roomType={selectedRoom}
  {subLocations}
/>
