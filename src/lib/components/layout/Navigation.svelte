<script>
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/phFactorLogoSmall.webp'
	import Button from '../ui/Button.svelte';


</script>

<nav class="backdrop-blur">
	<div class="logo">
		<a href="/">
			<img src={logo} width="100" alt="pH Factor" />
		</a>
	</div>
	<ul class="nav-links">
		<!-- <li class="nav-link"><a href="/about">About</a></li>
		<li class="nav-link"><a href="/blog">Blog</a></li> -->
		<li><Button onclick={() => {goto('/listen');}} btnText="Listen" btnSize="var(--size--1)" /> </li>
		<li><Button onclick={() => {goto('/calendar');}} btnText="Calendar" btnSize="var(--size--1)" /> </li>
		<li><Button onclick={() => {goto('/about');}} btnText="About" btnSize="var(--size--1)" /> </li>
		<li><Button onclick={() => {goto('/contact');}} btnText="Contact" btnSize="var(--size--1)" /> </li>
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

	h3 {
		margin: 0;
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

	.nav-links a {
		font-family: var(--font-sans);
		padding: 0.5em 2em;
		&:hover {
			text-decoration: underline;
		}
	}

	.nav-link {
		transition: scale 240ms ease;
		&:hover {
			scale: 1.05;
		}
	}
</style>
