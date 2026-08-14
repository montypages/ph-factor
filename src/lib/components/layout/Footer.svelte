<script>
	import logo from '$lib/assets/phFactorLogoLarge.webp';
	import ContactForm from '../ui/ContactForm.svelte';
    import { resolve } from '$app/paths';
</script>

<footer class="backdrop-blur">
	<div class="footer-grid container">
		<div class="logo">
			<a href={resolve("/")}><img src={logo} alt="pH Factor Big Band" /></a>
		</div>
		<div class="links">
			<h2>Links</h2>
			<ul>
				<li><a href={resolve("/")}>Home</a></li>
				<li><a href={resolve("/listen")}>Listen</a></li>
				<li><a href={resolve("/calendar")}>Calendar</a></li>
				<li><a href={resolve("/about")}>About</a></li>
				<li><a href={resolve("/contact")}>Contact</a></li>
			</ul>
			<a
				class="social-link facebook"
				href="https://www.facebook.com/profile.php?id=100027318087029"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Facebook"
			>
				<i class="fa-brands fa-facebook"></i>
			</a>
		</div>
		<div class="contact">
			<h2>Contact</h2>
			<ContactForm btnTxtClr="var(--clr-dark)" />
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 5rem 0;
		background-color: hsl(0 0 0 / 0.7);
		color: var(--clr-light);
		margin-top: 4rem;
	}

	h2 {
		font-size: var(--size-2);
	}

	h3 {
		font-size: var(--size-1);
	}

	.footer-grid {
		display: grid;
		grid-template-areas: 'logo links contact';
		grid-template-columns: 200px 1fr 1fr;
		gap: 1rem;
		justify-items: center;
	}

	@media (max-width: 768px) {
		.footer-grid {
			grid-template-areas:
				'logo logo'
				'links contact';
			grid-template-columns: 1fr 1fr;
			justify-items: left;
		}
	}
	@media (max-width: 525px) {
		.footer-grid {
			grid-template-areas:
				'logo'
				'links'
				'contact';
			grid-template-columns: 1fr;
		}
	}

	.logo {
		grid-area: logo;
		justify-self: center;
	}

	.links {
		grid-area: links;
	}

	.contact {
		grid-area: contact;
		width: 100%;
	}

    .social-link {
        font-size: var(--size-2);
    }
</style>
