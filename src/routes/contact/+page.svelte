<script>
	import PageTitle from '$lib/components/layout/PageTitle.svelte';
	import ContactForm from '$lib/components/ui/ContactForm.svelte';
</script>

<PageTitle pageTitle="Contact" />

<section>
	<div class="container backdrop-blur form-container">
		<h2>We want to hear from you!</h2>
		<ContactForm btnColor="var(--clr-secondary)" />
	</div>
</section>

<style>
	h2 {
		text-align: center;
		font-size: var(--size-2);
		margin: 0;
		line-height: 1.5;
	}

	section {
		margin: 4rem 0;
	}

	.form-container {
		padding: 1rem;
	}
</style>
