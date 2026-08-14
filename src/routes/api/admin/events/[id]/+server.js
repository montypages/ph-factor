import { json } from '@sveltejs/kit';
import { updateEvent, deleteEvent } from '$lib/server/db/events.js';

export async function PUT({ locals, params, request }) {
	if (!locals.session) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	const event = await request.json();

	const updatedEvent = await updateEvent(
		locals.supabase,
		params.id,
		event
	);

	return json(updatedEvent);
}

export async function DELETE({ locals, params }) {
	if (!locals.session) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	await deleteEvent(locals.supabase, params.id);

	return json({ success: true });
}