import express from 'express';

const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const property in grades) {
    allGrades.push(grades[property]);
  }
  res.json(allGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const eachGrade = req.body;
  eachGrade.id = nextId;
  grades[nextId] = eachGrade;
  nextId++;
  res.status(201).json(grades);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

// app.post('/api/grades', (req, res) => {
//   const eachGrade = req.body;
//   eachGrade.id = nextId;
//   nextId++;
//   console.log(eachGrade);
//   if (Object.keys(grades).length >= 0) {
//     Object.assign(grades, eachGrade);
//   }
//   res.status(201).json(grades);
// });
