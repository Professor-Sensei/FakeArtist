const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const axios = require('axios');
const API = require('../../AuthKey.js');

const headers = {
  Authorization: API.key,
  'Content-Type': 'application/json',
};

let imageData = [];

const baseURL = '';

app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

app.get(/drawing/, (req, res) => {
  console.log(req.body);
  res.send(imageData[0]);
});

app.post(/drawing/, (req, res) => {
  imageData.push(req.body.data);
  res.status(201).send();
});
