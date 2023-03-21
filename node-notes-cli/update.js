import { readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
export default update;

const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);

const number = process.argv[3];
const message = process.argv[4];
// const dataNextId = dataParse.nextId;

function update() {
  readFile('data.json')
    .then(() => {
      for (const property in dataParse.notes) {
        if (number === property) {
          dataParse.notes[property] = message;
          const dataStringify = JSON.stringify(dataParse, null, 2);
          console.log(dataStringify);
          writeFile('data.json', dataStringify).then((success) => {
            console.log('create was successfully stringified');
          });
        }
      }
    })
    .catch((error) => {
      console.log('This is an error message', error.message);
      process.exit(1);
    });
}

// const dataNextId = dataParse.nextId;
// const newObject = Object.assign(dataParse.notes, { dataNextId: message });
