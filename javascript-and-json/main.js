var library = [
  {
    ibsn: '234345',
    title: 'The car',
    author: 'him'
  },
  {
    ibsn: '65423-23',
    title: 'The dog',
    author: 'her'
  },
  {
    ibsn: '43567-235',
    title: 'The tree',
    author: 'it'
  }
];

console.log('value of array library:', library);
console.log('type of library:', typeof library);

var jsonLibrary = JSON.stringify(library);

console.log('results of JSON.stringify:', jsonLibrary);
console.log('type of JSON.stringify:', typeof jsonLibrary);

var student = '{"Number Id": 47, "Name": "Joe"}';
console.log('value of student', student);
console.log('type of student:', typeof student);

var jsonParseStudent = JSON.parse(student);
console.log('value of jsonParse:', jsonParseStudent);
console.log('type of jsonParseStudent:', typeof jsonParseStudent);
