<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	// import ImageModal from './ImageModal.svelte';
	import Link from '@tiptap/extension-link';

	let { content = {}, updateContent } = $props();

	let editorElement;
	let editor = $state();

	let isBold = $state(false);
	let isItalic = $state(false);
	let isLink = $state(false);

	function updateToolbarState() {
		if (!editor) return;

		isBold = editor.isActive('bold');
		isItalic = editor.isActive('italic');
		isLink = editor.isActive('link');
	}

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
				updateToolbarState();
			},


			onSelectionUpdate() {
				updateToolbarState();
			},


			onTransaction() {
				updateToolbarState();
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
		aria-label="bold"
		type="button"
		onclick={() => editor?.chain().focus().toggleBold().run()}
		class:active={isBold}
	>
		<i class="fa-solid fa-bold"></i>
	</button>

	<button
		aria-label="italic"
		type="button"
		onclick={() => editor?.chain().focus().toggleItalic().run()}
		class:active={isItalic}
	>
		<i class="fa-solid fa-italic"></i>
	</button>

	<button aria-label="link" type="button" onclick={setLink} class:active={isLink}>
		<i class="fa-solid fa-link"></i>
	</button>
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
		margin: 0;
	}

	:global(.ProseMirror p + p) {
		margin-top: 1rem;
	}

	.toolbar button {
		padding: 0.5em;
		background-color: var(--clr-secondary);
		border: 1px solid var(--clr-dark);
		margin: 0.5em 0;
		opacity: 0.5;
	}

	.toolbar button.active {
		opacity: 1;
	}
</style>
