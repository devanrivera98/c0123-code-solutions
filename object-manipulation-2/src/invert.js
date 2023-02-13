/* exported invert */
function invert(source) {
  var object = {};
  for (var key in source) {
    // console.log(key);
    // console.log(source[key]);
    object[source[key]] = key;
    // // assigning the property of key to be the values instead
    // i do not understand how that caused the values to take the place of the properties since I did not assign it
    // nevermind by putting the value [source[key]] by the object we are assigning it to the property and since the key is now where the value belongs we are saying that the key is its value
    // console.log(object);
  }
  return object;
}

// use destructuring to inverse the property and its value
