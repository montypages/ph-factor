<script>
	import PageTitle from '$lib/components/layout/PageTitle.svelte';
	import CalEvent from '$lib/components/ui/CalEvent.svelte';
	// import { events } from '$lib/data/events';

	// const sortEvents = events.sort((a, b) => a.dateTime - b.dateTime);
	let { data } = $props();
	const { events } = data;
	const today = new Date();
</script>

<PageTitle pageTitle="Calendar" />

<section id="upcoming">
	<div class="container backdrop-blur">
		<h2>Upcoming Events</h2>
		<ul>
			{#each events as event}
				{#if event.fullDate >= today}
					<li><CalEvent {event} /></li>
				{/if}
			{/each}
		</ul>
	</div>
</section>

<section id="previous">
	<div class="container backdrop-blur">
		<h2>Previous Events</h2>
		<ul>
			{#each events as event}
				{#if event.fullDate < today}
					<li><CalEvent {event} /></li>
				{/if}
			{/each}
		</ul>
	</div>
</section>

<style>
	li + li {
		margin-top: 0.5rem;
	}

	section {
		margin: 8rem 0;
	}

	.container {
		padding: 1.5rem;
		border-radius: var(--border-radius);
	}
</style>
