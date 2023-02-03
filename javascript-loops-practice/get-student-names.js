/* exported getStudentNames */

function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i < students.length; i++) {
    var onlyNames = students[i].name;
    newArray.push(onlyNames);
  }
  return newArray;
}
