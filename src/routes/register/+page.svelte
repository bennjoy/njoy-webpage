<script>
  import { goto } from '$app/navigation';
  
  let email = '';
  let password = '';
  let confirmPassword = '';
  let isLoading = false;
  let errorMessage = '';

  function handleCancel() {
    goto('/');
  }

  async function handleRegister(e) {
    e.preventDefault();
    isLoading = true;
    errorMessage = '';

    try {
      if (!email || !password || !confirmPassword) {
        errorMessage = 'Please fill in all fields';
        isLoading = false;
        return;
      }

      if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match';
        isLoading = false;
        return;
      }

      if (password.length < 8) {
        errorMessage = 'Password must be at least 8 characters';
        isLoading = false;
        return;
      }

      // TODO: Replace with actual registration logic
      // This is a placeholder for future API integration
      await new Promise(resolve => setTimeout(resolve, 500));

      // For now, just redirect to home
      // In production, this would register with your backend
      await goto('/');
    } catch (error) {
      errorMessage = error.message || 'Registration failed. Please try again.';
      isLoading = false;
    }
  }

  function handleLogin() {
    goto('/login');
  }
</script>

<svelte:head>
  <title>Register | Njoy Student Living</title>
  <meta name="description" content="Create a new Njoy Student Living account" />
</svelte:head>

<!-- Header -->
<header class="bg-njoy-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" class="flex items-center text-xl font-bold hover:opacity-80 transition-opacity" style="text-decoration: none; color: inherit;">
      <img src="/favicon.svg" alt="Njoy Logo" class="h-8 w-8 mr-3" />
      Njoy<span class="ml-1 text-njoy-green font-poppins">Student Living</span>
    </a>
  </div>
</header>

<!-- Main Content -->
<main class="bg-[#1E1E1E] min-h-screen pt-20 flex items-center justify-center px-4">
  <div class="w-full max-w-md">
    <!-- Register Card -->
    <div style="background-color: rgb(245, 245, 245);" class="rounded-lg shadow-2xl p-8">
      <!-- Logo and Title -->
      <div class="text-center mb-8">
        <img src="/favicon.svg" alt="Njoy Logo" class="h-12 w-12 mx-auto mb-4" />
        <h1 class="text-3xl font-bold text-gray-900">Register</h1>
      </div>

      <!-- Registration Form -->
      <form on:submit={handleRegister} class="space-y-6">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            placeholder=""
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-njoy-green focus:border-transparent transition"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            bind:value={password}
            placeholder=""
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-njoy-green focus:border-transparent transition"
            required
          />
          <p class="text-xs text-gray-500 mt-1">At least 8 characters</p>
        </div>

        <!-- Confirm Password Input -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            bind:value={confirmPassword}
            placeholder=""
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-njoy-green focus:border-transparent transition"
            required
          />
        </div>

        <!-- Error Message -->
        {#if errorMessage}
          <div class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {errorMessage}
          </div>
        {/if}

        <!-- Login Link -->
        <div>
          <span class="text-gray-600 text-sm">Already have an account? </span>
          <button
            type="button"
            on:click={handleLogin}
            class="text-blue-500 hover:text-blue-600 text-sm font-medium transition"
            style="text-decoration: none; background: none; border: none; padding: 0; cursor: pointer;"
          >
            Login
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 pt-4">
          <button
            type="button"
            on:click={handleCancel}
            class="flex-1 px-4 py-3 border-2 border-red-600 text-red-600 font-medium rounded-lg hover:bg-red-50 transition"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 px-4 py-3 bg-njoy-green text-white font-medium rounded-lg hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
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
