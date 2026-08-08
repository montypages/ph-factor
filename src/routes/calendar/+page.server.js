import { getEvents } from "$lib/server/db/events";

export async function load() {
    return {
        events: await getEvents()
    };
}