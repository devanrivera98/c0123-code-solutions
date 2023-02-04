/* exported capitalize */
// define a function named capitalize that accepts one argument of word
// since the word has uppercase letters in it first lowercase the entire word
// once the word is lowercase pull the first index of the word and make it uppercase

function capitalize(word) {
  var lowerCase = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lowerCase.slice(1);
}
