<script>
	import Button from '../ui/Button.svelte';
	import { goto } from '$app/navigation';

	let { event, onDelete } = $props();

</script>

<div class="cal-event box">
	<div class="cal-icon box">
		<h3 id="day">{event.day}</h3>
		<div class="date flex-space-between">
			<p id="month">{event.month}</p>
			<p id="date">{event.date}</p>
		</div>
	</div>
	<div class="cal-details">
		<h3>{event.name}</h3>
		<p id="address">{event.location}</p>
		<p id="dateTime">{event.eventDateTime}</p>
		<div id="details">
			{@html event.detailsHTML}
		</div>
	</div>
	<div class="actions">
		<p id="published">{event.published ? 'Published' : 'Draft'}</p>
		<Button
			btnText="Edit"
			onclick={() => {
				goto(`/admin/edit/${event.id}`);
			}}
			btnSize="var(--size--1)"
			btnColor="var(--clr-secondary)"
		/>
		<Button btnText="Delete" onclick={() => onDelete(event)} btnSize="var(--size--1)" />
	</div>
</div>

<style>
	.cal-event {
		display: flex;
		align-items: top;
		gap: 1rem;
		border: 1px solid var(--clr-dark);
	}

	.cal-details {
		flex: 5;
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
		flex: 0 0;
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

	.actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		margin-left: auto;
		flex: 1;
	}

	#published {
		font-size: var(--size-1);
	}
</style>
