import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

if (process.argv.includes('plus')) {
  console.log('results:', add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv.includes('minus')) {
  console.log('results:', subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv.includes('times')) {
  console.log('results:', multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv.includes('over')) {
  console.log('results:', divide(Number(process.argv[2]), Number(process.argv[4])));
}
