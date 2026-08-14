<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/Button.svelte';

	let { form } = $props();
</script>

<div class="container backdrop-blur wrapper">
	<h1>Forgot Password</h1>

	<p>Enter your email below. You will be sent an email to reset your password.</p>

	<form method="POST" use:enhance>
		<label for="email">
			Email
			<input type="email" name="email" id="email" required />
		</label>

		<Button type="submit" btnText="Send Reset Link" btnSize="var(--size-0)" />
	</form>

	{#if form?.success}
		<p class="success">
			If an account exists for that email address, a password reset link has been sent.
		</p>
	{/if}

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
</div>

<style>
	.wrapper {
		padding: 1rem;
		margin: 2rem auto;
	}

	label {
		margin-bottom: 1rem;
	}

	.success {
		margin-top: 1rem;
	}

	.error {
		margin-top: 1rem;
	}
</style>
