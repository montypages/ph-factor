<script>

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import AdminCalEvent from '$lib/components/admin/AdminCalEvent.svelte';
	import { events } from '$lib/data/events.js';

	const sortEvents = events.sort((a, b) => a.dateTime - b.dateTime);
	let { data } = $props();

	async function deletePost(id) {
		const confirmed = confirm('Are you sure you want to delete this post?');

		if (!confirmed) return;

		await fetch(`/api/admin/posts/${id}`, {
			method: 'DELETE'
		});

		location.reload();
	}
</script>

<div class="container">
	<h1>Admin Dashboard</h1>
</div>

<div class="container padding-top-bottom">
	<Button onclick={() => goto('/admin/new')} btnText="Create New Event" />
</div>

<div class="container">
	<ul>
		{#each sortEvents as event}
			<li class="post-item">
				<AdminCalEvent {event} />
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
