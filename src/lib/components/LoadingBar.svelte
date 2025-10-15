<script lang="ts">
  import { navigating } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
</script>

{#if $navigating}
  <div 
    class="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-njoy-orange via-njoy-yellow to-njoy-orange z-50"
    in:fly={{ x: -100, duration: 200 }}
    out:fade={{ duration: 200 }}
  >
    <div class="h-full bg-gradient-to-r from-njoy-orange via-njoy-yellow to-njoy-orange animate-pulse"></div>
  </div>
{/if}

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-pulse {
    animation: shimmer 1.5s infinite;
  }
</style>