// ID, Name, Slug, Location, Date/time, Details

class Event {
	constructor(id, name, slug, location, dateTime, details) {
		((this.id = id),
			(this.name = name),
			(this.slug = slug),
			(this.location = location),
			(this.dateTime = dateTime),
			(this.details = details));
	}
}

const events = [
	new Event(
		'1',
		'pH Factor at Aurora Borealis',
		'ph-factor-at-aurora-borealis',
		'Aurora Borealis, 16708 Aurora Ave N, Shoreline, WA 98133, USA',
		new Date('2025-10-08T19:30:00Z'),
		'Join us at Aurora Borealis for a night of jazz.'
	),
	new Event(
		'2',
		'PH Factor at Sheridan Market',
		'ph-factor-at-sheridan-market',
		'Sheridan Market, 15348 Bothell Way NE, Lake Forest Park, WA 98155',
		new Date('2025-10-18T17:00:00Z'),
		'See you at Sheridan Market for some sweet tunes!'
	),
	new Event(
		'3',
		'pH Factor/ feat. Shorewood High School at the Royal Room',
		'ph-factor-feat-shorewood-high-school-at-the-royal-room',
		'The Royal Room Seattle, 5000 Rainier Ave S, Seattle, WA 98118, USA',
		new Date('2025-03-02T15:00:00Z'),
		'Come see the pH Factor Big Bannd with special guest Shorewood High School Jazz Band!'
	),
	new Event(
		'4',
		'pH Factor feat. Bothell High School',
		'ph-factor-feat-bothell-high-school',
		'The Royal Room Seattle, 5000 Rainier Ave S, Seattle, WA 98118, USA',
		new Date('2024-11-24T15:00:00Z'),
		'Tickets $20 advance/$25 at the door:https://www.strangertickets.com/events/159405593/ph-factorbothell-hs-jazz-bandFacebook:https://www.facebook.com/events/816884667034409/'
	),
	new Event(
		'5',
		'pH Factor at Mountlake Terrace High School',
		'ph-factor-at-mountlake-terrace-high-school',
		'Mountlake Terrace High School, 21801 44th Ave W, Mountlake Terrace, WA 98043, USA',
		new Date('2024-10-25T19:00:00Z'),
		'Come see pH Factor play with special guest Mountlake Terrace High School Jazz Band in the Mountlake Terrace High School Theater.'
	)
];
