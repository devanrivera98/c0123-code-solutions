import { writeFile } from 'node:fs/promises';

const data = `${Math.random()} \n`;

writeFile('random-promise.txt', data).catch((error) => {
  throw error;
});
