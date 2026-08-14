import StarterKit from '@tiptap/starter-kit';
import { generateHTML } from '@tiptap/html';
import Link from '@tiptap/extension-link';

export function tiptapToHTML(content) {
	return generateHTML(content, [StarterKit, Link]);
}
