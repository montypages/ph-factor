<script>
	import Button from './Button.svelte';

	let name = '';
	let email = '';
	let message = '';
	let status = $state('');

	async function submitForm(e) {
		e.preventDefault();

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		});

		const result = await response.json();

		status = result.message;

		if (result.success) {
			name = '';
			email = '';
			message = '';
		}
	}
</script>

<div class="container copy backdrop-blur">
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
		<input type="text" name="website" tabindex="-1" autocomplete="off" style="display:none" />
		<Button
			onclick={() => {}}
			btnText="Send"
			btnColor="var(--clr-primary)"
			btnSize="var(--size-0)"
		/>
	</form>
	{#if status}
		<p>{status}</p>
	{/if}
</div>

<style>
</style>
