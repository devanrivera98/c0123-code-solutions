/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringLowercase = string.toLowerCase();
  var stringArray = stringLowercase.split(' ');
  // console.log(stringArray);
  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
  }
  return stringArray.join(' ');
}
