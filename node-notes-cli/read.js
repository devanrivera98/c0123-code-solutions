import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
export default read;

const data = readFileSync('data.json', 'utf-8');
const dataParse = JSON.parse(data);

function read() {
  readFile('data.json')
    .then((data) => {
      for (const [key, value] of Object.entries(dataParse.notes)) {
        console.log(`${key}: ${value}`);
      }
    })
    .catch((error) => {
      console.log('this is an error message for function read()', error.message);
      process.exit(1);
    });
}
