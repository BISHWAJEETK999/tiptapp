// CustomNode.js
import { Node } from '@tiptap/core';

const CustomNode = Node.create({
  name: 'customNode', // Name of the custom node

  // Defining the content for this custom node
  content: 'inline*', // Allowing inline content (like text or links)

  // Grouping it as a block-level element
  group: 'block',

  // Defining how this node should be parsed when loading from HTML
  parseHTML() {
    return [{ tag: 'div.custom-node' }];
  },

  // Defining how this node should be rendered to HTML
  renderHTML({ HTMLAttributes }) {
    return ['div', { class: 'custom-node' }, 0];
  }
});

export default CustomNode;
