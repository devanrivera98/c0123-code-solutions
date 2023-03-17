import { readFile } from 'node:fs/promises';
// import * as fs from 'node:fs/promises';
// try {
//   const filePath = new URL('./dijkstra.txt', import.meta.url);
//   const contents = await readFile(filePath, { encoding: 'utf8' });
//   console.log(contents);
// } catch (err) {
//   console.log(err.message);
// }

// const filePath = new URL('./dijkstra.txt', import.meta.url);
// fs.readFile(filePath, 'utf8').then(console.log)

// previous attempts works but was having lint error with import.meta.url

readFile('./dijkstra.txt').then((fileBuffer) => {
  console.log(fileBuffer.toString());
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
});
