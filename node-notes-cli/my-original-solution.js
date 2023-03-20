// import { readFileSync } from 'node:fs';
// import { readFile, writeFile } from 'node:fs/promises';

// const data = readFileSync('data.json', 'utf-8');
// const dataParse = JSON.parse(data);

// if (process.argv[2] === 'read') {
//   readFile('data.json').then((data) => {
//     console.log(dataParse);
//     for (const [key, value] of Object.entries(dataParse.notes)) {
//       console.log(`${key}: ${value}`);
//     }
//   }).catch((error) => {
//     console.log(error);
//     process.exit(1);
//   });
// }

// // Add is below
// const message = process.argv[3];
// let dataNextId = dataParse.nextId;
// // const newObject = Object.assign(dataParse.notes, { dataNextId: message });
// // console.log(newObject);

// if (process.argv[2] === 'create') {
//   readFile('data.json')
//     .then((success) => {
//       dataParse.notes[dataNextId] = message;
//       dataNextId++;
//       const dataStringify = JSON.stringify(dataParse, null, 2);
//       writeFile('data.json', dataStringify).then((success) => {
//       });
//     })
//     .catch((error) => {
//       console.log(error.message);
//       process.exit(1);
//     });
// }

// // Delete is below
// // loop if number equal number entered after delete remove that entry
// const deleteId = process.argv[3];

// if (process.argv[2] === 'delete') {
//   readFile('data.json')
//     .then((success) => {

//     });
// }
