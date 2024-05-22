// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred on the server');
    }

    const comments = JSON.parse(data);
    res.json(comments);
  });
});

// Create a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: uuidv4(),
    text: req.body.text,
