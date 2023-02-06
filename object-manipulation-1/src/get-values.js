/* exported getValues */
function getValues(object) {
  var newArray = [];

  for (var key in object) {
    if (object[key]) {
      newArray.push(object[key]);
    }
  }
  return newArray;
}
