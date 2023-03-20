import { writeFile } from 'node:fs';

const note = `${process.argv[2]} \n`;

writeFile('note.txt', note, (err) => {
  if (err) {
    throw err;
  }
});
