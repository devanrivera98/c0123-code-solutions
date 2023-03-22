import express from 'express';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const app = express();
const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);
const errorCode = { error: 'id must be a positive integer' };

readFile('data.json')
  .then((success) => {
    app.get('/api/notes', (req, res) => {
      const allNotes = [];
      for (const [key] of Object.entries(dataParse.notes)) {
        allNotes.push(dataParse.notes[key]);
        // console.log(dataParse.notes[key].id);
      }
      // console.log(allNotes);
      res.status(200).json(allNotes);
    });
  })
  .catch((error) => {
    console.log('this is an error message for function read()', error.message);
    process.exit(1);
  });

app.get('/api/notes/:id', (req, res) => {
  const numberId = Number(req.params.id);
  if (numberId <= 0) {
    res.status(400).json(errorCode);
  } else if (dataParse.notes[numberId]) {
    res.status(200).json(dataParse.notes[numberId]);
  } else {
    const errorMessage = { error: `Cannot find note with id ${numberId}` };
    res.status(404).json(errorMessage);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
