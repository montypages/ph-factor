<script>
	import Button from './Button.svelte';
	import Turnstile from './Turnstile.svelte';

	let turnstileToken = $state('');

	function handleTurnstileToken(token) {
		turnstileToken = token;
	}

	let { btnColor, btnTxtClr } = $props();

	// let name = $state('');
	// let email = $state('');
	// let message = $state('');
	// let website = $state('');
	let status = $state({});
	let submitting = $state(false);

	async function submitForm(e) {
		e.preventDefault();
		submitting = true;

		const form = e.currentTarget;
		const formData = new FormData(form);

		const response = await fetch('/api/contact', {
			method: 'POST',
			// headers: {
			// 	'Content-Type': 'application/json'
			// },
			body: formData
		});

		const result = await response.json();

		status = result;
		submitting = false;

		if (result.success) {
			form.reset();
		}
	}
</script>

<div class="container copy backdrop-blur">
	{#if !status.success}
		<form onsubmit={submitForm}>
			<label for="name">
				Name
				<input type="text" name="name" id="name" />
			</label>
			<label for="email">
				Email
				<input type="email" name="email" id="email" />
			</label>
			<label for="message">
				Message
				<textarea name="message" id="message" rows="6"></textarea>
			</label>
			<input class="hpot" type="text" name="website" tabindex="-1" autocomplete="off" />
			<Turnstile onSuccess={handleTurnstileToken} />
			<Button
				onclick={() => {}}
				btnText={submitting ? 'Sending...' : 'Send'}
				{btnColor}
				{btnTxtClr}
				btnSize="var(--size-0)"
				disabled={submitting || !turnstileToken}
				type="submit"
			/>
		</form>
	{/if}
	{#if status}
		{@html status.message}
	{/if}
</div>

<style>
	.hpot {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
</style>
