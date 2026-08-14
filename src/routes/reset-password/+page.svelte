<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { supabase } from '$lib/supabase/client';
	import { goto } from '$app/navigation';

	let password = $state('');
	let confirmPassword = $state('');
	let error = $state('');
	let success = $state(false);
	let loading = $state(false);

	async function updatePassword() {
		error = '';

		if (password !== confirmPassword) {
			error = 'Passwords do not match.';
			return;
		}

		if (password.length < 8) {
			error = 'Password must be at least 8 characters.';
			return;
		}

		loading = true;

		const { error: updateError } = await supabase.auth.updateUser({
			password
		});

		loading = false;

		if (updateError) {
			error = updateError.message;
			return;
		}

		success = true;

		setTimeout(() => {
			goto('/login');
		}, 1000);
	}
</script>

<div class="container backdrop-blur wrapper">
	<h1>Reset Password</h1>

	{#if success}
		<p>
			Your password has been updated successfully.
			<a href="/login">Click here</a> if you are not re-directed to login.
		</p>
	{:else if loading}
		<p>Updating your password...</p>
	{:else}
		<p>Enter your new password below.</p>

		<form
			onsubmit={(e) => {
				e.preventDefault();
				updatePassword();
			}}
		>
			<label for="password">
				New Password
				<input
					type="password"
					id="password"
					name="password"
					bind:value={password}
					required
					autocomplete="new-password"
				/>
			</label>

			<label for="confirm-password">
				Confirm Password
				<input
					type="password"
					id="confirm-password"
					name="confirm-password"
					bind:value={confirmPassword}
					required
					autocomplete="new-password"
				/>
			</label>

			<Button
				type="submit"
				btnText={loading ? 'Updating...' : 'Update Password'}
				btnSize="var(--size-0)"
				disabled={loading}
			/>
		</form>
	{/if}

	{#if error}
		<p class="error">{error}</p>
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

	.error {
		margin-top: 1rem;
	}

	.success {
		margin-top: 1rem;
	}
</style>
