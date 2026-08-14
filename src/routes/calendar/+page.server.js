import { getPublishedEvents } from "$lib/server/db/events";

export async function load({ locals }) {
    return {
        events: await getPublishedEvents(locals.supabase)
    };
}