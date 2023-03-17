import { readFile } from 'node:fs';

const fileName = process.argv[2];
readFile(fileName, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
