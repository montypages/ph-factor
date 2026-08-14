<script>
	import favicon from '$lib/assets/phFactorLogoSmall.webp';
	import '../styles/app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rock+Salt&display=swap"
		rel="stylesheet"
	/>
	<script src="https://kit.fontawesome.com/405399056e.js" crossorigin="anonymous"></script>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer>
	</script>
</svelte:head>

<div class="full-page">
	<Navigation />

	<main>
		{@render children()}
	</main>

	<Footer categories={data.categories} />
</div>

<style>
	.full-page {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>
