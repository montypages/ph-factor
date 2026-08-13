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
