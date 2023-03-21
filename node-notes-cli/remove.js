import { readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
export default remove;

const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);
const number = process.argv[3];

function remove() {
  readFile('data.json')
    .then((data) => {
      for (const property in dataParse.notes) {
        if (number === property) {
          delete dataParse.notes[property];
          const dataStringify = JSON.stringify(dataParse, null, 2);
          writeFile('data.json', dataStringify).then((success) => {
          });
        }
      }
    })
    .catch((error) => {
      console.log('This is an error message for function remove()', error.message);
      process.exit(1);
    });
}
