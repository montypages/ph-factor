<script>
	import PageTitle from '$lib/components/layout/PageTitle.svelte';
	import About from '$lib/content/about.md';
	import aboutImg from '$lib/assets/phFactorAtTulas.webp';
</script>

<PageTitle pageTitle="About" />

<section>
	<img src={aboutImg} alt="pH Factor Big Band at Tula's" />
	<div class="container copy backdrop-blur">
		<About />
	</div>
</section>

<style>
	img {
		margin: 0 auto;
		margin-top: 1rem;
		display: block;
		max-width: 360px;
		background-color: var(--clr-light);
		padding: 1rem;
		border-radius: var(--border-radius);
		box-shadow:
			0 0 10px hsl(0 0 0 / 0.5),
			inset 1px 1px 1px #fff,
			inset -1px -1px 1px #aaa;
		rotate: 7deg;
		position: relative;
		z-index: 1;
	}

	.copy {
		margin-bottom: 3rem;
	}
</style>
