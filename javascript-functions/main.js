function convertMinutesToSeconds(minutes) {
  var timeConvert = minutes * 60;
  return timeConvert;
}
console.log('value of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log('value of greet:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('value of getArea:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('value of getFirstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log('value of getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
