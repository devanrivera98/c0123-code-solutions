/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word[0] === 'j') {
    return 'JavaScript';
  } else if (word[0] === 'J') {
    return 'JavaScript';
  }
  var newWord = word.toLowerCase();
  var firstUppercase = newWord[0].toUpperCase();
  var newString = firstUppercase + newWord.slice(1);
  return newString;
}
