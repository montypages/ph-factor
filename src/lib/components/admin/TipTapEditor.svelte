<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	// import ImageModal from './ImageModal.svelte';
	import Link from '@tiptap/extension-link';

	let { content = {}, updateContent } = $props();

	let editorElement;
	let editor;
	// let showImageModal = $state(false);

	// function insertFigure(data) {

	// 	if (!editor) return;

	// 	editor
	// 		.chain()
	// 		.focus()
	// 		.setImage(data)
	// 		.run();
	// }

	onMount(() => {
		editor = new Editor({
			element: editorElement,

			extensions: [
				StarterKit,
				Link.configure({
					openOnClick: false
				})
			],

			content,

			onUpdate({ editor }) {
				updateContent(editor.getJSON());
			}
		});
	});

	onDestroy(() => {
		editor?.destroy();
	});

	function setLink() {
		if (!editor) return;

		if (editor.isActive('link')) {
			editor.chain().focus().unsetLink().run();
			return;
		}

		const url = window.prompt('Enter URL');

		if (url) {
			editor.chain().focus().setLink({ href: url }).run();
		}
	}
</script>

<div class="toolbar">
	<button
		type="button"
		onclick={() => editor?.chain().focus().toggleBold().run()}
		class:active={editor?.isActive('bold')}
	>
		Bold
	</button>

	<button
		type="button"
		onclick={() => editor?.chain().focus().toggleItalic().run()}
		class:active={editor?.isActive('italic')}
	>
		Italic
	</button>

	<button type="button" onclick={setLink} class:active={editor?.isActive('link')}> Link </button>
</div>

<!-- <ImageModal bind:open={showImageModal} onInsert={insertFigure} /> -->

<div bind:this={editorElement}></div>

<!-- Should the global styles be in a seperate css file instead? -->
<style>
	:global(.ProseMirror) {
		min-height: 300px;
		padding: 1rem;
		border: 1px solid;
		border-radius: 8px;
		outline: none;
		background-color: #fff;
	}

	:global(.ProseMirror p) {
		margin-bottom: 1rem;
	}
</style>
