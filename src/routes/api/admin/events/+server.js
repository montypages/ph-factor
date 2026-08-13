import { json } from '@sveltejs/kit';
import { createEvent } from '$lib/server/db/events.js';

export async function POST({ locals, request }) {
	if (!locals.session) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	const event = await request.json();

	const newEvent = await createEvent(locals.supabase, event);

	return json(newEvent);
}
