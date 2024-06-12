// src/components/FileUpload.js

import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileEncode, FilePondPluginFileValidateSize);

const FileUpload = () => {
  return (
    <FilePond
      allowMultiple={true}
      server={{
        url: 'https://tdgbg90c6i.execute-api.us-east-1.amazonaws.com/dev',
        process: {
          url: '/upload',
          method: 'POST',
          withCredentials: false,
          headers: {},
          timeout: 7000,
          onload: (response) => {
            console.log('File upload response:', response);
            return response.key;
          },
          onerror: (response) => {
            console.error('File upload error:', response);
            return response.data;
          },
          ondata: (formData) => {
            console.log('Form data:', formData);
            return formData;
          }
        }
      }}
    />
  );
};

export default FileUpload;
