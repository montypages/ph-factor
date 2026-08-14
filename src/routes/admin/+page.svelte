<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import AdminCalEvent from '$lib/components/admin/AdminCalEvent.svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();
	const events = data.events;

	async function handleDelete(event) {
		const confirmed = confirm(`Are you sure you want to delete "${event.name}"?`);

		if (!confirmed) return;

		const response = await fetch(`/api/admin/events/${event.id}`, {
			method: 'DELETE'
		});

		if (!response.ok) {
			console.error(await response.text());
			return;
		}

		location.reload();
	}
</script>

<div class="container">
	<h1>Admin Dashboard</h1>
</div>

<div class="container padding-top-bottom">
	<Button onclick={() => goto(resolve('/admin/new'))} btnText="Create New Event" />
</div>

<div class="container">
	<ul>
		{#each events as event (event.id)}
			<li class="post-item">
				<AdminCalEvent {event} onDelete={handleDelete} />
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0;
		padding: 0;
	}

	li + li {
		margin-top: 0.5em;
	}
</style>
