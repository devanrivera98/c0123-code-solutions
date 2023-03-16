const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('result of sumW:', sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('result of product:', product);

const deposit = account.filter((account) => account.type === 'deposit');
console.log('result of deposit:', deposit);

const depositAmount = deposit.map((account) => account.amount);
console.log('result of depositAmount', depositAmount);

const depositReduce = depositAmount.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('result of depositReduce:', depositReduce);

const withdraw = account.filter((account) => account.type === 'withdrawal');
console.log('result of withdraw:', withdraw);

const withdrawAmount = withdraw.map((account) => account.amount);
console.log('result of withdrawAmount:', withdrawAmount);

const withdrawReduce = withdrawAmount.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('result of withdrawReduce:', withdrawReduce);

const balance = depositReduce - withdrawReduce;
console.log('balance:', balance);

const composite = traits.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
console.log(composite);
