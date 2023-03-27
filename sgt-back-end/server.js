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
    res.status(201).json(newGrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// // DELETE STARTS HERE

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (Number.isNaN(gradeId)) {
      const errorMessage = { error: 'GradeId was not a number' };
      res.status(400).json(errorMessage);
      return;
    } else if (gradeId < 0) {
      const errorMessage = { error: 'GradeId is below 0' };
      res.status(400).json(errorMessage);
      return;
    }
    const sql = `
    Delete
      from "grades"
      where "gradeId" = $1
      Returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    console.log(grade);
    if (grade) {
      res.status(204).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId"${gradeId}` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// // DELETE ENDS HERE

// PUT STARTS HERE
app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);
    const gradeId = Number(req.params.gradeId);
    if (name === undefined || course === undefined || score === undefined) {
      const errorMessage = { error: 'A field was left empty' };
      res.status(400).json(errorMessage);
      return;
    } else if (score < 0 || score > 100) {
      const errorMessage = { error: 'Score entered is above 100 or below 0' };
      res.status(400).json(errorMessage);
      return;
    } else if (Number.isNaN(gradeId) || gradeId < 0) {
      res.status(400).json({ error: 'There was an issue with the gradeId inputted' });
    }
    const sql = `
    Update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      Returning *
    `;
    console.log(sql);
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(204).json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId"${gradeId}` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});
// PUT ENDS HERE

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
