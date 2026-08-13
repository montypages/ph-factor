<script>
	import TipTapEditor from './TipTapEditor.svelte';
	import { goto } from '$app/navigation';
	import { createSlug } from '$lib/utils/createSlugs';
	import Button from '../ui/Button.svelte';
	import CalEvent from '../ui/CalEvent.svelte';
	import { tiptapToHTML } from '$lib/utils/tiptap';

	let { event = null } = $props();

	let name = $state(event?.name ?? '');
	let slug = $state(event?.slug ?? '');
	let venue = $state(event?.venue ?? '');
	let address = $state(event?.address ?? '');
	let city = $state(event?.city ?? '');
	let state = $state(event?.state ?? 'WA');
	let zip = $state(event?.zip ?? '');
	let date_time = $state(event?.date_time ?? '');
	let details = $state(
		event?.details ?? {
			type: 'doc',
			content: [
				{
					type: 'paragraph'
				}
			]
		}
	);

	let slugEdited = $state(!!event);

	$effect(() => {
		if (!slugEdited) {
			slug = createSlug(name);
		}
	});

	let previewEvent = $derived({
		name,
		location: venue,
		day: 'Sa',
		month: '08',
		date: '15',
		eventDateTime: 'Saturday, August 15, 2026, 7:30 PM',
		detailsHTML: tiptapToHTML(details)
	});

	async function submitEvent(publish) {
		const eventData = {
			name,
			slug,
			venue,
			address,
			city,
			state,
			zip,
			date_time,
			details,
			published: publish
		};

		const url = event ? `/api/admin/events/${event.id}` : '/api/admin/events';

		const method = event ? 'PUT' : 'POST';

		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(eventData)
			});

			if (!response.ok) {
				console.error(await response.text());
				return;
			}

			const result = await response.json();

			await goto('/admin');
		} catch (err) {
			console.error(err);
		}
	}
</script>

<CalEvent event={previewEvent} />

<form>
	<label>
		Name
		<input bind:value={name} />
	</label>

	<label>
		Slug
		<input
			bind:value={slug}
			oninput={() => {
				slugEdited = true;
			}}
		/>
	</label>

	<label>
		Venue
		<input bind:value={venue} />
	</label>

	<label>
		Address
		<input bind:value={address} />
	</label>

	<label>
		City
		<input bind:value={city} />
	</label>

	<label>
		State
		<input bind:value={state} />
	</label>

	<label>
		Zip
		<input bind:value={zip} />
	</label>

	<label>
		Date & Time
		<input type="datetime-local" bind:value={date_time} />
	</label>

	<label for="details"> Details </label>

	<TipTapEditor id="details" content={details} updateContent={(value) => (details = value)} />

	<div>
		<Button onclick={() => submitEvent(false)} type="button" btnText="Save Draft" />
		<Button onclick={() => submitEvent(true)} type="button" btnText="Publish" />
	</div>
</form>

<style>
	form {
		display: grid;
		width: min(90%, 500px);
		gap: 1rem;
		margin: 0 auto;
	}

	label {
		display: grid;
	}
</style>
