/* exported isUpperCased */
// write a function named isUpperCase with an argument of word
// create a statement that says if the word is uppercase to return true
// if the statement is not true then return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
