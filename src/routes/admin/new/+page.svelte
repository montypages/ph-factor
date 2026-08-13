<script>
	import EventForm from '$lib/components/admin/EventForm.svelte';
	import CalEvent from '$lib/components/ui/CalEvent.svelte';


    let { data } = $props();
</script>

<h1>Create New Post</h1>

<EventForm />