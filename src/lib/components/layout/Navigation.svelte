<script>
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/phFactorLogoSmall.webp';
	import NavButton from './NavButton.svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	const pages = [
		{
			name: 'Listen',
			url: '/listen'
		},
		{
			name: 'Calendar',
			url: '/calendar'
		},
		{
			name: 'About',
			url: '/about'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];

	let menuOpen = $state(false);
	let mobileNav;

	onMount(() => {
		function handleClickOutside(event) {
			if (menuOpen && mobileNav && !mobileNav.contains(event.target)) {
				menuOpen = false;
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav class="backdrop-blur">
	<div class="logo">
		<a
			href={resolve('/')}
			onclick={() => {
				menuOpen = false;
			}}
		>
			<img src={logo} width="100" alt="pH Factor" />
		</a>
	</div>
	<ul class="nav-links">
		{#each pages as p (p)}
			<li>
				<NavButton
					href={p.url}
					btnText={p.name}
					btnSize="var(--size--1)"
					active={page.url.pathname.startsWith(p.url)}
				/>
			</li>
		{/each}
	</ul>
	<div bind:this={mobileNav} class:open={menuOpen} class="mobile">
		<button
			class:open={menuOpen}
			onclick={() => {
				menuOpen = !menuOpen;
			}}
			class="hamburger"
			aria-label="hamburger menu"
		>
			<div class="top"></div>
			<div class="mid"></div>
			<div class="bottom"></div>
		</button>
		<ul class:open={menuOpen} class="mobile-nav-links">
			{#each pages as p (p)}
				<li>
					<NavButton
						onclick={() => {
							goto(resolve(p.url));
							menuOpen = false;
						}}
						btnText={p.name}
						btnSize="var(--size--1)"
						active={page.url.pathname.startsWith(p.url)}
						btnColor="var(--clr-secondary)"
					/>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		padding: 0.5em 2em;
		display: flex;
		align-items: center;
		gap: 0.5em;
		position: relative;
		z-index: 10;
	}

	.logo {
		width: 40px;
	}

	.nav-links {
		list-style-type: none;
		margin: 0;
		margin-left: auto;
		padding: 0;
		display: flex;
		gap: 1rem;
		justify-content: space-around;
	}

	.mobile {
		display: none;
	}

	@media (max-width: 600px) {
		.nav-links {
			display: none;
		}

		.mobile {
			display: flex;
			gap: 1rem;
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			transform: translateX(calc(100% - 40px));
			transition: transform 250ms ease;
		}

		.mobile.open {
			transform: translateX(0);
		}

		.mobile-nav-links {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: end;
			list-style-type: none;
			margin: 0;
			margin-left: auto;
			padding: 0;
			gap: 0.5rem;
			position: relative;
		}

		.mobile-nav-links.open {
			transform: translateX(0);
		}

		.hamburger {
			height: 40px;
			aspect-ratio: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 10px;
			position: relative;
			border: none;
			background-color: transparent;
			z-index: 10;
		}

		.hamburger > div {
			height: 2px;
			background-color: var(--clr-dark);
			opacity: 1;
		}

		.hamburger.open {
			transform: translateX();
		}

		.hamburger.open > div {
			transition:
				transform 250ms ease,
				opacity 150ms ease;
		}

		.hamburger.open .top {
			transform-origin: center left;
			transform: translate(4px, 5px) rotateZ(45deg);
		}

		.hamburger.open .mid {
			transform-origin: center right;
			transform: translate(-4px, -7px) rotateZ(-45deg);
		}

		.hamburger.open .bottom {
			transform: translateY(40px);
			opacity: 0;
		}
	}

	a {
		color: var(--clr-light);
		text-decoration: none;
	}
</style>
