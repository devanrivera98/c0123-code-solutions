/* exported reverseWord */
function reverseWord(word) {
  var reverseString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}

// define a function that is named reverseWord with an arguement of word
// declare a variable named reverseString and assign it an empty string
// begin a loop that iterates through the word string where for each index in the array
// for each iteration add the value of reverseString and concatenate it with the word index
// return the value of reverse string
