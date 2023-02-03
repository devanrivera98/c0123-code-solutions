/* exported isLowerCased */
// write a function named isLowerCase with an argument of word
// create a statement that says if the word is lowercase to return true
// if the statement is not true then return false
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
