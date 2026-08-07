import { generateJSON } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Anchor from '@tiptap/extension-link';

const html = 
       `
      
        <p>Come see pH Factor play with special guest Mountlake Terrace High School Jazz Band in the Mountlake Terrace High School Theater.</p>

       `
        ;

const json = generateJSON(html, [
	StarterKit,
        Image,
        Anchor
]);


console.log(JSON.stringify(json, null, 2));