var colors = ['red', 'white', 'blue'];
console.log('value of color[0]', colors[0]);
console.log('value of color[1]', colors[1]);
console.log('value of color[2]', colors[2]);

console.log('America is', colors[0] + ' ' + colors[1] + ' ' + colors[2]);
colors[2] = 'green';
console.log('America is', colors[0] + ' ' + colors[1] + ' ' + colors[2]);
console.log(colors);

var students = ['Joe', 'Bill', 'Stan', 'Michael'];
var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('There are ' + numberOfStudents + ' students in the class.');
console.log('The last student in the array is', lastStudent);
console.log(students);
