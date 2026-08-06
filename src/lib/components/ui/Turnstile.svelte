<script>
	import { onMount } from 'svelte';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

	let { onSuccess } = $props();

	let container;

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
		script.async = true;
		script.defer = true;

		document.head.appendChild(script);

		script.onload = () => {
			window.turnstile.render(container, {
				sitekey: PUBLIC_TURNSTILE_SITE_KEY,

				appearance: 'interaction-only',

				callback(token) {
					onSuccess(token);
				},

				'expired-callback'() {
					onSuccess(null);
				}
			});
		};
	});
</script>

<div bind:this={container}></div>
