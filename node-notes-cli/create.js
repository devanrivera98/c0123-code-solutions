import { readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
export default create;

const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);

// Add is below
const message = process.argv[3];
const dataNextId = dataParse.nextId;

function create() {
  readFile('data.json')
    .then((success) => {
      dataParse.notes[dataNextId] = message;
      dataParse.nextId++;
      const dataStringify = JSON.stringify(dataParse, null, 2);
      console.log(dataStringify);
      writeFile('data.json', dataStringify).then((success) => {
        console.log('create was successfully stringified');
      });
    })
    .catch((error) => {
      console.log('This is an error message', error.message);
      process.exit(1);
    });
}
