/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringArray = string.split('');
  // console.log(stringArray);
  [stringArray[firstIndex], stringArray[secondIndex]] = [stringArray[secondIndex], stringArray[firstIndex]];
  return stringArray.join('');
}

// firstIndex and SecondIndex need to swap
// turn the string into an array with the split method
// using the destructuring method create an array that will assign its value of the second index of the stringArray and the firstIndex of stringArray to the original index of the first index of the stringArray, the second index of stringArray and then
