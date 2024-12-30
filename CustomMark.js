// CustomMark.js
import { Mark } from '@tiptap/core';

const CustomMark = Mark.create({
  name: 'highlight', // Name of the mark

  // Allowing this mark to have a color attribute
  addAttributes() {
    return {
      color: {
        default: 'yellow', // Default color for the highlight
      },
    };
  },

  // Parsing HTML: looking for span elements with a style attribute containing 'background-color'
  parseHTML() {
    return [
      {
        tag: 'span[style]',
        getAttrs: (node) => node.style.backgroundColor === 'yellow' && null, // Only yellow highlights
      },
    ];
  },

  // Rendering HTML: this will apply the highlight color to the text
  renderHTML({ HTMLAttributes }) {
    return ['span', { style: `background-color: ${HTMLAttributes.color}` }, 0];
  }
});

export default CustomMark;
