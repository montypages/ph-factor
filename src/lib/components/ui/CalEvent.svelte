<script>
	let { event, showDetails=false } = $props();

	const isUpcoming = showDetails || event.fullDate >= new Date();
</script>

<div class="cal-event box">
	<div class="cal-icon box">
		<h3 id="day">{event.day || 'We'}</h3>
		<div class="date flex-space-between">
			<p id="month">{event.month || '10'}</p>
			<p id="date">{event.date || '14'}</p>
		</div>
	</div>
	<div class="cal-details">
		<h3>{event.name || 'Event Title'}</h3>
		<p id="address">{event.location || 'Venue / Location'}</p>
		<p id="dateTime">{event.eventDateTime || 'Event date and time'}</p>
		{#if isUpcoming}
			<div id="details">
				{@html event.detailsHTML || '<p>Event details will appear here.</p>'}
			</div>
		{/if}
	</div>
</div>

<style>
	.cal-event {
		display: flex;
		align-items: top;
		gap: 1rem;
		border: 1px solid var(--clr-dark);
	}

	.cal-details h3 {
		font-size: var(--size-1);
		margin: 0;
	}

	.cal-details p {
		font-size: var(--size-0);
		margin: 0;
	}

	.cal-icon {
		padding: 5px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		height: 100px;
	}

	#day {
		font-family: var(--font-sans);
		font-weight: 700;
		text-align: center;
		margin: auto 0;
		width: 100px;
	}

	.date p {
		font-size: var(--size--1);
		margin: 0;
	}
</style>
