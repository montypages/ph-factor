import { getEvents } from '$lib/server/db/events.js'

export async function load({ locals }) {
    return {
        events: await getEvents(locals.supabase)
    }
}