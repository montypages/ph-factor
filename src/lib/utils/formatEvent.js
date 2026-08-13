import { tiptapToHTML } from '$lib/utils/tiptap';

export function formatEvent(event) {
	if (!event.date_time) {
		return {
			...event,
			fullDate: null,
			day: '',
			month: '',
			date: '',
			time: '',
			eventDateTime: '',
			detailsHTML: event.details ? tiptapToHTML(event.details) : ''
		};
	}

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

		detailsHTML: event.details ? tiptapToHTML(event.details) : ''
	};
}