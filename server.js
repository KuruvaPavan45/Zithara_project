// server.js
const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
  const python = spawn('python3', ['model.py', req.file.path]);

  python.stdout.on('data', (data) => {
    res.send(JSON.parse(data.toString()));
  });

  python.stderr.on('data', (data) => {
    console.error(stderr: ${data});
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});