/* exported lastChars */
function lastChars(length, string) {
  var stringArray = string.split('');
  // console.log(stringArray);
  var reverseStringArray = stringArray.reverse();
  // console.log(reverseStringArray);
  var slicedString = reverseStringArray.slice(0, length);
  var reverseSlicedString = slicedString.reverse();
  return reverseSlicedString.join('');
}

// turn the string into an array by split
// once the array is split use the reverse method to get the last index to become the first
// once you have the last index starting at zero use slice to start at zero and the length argument as to where you want to stop slicing
// remember to reverse the array again so that the last character is no longer first in the array
// you need to join the new array of only the characters you want from the slicing
