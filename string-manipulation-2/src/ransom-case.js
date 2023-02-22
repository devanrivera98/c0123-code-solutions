/* exported ransomCase */
function ransomCase(string) {
  var wordLowerCase = string.toLowerCase();
  var stringArray = wordLowerCase.split('');
  for (var i = 1; i < stringArray.length; i += 2) {
    stringArray[i] = stringArray[i].toUpperCase();
  }
  return stringArray.join('');
}
