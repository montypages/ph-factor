import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import Figure from "$lib/tiptap/Figure";
import Link from "@tiptap/extension-link";

export function tiptapToHTML(content) {
    return generateHTML(content, [
        StarterKit,
        Figure,
        Link
    ]);
}
