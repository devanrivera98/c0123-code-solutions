import { readFile } from 'node:fs/promises';

const fileName = process.argv[2];
readFile(fileName).then((data) => {
  console.log(data.toString());
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
});
