import React, { useState } from 'react';
import JoditEditor from 'jodit-react';


const Posts = () => {
  const [editorContent, setEditorContent] = useState('');
  const [outputContent, setOutputContent] = useState('');
  
  const contentFieldChanged = (data) => {
    setEditorContent(data);
  };

  // Handle saving the content and update the output content
  const handleSave = () => {
    setOutputContent(editorContent);
  };
  return (
    <div>
      
      <JoditEditor
        value={editorContent}
        onChange={(newContent) => contentFieldChanged(newContent)}
      />
      {/* Save button */}
      <button onClick={handleSave}>Save Content</button>

      {/* Display Content Output */}
      <div className="content-output">
       
        <div dangerouslySetInnerHTML={{ __html: outputContent }}></div>
      </div>
    </div> 
  );
};

export default Posts;
