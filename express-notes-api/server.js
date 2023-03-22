import express from 'express';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const app = express();
const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);

readFile('data.json')
  .then((success) => {
    app.get('/api/notes', (req, res) => {
      const allNotes = [];
      for (const [key] of Object.entries(dataParse.notes)) {
        allNotes.push(dataParse.notes[key]);
      }
      console.log(allNotes);
      res.status(200).json(allNotes);
    });
  })
  .catch((error) => {
    console.log('this is an error message for function read()', error.message);
    process.exit(1);
  });

// app.get('/api/grades:id', (req, res) => {
//   if (!req.params.id >= 0) {
//     res.statusCode(400).json('The id was not a positive integer');
//   }
// });

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
