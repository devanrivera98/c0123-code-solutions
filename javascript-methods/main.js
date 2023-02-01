var six = 6;
var four = 4;
var nine = 9;
var maximumValue = Math.max(six, four, nine);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Batman', 'Robin', 'Batgirl', 'Alfred'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'The Great Gatsby',
    author: 'F Scott FitzGerald'
  },
  {
    title: 'To Kill a MockingBird',
    author: 'Harper Lee'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn'
  }
];
var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1);
console.log('value after push, shift, and splice:', library);

var fullName = 'Devan Rivera';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of say my name:', sayMyName);
