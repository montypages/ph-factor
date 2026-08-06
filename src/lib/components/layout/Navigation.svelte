<script>
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/phFactorLogoSmall.webp';
	import NavButton from './NavButton.svelte';
	import { page } from '$app/state';

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
</script>

<nav class="backdrop-blur">
	<div class="logo">
		<a href="/">
			<img src={logo} width="100" alt="pH Factor" />
		</a>
	</div>
	<ul class="nav-links">
		{#each pages as p}
			<li>
				<NavButton
					onclick={() => {
						goto(p.url);
					}}
					btnText={p.name}
					btnSize="var(--size--1)"
					active={page.url.pathname.startsWith(p.url)}
				/>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding: 0.5em 2em;
		display: flex;
		align-items: center;
		gap: 0.5em;
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

	a {
		color: var(--clr-light);
		text-decoration: none;
	}
</style>
