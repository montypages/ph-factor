<script>
	let {
		onclick,
		btnText,
		btnSize = 'var(--size-1)',
		btnColor = 'var(--clr-primary-400)',
		disabled = false
	} = $props();
</script>

<button 
	{onclick} 
	style:--btnSize={btnSize}
	style:--btnColor={btnColor} 
	{disabled}
>
	{btnText}
</button>

<style>
	button {
		padding: 0.5em 1.5em;
		background-color: var(--btnColor, transparent);
		opacity: 0.7;
		color: inherit;
		position: relative;
		border: 1px solid;
		border-radius: 5px;
		box-shadow: 0 0 0.2em var(--clr-dark-50);
		font-family: var(--font-sans);
		font-size: var(--btnSize);
		text-transform: capitalize;
		transition: opacity 200ms ease;
	}
	button:hover,
	button:focus {
		opacity: 1;
		box-shadow:
			0 0 0.5em var(--btnColor),
			0 0 0.2em hsl(0 0 0 / 0.5);
	}
	button:active {
		scale: 0.99;
		opacity: 90%;
	}
</style>
