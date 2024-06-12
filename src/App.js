import './App.css';
import React from 'react';
import WorkflowEditor from './components/WorkflowEditor';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App">
      <h1>Workflow Editor</h1>
      <WorkflowEditor />
      <h1>File Upload</h1>
      <FileUpload />
    </div>
  );
}

export default App;
