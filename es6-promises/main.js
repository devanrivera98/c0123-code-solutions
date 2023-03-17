import takeAChance from './take-a-chance.js';

const promise1 = takeAChance('Devan');

promise1
  .then((message) => (console.log(message)))
  .catch((error) => (console.log(error.message)));
