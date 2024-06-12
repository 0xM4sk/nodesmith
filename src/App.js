import './App.css';
import React from 'react';
import WorkflowEditor from './components/WorkflowEditor';
import FileUpload from './components/FileUpload';
import { withAuthenticator } from 'aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Nodesmith</h1>
      <p>You are logged in!</p>
      <h1>Workflow Editor</h1>
      <WorkflowEditor />
      <h1>File Upload</h1>
      <FileUpload />
    </div>
  );
}
export default withAuthenticator(App);

