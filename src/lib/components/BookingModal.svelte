<script>
  import { createEventDispatcher } from 'svelte';
  
  export let isOpen = false;
  export let siteName = '';
  export let roomType = '';
  export let subLocations = [];
  
  const dispatch = createEventDispatcher();
  
  let formData = {
    site: '',
    room: '',
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    bookingType: '',
    date: '',
    time: ''
  };
  
  // Generate time slots from 12:00 to 17:45 in 15-minute intervals
  const timeSlots = [];
  for (let hour = 12; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      if (hour === 17 && minute > 45) break;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(timeString);
    }
  }
  
  // Auto-fill site and room when props change
  $: if (siteName) {
    formData.site = siteName;
  }
  $: if (roomType) {
    formData.room = roomType;
  }
  
  function closeModal() {
    isOpen = false;
    dispatch('close');
  }
  
  function submitForm() {
    // Here you would typically send the form data to your backend
    console.log('Booking form submitted:', formData);
    // For now, just close the modal
    closeModal();
  }
  
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
</script>

{#if isOpen}
  <!-- Modal Backdrop -->
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    on:click={handleBackdropClick}
  >
    <!-- Modal Content -->
    <div class="bg-njoy-dark rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
      <h2 class="text-white text-xl font-bold mb-6">Book a Viewing</h2>
      
      <form on:submit|preventDefault={submitForm} class="space-y-4">
        <!-- Site Selection -->
        <div>
          <label for="site" class="block text-white text-sm font-medium mb-1">Site:</label>
          <select 
            id="site" 
            bind:value={formData.site}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          >
            <option value="">Select a site</option>
            {#each subLocations as location}
              <option value={location}>{location}</option>
            {/each}
          </select>
        </div>
        
        <!-- Room Selection -->
        <div>
          <label for="room" class="block text-white text-sm font-medium mb-1">Room Type:</label>
          <input 
            type="text" 
            id="room"
            bind:value={formData.room}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          />
        </div>
        
        <!-- Name -->
        <div>
          <label for="name" class="block text-white text-sm font-medium mb-1">Your Name:</label>
          <input 
            type="text" 
            id="name"
            bind:value={formData.name}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          />
        </div>
        
        <!-- Email -->
        <div>
          <label for="email" class="block text-white text-sm font-medium mb-1">Your Email Address:</label>
          <input 
            type="email" 
            id="email"
            bind:value={formData.email}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          />
        </div>
        
        <!-- Phone -->
        <div>
          <label for="phone" class="block text-white text-sm font-medium mb-1">Your Phone Number:</label>
          <input 
            type="tel" 
            id="phone"
            bind:value={formData.phone}
            placeholder="Please include area & country code"
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white placeholder-gray-400"
            style="background-color: #3a3a3a;"
            required
          />
        </div>
        
        <!-- Contact Method -->
        <div>
          <label for="contactMethod" class="block text-white text-sm font-medium mb-1">How would you like us to contact you?</label>
          <select 
            id="contactMethod" 
            bind:value={formData.contactMethod}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          >
            <option value="">Select contact method</option>
            <option value="call">Call me</option>
            <option value="email">Email me</option>
            <option value="either">Either is fine</option>
          </select>
        </div>
        
        <!-- Booking Type -->
        <div>
          <label for="bookingType" class="block text-white text-sm font-medium mb-1">Booking as a Group or Single?</label>
          <select 
            id="bookingType" 
            bind:value={formData.bookingType}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          >
            <option value="">Select booking type</option>
            <option value="group">Group - There's a few of us that want to live together.</option>
            <option value="single">Single - Only sorting accommodation for one person.</option>
          </select>
        </div>
        
        <!-- Date -->
        <div>
          <label for="date" class="block text-white text-sm font-medium mb-1">Pick a date:</label>
          <input 
            type="date" 
            id="date"
            bind:value={formData.date}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          />
        </div>
        
        <!-- Time -->
        <div>
          <label for="time" class="block text-white text-sm font-medium mb-1">Pick a time:</label>
          <select 
            id="time" 
            bind:value={formData.time}
            class="w-full px-3 py-2 rounded border border-gray-600 focus:border-njoy-green focus:outline-none text-white"
            style="background-color: #3a3a3a;"
            required
          >
            <option value="">Select time (12:00 - 17:45)</option>
            {#each timeSlots as timeSlot}
              <option value={timeSlot}>{timeSlot}</option>
            {/each}
          </select>
        </div>
        
        <!-- Buttons -->
        <div class="flex gap-3 pt-4">
          <button 
            type="button"
            on:click={closeModal}
            class="flex-1 px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="flex-1 px-4 py-2 bg-njoy-green text-white rounded hover:bg-green-700 transition-colors"
          >
            Book Viewing
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}