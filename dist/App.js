// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import necessary Tiptap packages
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// App Component
const App = () => {
  // Initialize the editor with the StarterKit extension
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello, this is a Tiptap editor!</p>',
  });

  return (
    <div>
      <h1>Tiptap Editor Example</h1>
      {/* The editor content area */}
      <EditorContent editor={editor} />
    </div>
  );
};

// Render the App to the root element
ReactDOM.render(<App />, document.getElementById('root'));
