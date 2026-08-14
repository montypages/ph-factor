<script>
	import { invalidateAll, goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import { supabase } from '$lib/supabase/client';
	import { resolve } from '$app/paths';

	let { data, children } = $props();

	const { user } = data;

	async function logout() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error(error);
			return;
		}

		await invalidateAll();

		await goto(resolve('/login'));
	}
</script>

<header class="backdrop-blur">
	<p class="signed-in">
		Signed in as {user.email}
	</p>

	<Button onclick={logout} btnText="Sign Out" btnSize="var(--size--1)" />
</header>

{@render children()}

<style>
	.signed-in {
		margin-top: 0;
		margin-bottom: 0.5em;
		font-size: var(--size--1);
	}

	header {
		padding: 0 1rem;
	}
</style>
