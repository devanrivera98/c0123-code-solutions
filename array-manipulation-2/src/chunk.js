/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}

// create an empty newArray to nest our array into the old one
// create a for loop that will increment based on the size arguement and have our conditional stop based on the length of the original array
// slice our current array at the start index of i and up to i + the size for the end
// push and nest this slice into the empty newArray
// return our newArray once the loop is over
