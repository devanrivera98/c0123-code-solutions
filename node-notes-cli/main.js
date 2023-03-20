import read from './read.js';
import create from './create.js';
import remove from './remove.js';
import update from './update';

const operator = process.argv[2];

switch (operator) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'remove':
    remove();
    break;
  case 'update':
    update();
    break;
  default:
    console.log(`Sorry, ${operator} is not a valid operator`);
}
