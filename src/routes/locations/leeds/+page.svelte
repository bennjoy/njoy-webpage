<script>
  import BookingModal from '$lib/components/BookingModal.svelte';
  
  let isBookingModalOpen = false;
  let selectedProperty = '';
  
  function openBookingModal(propertyName) {
    selectedProperty = propertyName;
    isBookingModalOpen = true;
  }
  
  function closeBookingModal() {
    isBookingModalOpen = false;
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
      </nav>
      
      <!-- Auth buttons -->
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
<main class="bg-[#1E1E1E] min-h-screen">
  <!-- Hero Banner Section -->
  {@html `
  <section style="position: relative; overflow: hidden; height: 192px;">
    <!-- Background Image -->
    <div style="width: 100%; height: 100%; background-size: cover; background-repeat: no-repeat; background-image: url('/leeds-banner.jpg'); background-position: center center;"></div>
    
    <!-- Dark Overlay -->
    <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.3);"></div>
    
    <!-- Leeds Title Overlay -->
    <div style="position: absolute; top: 64px; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center;">
      <h1 style="color: white; font-size: 2.25rem; font-weight: 700; font-family: 'Poppins', sans-serif; text-align: center; margin: 0;">Leeds</h1>
    </div>
  </section>
  `}

  <!-- Content Section -->
  <div class="container mx-auto px-4" style="padding-top: 2rem; padding-bottom: 3rem;">
    <!-- Property Cards -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 450px)); gap: 2rem; justify-content: center; max-width: 1400px; margin: 0 auto;">
      
      <!-- Carr Mills Card -->
      <div style="background-color: rgb(43, 43, 43); border-radius: 0.5rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); width: 100%; max-width: 450px;">
        <!-- Property Image -->
        <div style="height: 256px; width: 100%; overflow: hidden;">
          <img src="/carr-mills.jpg" alt="Carr Mills" style="width: 100%; height: 256px; object-fit: cover; display: block;">
        </div>
        
        <!-- Card Content -->
        <div style="padding: 1.5rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 0.5rem; margin: 0 0 0.5rem 0;">Carr Mills</h3>
          <p style="color: rgb(209, 213, 219); margin-bottom: 1rem; margin: 0 0 1rem 0;">Purpose-built student accommodation in the Buslingthorpe area.</p>
          <p style="font-size: 1.125rem; font-weight: 600; color: white; margin-bottom: 1.5rem; margin: 0 0 1.5rem 0;">From £147 per week</p>
          
          <!-- Action Buttons -->
          <div style="display: flex; gap: 0.75rem;">
            <button on:click={() => openBookingModal('Carr Mills')} style="flex: 1; padding: 0.5rem 0.25rem; background-color: #8BC34A; color: white; border-radius: 0.5rem; border: none; font-weight: 500; cursor: pointer; font-size: 0.875rem; text-align: center; transition: background-color 0.2s;">Book viewing</button>
            <button style="flex: 1; padding: 0.5rem 0.25rem; border: 1px solid rgb(107, 114, 128); color: white; border-radius: 0.5rem; background: transparent; font-weight: 500; cursor: pointer; font-size: 0.875rem; text-align: center; transition: background-color 0.2s;">Site details</button>
            <a href="/locations/leeds/carr-mills" style="flex: 1; padding: 0.5rem 0.25rem; border: 1px solid rgb(107, 114, 128); color: white; border-radius: 0.5rem; background: transparent; font-weight: 500; cursor: pointer; font-size: 0.875rem; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; transition: background-color 0.2s;">View rooms</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</main>

<BookingModal isOpen={isBookingModalOpen} siteName={selectedProperty} on:close={closeBookingModal} />
