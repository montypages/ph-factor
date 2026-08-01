<script>
	let { onclick, btnText, btnSize = 'var(--size-1)', btnColor = 'var(--clr-primary-100)', disabled = false } = $props();
</script>

<button {onclick} style="--btnSize: {btnSize}; --btnColor: {btnColor}" {disabled}>{btnText}</button>

<style>
	button {
		--btnSize: var(--size-1);
		--btnColor: var(--clr-primary-100);
		padding: 0.5em 1.5em;
		background-color: var(--btnColor, transparent);
		color: inherit;
		position: relative;
		border: 1px solid;
		border-radius: 5px;
		box-shadow: 0 0 0.2em var(--clr-dark-50);
		font-family: var(--font-sans);
		font-size: var(--btnSize);
		text-transform: capitalize;
		transition: background-color 200ms ease;
	}
	button:hover,
	button:focus {
		--btnColor: var(--clr-primary-800);
		box-shadow:
			0 0 0.5em var(--btnColor),
			0 0 0.2em hsl(0 0 0 / 0.5);
	}
	button:active {
		scale: 0.99;
		opacity: 90%;
	}
</style>
