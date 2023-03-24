import express from 'express';
import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const app = express();
const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);
const errorCodeNegative = { error: 'id must be a positive integer' };
app.use(express.json());

// GET STARTS BELOW

app.get('/api/notes', (req, res) => {
  const allNotes = [];
  for (const [key] of Object.entries(dataParse.notes)) {
    allNotes.push(dataParse.notes[key]);
  }
  res.status(200).json(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const numberId = Number(req.params.id);
  if (numberId <= 0) {
    res.status(400).json(errorCodeNegative);
  } else if (dataParse.notes[numberId]) {
    res.status(200).json(dataParse.notes[numberId]);
  } else {
    const errorMessageNoId = { error: `Cannot find note with id ${numberId}` };
    res.status(404).json(errorMessageNoId);
  }
});

// GET ENDS HERE

// POST STARTS BELOW
app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if (newEntry.content === undefined) {
    const errorMessage = { error: 'Content is a required field' };
    res.status(404).json(errorMessage);
  } else if (newEntry.content !== undefined) {
    newEntry.id = dataParse.nextId;
    dataParse.notes[dataParse.nextId] = newEntry;
    dataParse.nextId++;
    const dataStringify = JSON.stringify(dataParse, null, 2);
    writeFile('data.json', dataStringify)
      .then((success) => {
        res.status(201).json(newEntry);
        console.log('Content was saved');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json(error.message);
      });
  }
});
// POST ENDS HERE

// DELETE STARTS HERE

app.delete('/api/notes/:id', (req, res) => {
  const entryId = Number(req.params.id);
  if (entryId <= 0) {
    res.status(400).json(errorCodeNegative);
  } else if (entryId !== dataParse.notes[entryId].id) {
    const errorMessageNoId = { error: `Cannot find note with id ${entryId}` };
    res.status(404).json(errorMessageNoId);
  } else {
    delete dataParse.notes[entryId];
    const dataStringify = JSON.stringify(dataParse, null, 2);
    writeFile('data.json', dataStringify)
      .then((success) => {
        res.status(204).json(dataParse);
        console.log('Note was successfully deleted');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json(error.message);
      });
  }
});
// DELETE ENDS HERE

// PUT STARTS HERE
app.put('/api/notes/:id', (req, res) => {
  const entryId = Number(req.params.id);
  const updateEntry = req.body;
  if (entryId <= 0 || updateEntry.content === undefined) {
    res.status(400).json(errorCodeNegative);
  } else if (dataParse.notes[entryId] === undefined) {
    const errorMessageNoId = { error: `Cannot find note with id ${entryId}` };
    res.status(404).json(errorMessageNoId);
  } else {
    updateEntry.id = entryId;
    dataParse.notes[entryId] = updateEntry;
    const dataStringify = JSON.stringify(dataParse, null, 2);
    writeFile('data.json', dataStringify)
      .then((success) => {
        res.status(204).json(updateEntry);
        console.log('Note was successfully updated');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json(error.message);
      });
  }
});
// PUT ENDS HERE

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
