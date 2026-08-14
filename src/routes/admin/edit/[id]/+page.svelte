<script>
	import EventForm from '$lib/components/admin/EventForm.svelte';

	let { data } = $props();
</script>
<div class="container">
	
	<h1>Edit Event</h1>
	
	<EventForm event={data.event} />
</div>
