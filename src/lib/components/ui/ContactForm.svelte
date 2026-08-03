<script>
	import Button from './Button.svelte';

    let { btnColor, btnTxtClr } = $props();

	let name = $state('');
	let email = $state('');
	let message = $state('');
    let website = $state('');
	let status = $state({});
    let submitting = $state(false);

	async function submitForm(e) {
		e.preventDefault();
        submitting = true;

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message,
                website
			})
		});

		const result = await response.json();

		status = result;
        submitting = false;

		if (result.success) {
			name = '';
			email = '';
			message = '';
		}

	}
</script>

<div class="container copy backdrop-blur">
	{#if !status.success}
		<form onsubmit={submitForm}>
			<label for="name">
				Name
				<input type="text" name="name" id="name" bind:value={name} />
			</label>
			<label for="email">
				Email
				<input type="email" name="email" id="email" bind:value={email} />
			</label>
			<label for="message">
				Message
				<textarea name="message" id="message" rows="6" bind:value={message}></textarea>
			</label>
			<input
				class="hpot"
				type="text"
				name="website"
                bind:value={website}
				tabindex="-1"
				autocomplete="off"
			/>
			<Button
				onclick={() => {}}
				btnText={submitting ? "Sending..." : "Send"}
				{btnColor}
                {btnTxtClr}
				btnSize="var(--size-0)"
                disabled={submitting}
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
