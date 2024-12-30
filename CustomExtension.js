// CustomExtension.js
import { Extension } from '@tiptap/core';

const CustomExtension = Extension.create({
  name: 'customExtension', // Name of the extension

  // Defining a custom command to change background color
  addCommands() {
    return {
      setBackgroundColor: (color) => ({ commands }) => {
        return commands.setMark('highlight', { color });
      }
    };
  }
});

export default CustomExtension;
