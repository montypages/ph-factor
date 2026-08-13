import { supabase } from '$lib/server/supabase';
import { formatEvent } from '$lib/utils/formatEvent';

export async function getEvents() {
	const { data, error } = await supabase
		.from('events')
		.select('*')
		.order('date_time', { ascending: true });

	if (error) throw error;

    const formattedEvents = data.map(formatEvent);

	return formattedEvents;
}

export async function createEvent(supabase, event) {
	// 1. Create the event
	const { data: newEvent, error: eventError } = await supabase
		.from('events')
		.insert({
			name: event.name,
			slug: event.slug,
			venue: event.venue,
			address: event.address,
			city: event.city,
			state: event.state,
			zip: event.zip,
			date_time: event.date_time,
			details: event.details
		})
		.select()
		.single();

	if (eventError) {
		throw eventError;
	}

	// 2. Return the created event
	return newEvent;
}