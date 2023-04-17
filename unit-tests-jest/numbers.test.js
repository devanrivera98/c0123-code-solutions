import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns the amount into dollars', () => {
    const makeDollars = 50 / 13;
    const result = toDollars(makeDollars);
    expect(result).toEqual('$3.85');
  });
});

describe('divideBy', () => {
  it('returns a new array of numbers', () => {
    const divideNumbers = [10, 15, 20, 25];
    const divideDivisor = 5;
    const result = divideBy(divideNumbers, divideDivisor);
    expect(result).toEqual([2, 3, 4, 5]);
  });
});

describe('multiplyBy', () => {
  it('returns a modified object', () => {
    const multiplyObject = { number: 2, notNumber: '2' };
    const multiplyMultiplier = 5;
    const result = multiplyBy(multiplyObject, multiplyMultiplier);
    expect(result).toEqual({ number: 10, notNumber: '2' });
  });
});
