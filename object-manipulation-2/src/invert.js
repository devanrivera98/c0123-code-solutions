/* exported invert */
function invert(source) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}

// use destructuring to inverse the property and its value
