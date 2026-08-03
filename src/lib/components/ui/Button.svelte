<script>
	let {
		onclick,
		btnText,
		btnSize = 'var(--size-1)',
		btnColor = 'var(--clr-primary)',
		btnTxtClr = 'inherit',
		disabled = false
	} = $props();
</script>

<button 
	{onclick} 
	style:--btn-size={btnSize}
	style:--btn-color={btnColor} 
	style:--btn-text-color={btnTxtClr}
	{disabled}
>
	{btnText}
</button>

<style>
	button {
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
		text-transform: capitalize;
		transition: opacity 200ms ease;
	}
	button:hover,
	button:focus {
		opacity: 1;
		box-shadow:
			0 0 0.5em var(--btn-color),
			0 0 0.2em hsl(0 0 0 / 0.5);
	}
	button:active {
		scale: 0.99;
		opacity: 90%;
	}
	button:disabled {
		background-color: hsl(0 0 50%);
		opacity: 0.5;
	}
</style>
