/* exported pick */
function pick(source, keys) {

  const objectBracket = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      objectBracket[key] = source[key];
    }
  }
  return objectBracket;
}

// create an empty object bracket that can hold our desired source in
// create a for in loop to check the properties over the source
// a statement that will be executed on every iteration
