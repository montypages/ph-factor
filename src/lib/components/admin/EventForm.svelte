<script>
	import TipTapEditor from './TipTapEditor.svelte';
	import { goto } from '$app/navigation';
	import { createSlug } from '$lib/utils/createSlugs';
	import Button from '../ui/Button.svelte';
	import CalEvent from '../ui/CalEvent.svelte';
	import { formatEvent } from '$lib/utils/formatEvent';
	import { resolve } from '$app/paths';

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

	let previewEvent = $derived(
		formatEvent({
			name,
			venue,
			address,
			city,
			state,
			zip,
			date_time,
			details,
			location: [venue, address, city, `${state} ${zip}`].filter(Boolean).join(', ')
		})
	);

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

			// const result = await response.json();

			await goto(resolve('/admin'));
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="form-wrapper">
	<div class="event-container backdrop-blur">
		<p>Preview</p>
		<CalEvent showDetails={true} event={previewEvent} />
	</div>

	<form>
		<label>
			Date & Time
			<input type="datetime-local" bind:value={date_time} />
		</label>

		<label>
			Event
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

		<div class="form-row">
			<label class="city">
				City
				<input bind:value={city} />
			</label>
			<label class="state">
				State
				<input bind:value={state} />
			</label>
			<label class="zip">
				Zip
				<input bind:value={zip} />
			</label>
		</div>

		<div class="form-col">
			<label for="details"> Details </label>
			<TipTapEditor id="details" content={details} updateContent={(value) => (details = value)} />
		</div>

		<div class="cta-container">
			<Button onclick={() => goto(resolve('/admin'))} type="button" btnText="Cancel" btnSize="var(--size-0)" />
			<Button onclick={() => submitEvent(false)} type="button" btnText="Save Draft" btnSize="var(--size-0)" />
			<Button
				onclick={() => submitEvent(true)}
				type="button"
				btnText="Publish"
				btnColor="var(--clr-secondary)" btnSize="var(--size-0)"
			/>
		</div>
	</form>
</div>

<style>
	form {
		width: min(90%, 800px);
		gap: 1rem;
		margin: 0 auto;
	}

	label {
		display: grid;
	}

	.form-wrapper {
		padding: 1rem;
		position: relative;
	}

	.event-container {
		position: sticky;
		top: 1rem;
		z-index: 2;
		margin-bottom: 1rem;
	}

	.event-container p {
		margin: 0;
	}

	.form-row {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.city {
		flex: 4;
	}

	.state input {
		width: 4em;
	}

	.zip {
		flex: 1;
	}

	.cta-container {
		margin-top: 1rem;
	}

	@media (max-width: 960px) {
		.cta-container {
			display: grid;
			gap: 0.5rem;
		}
	}
</style>
