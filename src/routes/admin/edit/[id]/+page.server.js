import { error } from '@sveltejs/kit';
import { getEventById } from '$lib/server/db/events.js';

export async function load({ locals, params }) {
	const event = await getEventById(locals.supabase, params.id);

	if (!event) {
		throw error(404, 'Event not found');
	}

	return {
		event
	};
}
