/* exported numVowels */
function numVowels(string) {
  var lowercaseString = string.toLowerCase();
  // console.log(lowercaseString);
  var stringArray = lowercaseString.split('');
  // console.log(stringArray);
  var number = 0;
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o' || stringArray[i] === 'u') {
      number += 1;
    }
  }
  return number;
}

// need every string letter to be put into an array
// have to check if that index equals any of the vowels
// if it does match a vowel increase number by 1
// return only the number that the loop says is a vowel
