<script>
	import { resolve } from '$app/paths';

	let {
		href = null,
		onclick,
		btnText,
		btnSize = 'var(--size-1)',
		btnColor = 'var(--clr-primary)',
		btnTxtClr = 'inherit',
		disabled = false,
		active = false
	} = $props();
</script>

{#if href}
	<a
		href={resolve(href)}
		style:--btn-size={btnSize}
		style:--btn-color={btnColor}
		style:--btn-text-color={btnTxtClr}
		class:active
		data-sveltekit-preload-data="hover"
	>
		{btnText}
	</a>
{:else}
	<button
		{onclick}
		style:--btn-size={btnSize}
		style:--btn-color={btnColor}
		style:--btn-text-color={btnTxtClr}
		{disabled}
		class:active
	>
		{btnText}
	</button>
{/if}

<style>
	button,
	a {
		display: inline-block;
		padding: 0.5em 1.5em;
		background-color: var(--btn-color, transparent);
		opacity: 0.7;
		color: var(--btn-text-color, inherit);
		position: relative;
		border: 1px solid;
		border-radius: 5px;
		box-shadow: 0 0 0.2em var(--clr-dark-50);
		font-family: var(--font-sans);
		font-size: var(--btn-size);
		text-transform: uppercase;
		text-decoration: none;
		transition: opacity 200ms ease;
	}

	button:hover,
	button:focus,
	a:hover,
	a:focus {
		opacity: 1;
		box-shadow:
			0 0 0.5em var(--btn-color),
			0 0 0.2em hsl(0 0 0 / 0.5);
	}

	button:active,
	a:active {
		scale: 0.99;
		opacity: 90%;
	}

	button:disabled {
		background-color: hsl(0 0 50%);
		opacity: 0.5;
	}

	button.active,
	a.active {
		opacity: 1;
	}
</style>
