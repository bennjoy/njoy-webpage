<script>
  import { goto } from '$app/navigation';
  
  let email = '';
  let password = '';
  let isLoading = false;
  let errorMessage = '';

  function handleCancel() {
    goto('/');
  }

  async function handleLogin(e) {
    e.preventDefault();
    isLoading = true;
    errorMessage = '';

    try {
      // TODO: Replace with actual authentication logic
      // This is a placeholder for future API integration
      if (!email || !password) {
        errorMessage = 'Please enter both email and password';
        isLoading = false;
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      // For now, just redirect to home
      // In production, this would authenticate with your backend
      await goto('/');
    } catch (error) {
      errorMessage = error.message || 'Login failed. Please try again.';
      isLoading = false;
    }
  }

  function handleForgotPassword() {
    // TODO: Implement forgot password flow
    console.log('Forgot password clicked');
  }

  function handleRegister() {
    goto('/register');
  }
</script>

<svelte:head>
  <title>Sign In | Njoy Student Living</title>
  <meta name="description" content="Sign in to your Njoy Student Living account" />
</svelte:head>

<!-- Header -->
<header class="bg-njoy-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" class="flex items-center text-xl font-bold hover:opacity-80 transition-opacity" style="text-decoration: none; color: inherit;">
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
        <a href="/login" class="px-4 py-2 bg-njoy-green text-white rounded hover:bg-green-700 transition-colors" style="text-decoration: none; display: flex; align-items: center;">
          Sign in
        </a>
        <a href="/register" class="px-4 py-2 border border-gray-600 rounded text-white hover:bg-gray-700 transition-colors" style="text-decoration: none; display: flex; align-items: center;">
          Register
        </a>
      </div>
    </div>
  </div>
</header>

<!-- Main Content -->
<main class="bg-[#1E1E1E] min-h-screen pt-20 flex items-center justify-center px-4">
  <div class="w-full max-w-md">
    <!-- Login Card -->
    <div style="background-color: rgb(43, 43, 43);" class="rounded-lg shadow-2xl p-8">
      <!-- Logo and Title -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white">Login</h1>
      </div>

      <!-- Login Form -->
      <form on:submit={handleLogin} class="space-y-6">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            placeholder=""
            class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-njoy-green focus:border-transparent transition"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            bind:value={password}
            placeholder=""
            class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-njoy-green focus:border-transparent transition"
            required
          />
        </div>

        <!-- Error Message -->
        {#if errorMessage}
          <div class="p-3 bg-red-900 border border-red-600 text-red-200 rounded-lg text-sm">
            {errorMessage}
          </div>
        {/if}

        <!-- Forgot Password & Register Links -->
        <div class="space-y-2">
          <button
            type="button"
            on:click={handleForgotPassword}
            class="text-njoy-green hover:text-green-400 text-sm font-medium transition"
            style="text-decoration: none; background: none; border: none; padding: 0; cursor: pointer;"
          >
            Forgot Password?
          </button>
          <div>
            <span class="text-gray-400 text-sm">No Account? </span>
            <button
              type="button"
              on:click={handleRegister}
              class="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
              style="text-decoration: none; background: none; border: none; padding: 0; cursor: pointer;"
            >
              Register
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 pt-4">
          <button
            type="button"
            on:click={handleCancel}
            class="flex-1 px-4 py-3 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-900 hover:bg-opacity-20 transition"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 px-4 py-3 bg-njoy-green text-white font-medium rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  </div>
</main>

<style>
  input:focus::placeholder {
    color: transparent;
  }
</style>
