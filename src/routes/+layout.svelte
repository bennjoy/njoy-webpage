<script lang="ts">
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import LoadingBar from '$lib/components/LoadingBar.svelte';
    import '../app.css';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';
    
    let isTransitioning = false;
    let showContent = true;
    
    beforeNavigate(async (navigation) => {
        if (browser && navigation.to?.route.id !== navigation.from?.route.id) {
            isTransitioning = true;
            showContent = false;
            // Wait for fade out
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    });
    
    afterNavigate(() => {
        if (browser && isTransitioning) {
            // Small delay then fade in new content
            setTimeout(() => {
                showContent = true;
                isTransitioning = false;
            }, 50);
        }
    });
</script>

<LoadingBar />

<div class="bg-njoy-dark min-h-screen font-poppins">
    <main class="relative">
        {#if showContent}
            <div in:fade={{ duration: 300 }} out:fade={{ duration: 200 }}>
                <slot />
            </div>
        {/if}
    </main>
    <footer>
        <p>
            
        </p>
    </footer>
</div>

<!--
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
-->