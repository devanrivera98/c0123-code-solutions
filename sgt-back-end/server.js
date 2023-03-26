import pg from 'pg';
import express from 'express';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const app = express();
app.use(express.json());

// GET STARTS HERE

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades"
      `;
    const result = await db.query(sql);
    const allGrades = result.rows;
    if (allGrades) {
      res.status(200).json(allGrades);
    } else {
      res.status(404).json({ error: 'Cannot find grades' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

// GET ENDS HERE

// POST STARTS HERE

app.post('/api/grades', async (req, res) => {
  try {
    const newEntryName = req.body.name;
    const newEntryCourse = req.body.course;
    const newEntryScore = Number(req.body.score);
    if (newEntryCourse === undefined || newEntryName === undefined || newEntryScore === undefined) {
      const errorMessage = { error: 'A field was left empty' };
      res.status(400).json(errorMessage);
      return;
    } else if (newEntryScore < 0 || newEntryScore > 100) {
      const errorMessage = { error: 'Score entered is above 100 or below 0' };
      res.status(400).json(errorMessage);
      return;
    }
    const sql = `
    Insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      Returning*
    `;
    const params = [newEntryName, newEntryCourse, newEntryScore];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    console.log(newGrade);
    res.json(newGrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// app.post('/api/notes', (req, res) => {
//   const newEntry = req.body;
//   if (newEntry.content === undefined) {
//     const errorMessage = { error: 'Content is a required field' };
//     res.status(404).json(errorMessage);
//   } else if (newEntry.content !== undefined) {
//     newEntry.id = dataParse.nextId;
//     dataParse.notes[dataParse.nextId] = newEntry;
//     dataParse.nextId++;
//     const dataStringify = JSON.stringify(dataParse, null, 2);
//     writeFile('data.json', dataStringify)
//       .then((success) => {
//         res.status(201).json(newEntry);
//         console.log('Content was saved');
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json(error.message);
//       });
//   }
// });
// POST ENDS HERE

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

// // POST STARTS BELOW
// app.post('/api/notes', (req, res) => {
//   const newEntry = req.body;
//   if (newEntry.content === undefined) {
//     const errorMessage = { error: 'Content is a required field' };
//     res.status(404).json(errorMessage);
//   } else if (newEntry.content !== undefined) {
//     newEntry.id = dataParse.nextId;
//     dataParse.notes[dataParse.nextId] = newEntry;
//     dataParse.nextId++;
//     const dataStringify = JSON.stringify(dataParse, null, 2);
//     writeFile('data.json', dataStringify)
//       .then((success) => {
//         res.status(201).json(newEntry);
//         console.log('Content was saved');
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json(error.message);
//       });
//   }
// });
// // POST ENDS HERE

// // DELETE STARTS HERE

// app.delete('/api/notes/:id', (req, res) => {
//   const entryId = Number(req.params.id);
//   if (entryId <= 0) {
//     res.status(400).json(errorCodeNegative);
//   } else if (entryId !== dataParse.notes[entryId].id) {
//     const errorMessageNoId = { error: `Cannot find note with id ${entryId}` };
//     res.status(404).json(errorMessageNoId);
//   } else {
//     delete dataParse.notes[entryId];
//     const dataStringify = JSON.stringify(dataParse, null, 2);
//     writeFile('data.json', dataStringify)
//       .then((success) => {
//         res.status(204).json(dataParse);
//         console.log('Note was successfully deleted');
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json(error.message);
//       });
//   }
// });
// // DELETE ENDS HERE

// // PUT STARTS HERE
// app.put('/api/notes/:id', (req, res) => {
//   const entryId = Number(req.params.id);
//   const updateEntry = req.body;
//   if (entryId <= 0 || updateEntry.content === undefined) {
//     res.status(400).json(errorCodeNegative);
//   } else if (dataParse.notes[entryId] === undefined) {
//     const errorMessageNoId = { error: `Cannot find note with id ${entryId}` };
//     res.status(404).json(errorMessageNoId);
//   } else {
//     updateEntry.id = entryId;
//     dataParse.notes[entryId] = updateEntry;
//     const dataStringify = JSON.stringify(dataParse, null, 2);
//     writeFile('data.json', dataStringify)
//       .then((success) => {
//         res.status(204).json(updateEntry);
//         console.log('Note was successfully updated');
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json(error.message);
//       });
//   }
// });
// // PUT ENDS HERE

// app.listen(8080, () => {
//   console.log('Listening on port 8080');
// });
