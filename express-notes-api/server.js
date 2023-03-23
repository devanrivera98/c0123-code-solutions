import express from 'express';
import { readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);
app.use(express.json());

// GET STARTS BELOW

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
    const errorCode = { error: 'id must be a positive integer' };
    res.status(400).json(errorCode);
  } else if (dataParse.notes[numberId]) {
    res.status(200).json(dataParse.notes[numberId]);
  } else {
    const errorMessage = { error: `Cannot find note with id ${numberId}` };
    res.status(404).json(errorMessage);
  }
});

// GET ENDS HERE

// POST STARTS BELOW
app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  // console.log(newEntry.content);
  if (newEntry.content === undefined) {
    const errorMessage = { error: 'Content is a required field' };
    res.status(404).json(errorMessage);
  } else if (newEntry.content !== undefined) {
    newEntry.id = dataParse.nextId;
    dataParse.notes[dataParse.nextId] = newEntry;
    dataParse.nextId++;
    console.log(dataParse);
    res.status(201).json(newEntry);
    const dataStringify = JSON.stringify(dataParse, null, 2);
    writeFile('data.json', dataStringify).then((success) => {
      console.log('Content was saved');
    });
  } else {
    const errorMessage = { error: 'An unexpected error occured' };
    res.status(500).json(errorMessage);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

// res.status(404).json(errorMessage);
//   } else if (newEntry.content !== undefined) {
//   newEntry.id = dataParse.nextId;
//   dataParse.nextId++;
//   console.log(newEntry);
//   res.status(201).json(newEntry);
//   // writeFile()
// }
