import { supabase } from '$lib/server/supabase';
import { tiptapToHTML } from '$lib/utils/tiptap';

function formatEvent(event) {
	const [datePart, timePart] = event.date_time.split('T');

	const [year, month, day] = datePart.split('-').map(Number);
	const [hour, minute] = timePart.split(':').map(Number);

	const date = new Date(year, month - 1, day, hour, minute);

	return {
		...event,

        fullDate: date,

		day: date
			.toLocaleDateString('en-US', {
				weekday: 'short'
			})
			.slice(0, 2),

		month: date.toLocaleDateString('en-US', {
			month: '2-digit'
		}),

		date: date.toLocaleDateString('en-US', {
			day: '2-digit'
		}),

		time: date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit'
		}),

		eventDateTime: date.toLocaleString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		}),

        detailsHTML: tiptapToHTML(event.details)
	};
}

export async function getEvents() {
	const { data, error } = await supabase
		.from('events')
		.select('*')
		.order('date_time', { ascending: true });

	if (error) throw error;

    const formattedEvents = data.map(formatEvent);

	return formattedEvents;
}
