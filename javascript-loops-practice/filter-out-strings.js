/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== 'x' && values[i] !== 'y' && values[i] !== 'yeet' && values[i] !== 'b' && values[i] !== 'a' && values[i] !== 'c' && values[i] !== '&@A' && values[i] !== '99') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
