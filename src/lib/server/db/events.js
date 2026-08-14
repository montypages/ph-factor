import { formatEvent } from '$lib/utils/formatEvent';

export async function createUniqueEventSlug(supabase, currentSlug, currentId = null) {
	let slug = currentSlug;
	let number = 2;

	while (true) {
		let query = supabase.from('events').select('id').eq('slug', slug);

		if (currentId) {
			query = query.neq('id', currentId);
		}

		const { data, error } = await query.maybeSingle();

		if (error) {
			throw error;
		}

		if (!data) {
			return slug;
		}

		slug = `${currentSlug}-${number}`;
		number++;
	}
}

export async function getEvents(supabase) {
	const { data, error } = await supabase
		.from('events')
		.select('*')
		.order('date_time', { ascending: false });

	if (error) throw error;

	const formattedEvents = data.map(formatEvent);

	return formattedEvents;
}

export async function getPublishedEvents(supabase) {
	const { data, error } = await supabase
		.from('events')
		.select('*')
		.eq('published', true)
		.order('date_time', { ascending: false });

	if (error) throw error;

	const formattedEvents = data.map(formatEvent);

	return formattedEvents;
}

export async function getEventById(supabase, id) {
	const { data, error } = await supabase.from('events').select('*').eq('id', id).single();

	if (error) throw error;

	return data;
}

export async function createEvent(supabase, event) {
	const slug = await createUniqueEventSlug(supabase, event.slug);

	const { data: newEvent, error: eventError } = await supabase
		.from('events')
		.insert({
			name: event.name,
			slug: slug,
			venue: event.venue,
			address: event.address,
			city: event.city,
			state: event.state,
			zip: event.zip,
			date_time: event.date_time,
			details: event.details,
			published: event.published
		})
		.select()
		.single();

	if (eventError) {
		throw eventError;
	}

	return newEvent;
}

export async function updateEvent(supabase, id, event) {
	const slug = await createUniqueEventSlug(supabase, event.slug, id);

	const { data: updatedEvent, error: eventError } = await supabase
		.from('events')
		.update({
			name: event.name,
			slug: slug,
			venue: event.venue,
			address: event.address,
			city: event.city,
			state: event.state,
			zip: event.zip,
			date_time: event.date_time,
			details: event.details,
			published: event.published
		})
		.eq('id', id)
		.select()
		.single();

	if (eventError) {
		throw eventError;
	}

	return updatedEvent;
}

export async function deleteEvent(supabase, id) {
	const { error } = await supabase.from('events').delete().eq('id', id);

	if (error) {
		throw error;
	}

	return true;
}
