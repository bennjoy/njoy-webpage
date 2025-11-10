<svelte:head>
	<title>About Njoy Student Living</title>
	<meta name="description" content="About Njoy Student Living - Premium student accommodation in Manchester and Leeds" />
</svelte:head>

<!-- Header -->
<header class="bg-njoy-dark text-white fixed top-0 left-0 w-full z-50 shadow-md">
	<div class="container mx-auto px-4 py-4 flex justify-between items-center">
		<!-- Logo -->
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
				
				<a href="/about" class="text-njoy-green transition-colors" style="text-decoration: none;">About</a>
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

<div class="text-column bg-njoy-dark text-white min-h-screen pt-20 p-8">
	<h1 class="text-4xl font-bold mb-8 text-njoy-green">About Njoy Student Living</h1>

	<p class="text-lg mb-6">
		Welcome to Njoy Student Living - your gateway to premium student accommodation in Manchester and Leeds.
		We specialize in providing unique, all-inclusive living experiences designed specifically for students.
	</p>

	<h2 class="text-2xl font-semibold mb-4 text-njoy-green">Our Properties</h2>
	<p class="mb-6">
		From modern apartments to stylish studios, our carefully selected properties offer the perfect 
		balance of comfort, convenience, and community. Each location is chosen for its proximity to 
		universities and essential amenities.
	</p>

	<h2 class="text-2xl font-semibold mb-4 text-njoy-green">What We Offer</h2>
	<ul class="list-disc list-inside mb-6 space-y-2">
		<li>All-inclusive pricing with bills included</li>
		<li>Flexible contract lengths (45 weeks or 51 weeks)</li>
		<li>Modern, fully furnished accommodations</li>
		<li>Prime locations in Manchester and Leeds</li>
		<li>Dedicated student support</li>
	</ul>

	<p class="text-lg">
		Ready to find your perfect student home? <a href="/locations/manchester" class="text-njoy-green hover:underline">Browse our Manchester properties</a> 
		or <a href="/locations/leeds" class="text-njoy-green hover:underline">explore Leeds options</a>.
	</p>
</div>

<style>
	.text-column {
		max-width: 48rem;
		margin: 0 auto;
	}
</style>
