// backend/server.js

const serverless = require('serverless-http');
const express = require('express');
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Ensure this is called before using any environment variables

AWS.config.update({ region: 'us-east-2' }); // Change to your AWS region

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/test', (req, res) => {
  console.log('POST /test endpoint hit');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  res.send('POST request received');
});

app.post('/upload', (req, res) => {
  console.log('Upload endpoint hit');
  console.log('Request files:', req.files); // Log the files object

  // Reference req.files.filepond instead of req.files.file
  const file = req.files.filepond;
  if (!file) {
    console.error('File object is undefined.');
    return res.status(400).send('File object is undefined.');
  }

  console.log('File received:', file.name);
  const params = {
    Bucket: process.env.AWS_S3_BUCKET, // Ensure the Bucket parameter is correctly set
    Key: file.name,
    Body: file.data
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err);
      return res.status(500).send(err);
    }
    console.log('File uploaded to S3:', data);
    res.send(data);
  });
});

module.exports.handler = serverless(app);

