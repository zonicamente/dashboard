require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api/data', (req, res) => {
  const results = [];

  fs.createReadStream(path.join(__dirname, 'mockData.csv'))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log('Data read from CSV:', results); // Debug: log the results
      res.json(results);
    })
    .on('error', (err) => {
      console.error('Error reading CSV file', err);
      res.status(500).send('Error fetching data');
    });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
