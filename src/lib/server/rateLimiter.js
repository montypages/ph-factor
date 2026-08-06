const requests = new Map();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export function isRateLimited(ip) {
	const now = Date.now();

	const timestamps = requests.get(ip) ?? [];

	// Remove expired requests
	const recent = timestamps.filter(
		(time) => now - time < WINDOW_MS
	);

	if (recent.length >= MAX_REQUESTS) {
		requests.set(ip, recent);
		return true;
	}

	recent.push(now);
	requests.set(ip, recent);

	return false;
}