<script>
	import heroImg from '$lib/assets/phFactorLogoLarge.webp';
	import Button from '../ui/Button.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<div class="hero-wrapper">
	<div class="hero">
		<div class="hero-img">
			<img src={heroImg} alt="pH Factor Big Band" />
		</div>
		<div class="hero-text">
			<h1 class="title">The most interesting</h1>
			<h1 class="title">big band in Seattle</h1>
			<div class="cta">
				<Button
					onclick={() => goto(resolve('/listen'))}
					btnText="Listen Now"
					btnColor="var(--clr-secondary)"
				/>
				<Button
					onclick={() => goto(resolve('/contact'))}
					btnText="Contact"
					btnColor="var(--clr-primary)"
					btnSize="var(size-0)"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.hero-wrapper {
		display: flex;
		justify-content: center;
		min-height: 80svh;
	}

	.hero {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
	}

	.hero-img {
		width: 18rem;
	}

	.title {
		font-size: 3rem;
		line-height: 1;
		margin: 0;
		position: relative;
		left: -3.2rem;
		top: 0.5em;
		text-wrap: balance;
	}

	.title:last-of-type {
		left: -1rem;
		margin-bottom: 1rem;
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
	}

	@media (max-width: 970px) {
		.hero {
			flex-direction: column;
			gap: 0;
			align-items: center;
		}

		.title {
			top: -0.7em;
			text-align: center;
			left: 0;
		}

		.title:last-of-type {
			left: 0.25em;
			margin-bottom: 0;
		}

		.cta {
			align-items: center;
		}
	}
</style>
