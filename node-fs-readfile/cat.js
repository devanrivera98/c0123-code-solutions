// promise.all - will guarantee the order match the files passed??
// .map()
// process.argv needs to take a number of files

import { readFile } from 'node:fs/promises';

const fileNames = process.argv.slice(2);
const promises = fileNames.map((fileName) => readFile(fileName, 'utf8'));

Promise.all(promises).then((data) => {
  console.log(data.join('\n'));
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
});

// instructor solution for review below
