import { writeFile } from 'node:fs/promises';

const note = `${process.argv[2]} \n`;

writeFile('promise-note.txt', note).catch((error) => {
  throw error;
});
