import read from './read.js';
import create from './create.js';
import remove from './remove.js';
// import update from './update.js';

const operator = process.argv[2];

switch (operator) {
  case 'read':
    read();
    console.log('Case read is being displayed');
    break;
  case 'create':
    create();
    console.log('Case create is being displayed');
    break;
  case 'remove':
    remove();
    console.log('Case remove is being displayed');
    break;
  default:
    console.log(`Sorry, ${operator} is not a valid operator`);
}
