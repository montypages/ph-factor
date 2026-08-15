import DOMPurify from 'dompurify';

export function sanitizeHTML(html) {
	if (typeof window === 'undefined') {
		return html;
	}

	return DOMPurify.sanitize(html);
}