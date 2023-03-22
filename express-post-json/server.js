import express from 'express';

const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const property in grades) {
    allGrades.push(grades[property]);
  }
  res.json(allGrades);
});

app.post('/api/grades', (req, res) => {
  const eachGrade = req.body;
  eachGrade.id = nextId;
  grades[nextId] = eachGrade;
  nextId++;
  res.status(201).json(eachGrade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
