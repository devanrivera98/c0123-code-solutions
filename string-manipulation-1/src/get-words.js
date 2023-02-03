/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var noSpace = string.split(' ');
    return noSpace;
  }
}
// create a function called getWords with an arguement of string
// create an statement with a condition that will check to see if the string is empty
// if it is return an empty bracket
// if the string has words in it then separate the string into smaller strings by identifying the spaces and seperating each word into its own index in an array
