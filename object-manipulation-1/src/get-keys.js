/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var prop in object) {
    if (object[prop]) {
      newArray.push(prop);
    }
  }
  return newArray;
}
