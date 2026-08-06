<script>
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/phFactorLogoSmall.webp'
	import NavButton from './NavButton.svelte';
	import { page } from '$app/state';


</script>

<nav class="backdrop-blur">
	<div class="logo">
		<a href="/">
			<img src={logo} width="100" alt="pH Factor" />
		</a>
	</div>
	<ul class="nav-links">
		<li><NavButton onclick={() => {goto('/listen');}} btnText="Listen" btnSize="var(--size--1)" active={page.url.pathname.startsWith('/listen')} /> </li>
		<li><NavButton onclick={() => {goto('/calendar');}} btnText="Calendar" btnSize="var(--size--1)" active={page.url.pathname.startsWith('/calendar')} /> </li>
		<li><NavButton onclick={() => {goto('/about');}} btnText="About" btnSize="var(--size--1)" active={page.url.pathname.startsWith('/about')} /> </li>
		<li><NavButton onclick={() => {goto('/contact');}} btnText="Contact" btnSize="var(--size--1)" active={page.url.pathname.startsWith('/contact')} /> </li>
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
