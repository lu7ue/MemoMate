<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="relative">
	<!-- Nav Bar -->
	<NavBar />

	<!-- Content Area -->
	<main class="mt-16 mb-20 px-4 sm:px-6 lg:px-8">
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>
