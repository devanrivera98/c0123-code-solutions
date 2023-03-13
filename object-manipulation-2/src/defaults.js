/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) { target[key] = source[key]; }
  }
}

// target - any JavaScript object
// source - any Javascript object
// return value - this function does not return anything, but it does modify target
// for key property of source
// if the key property of source is not in the target
// make the new value of target equal the value of the source key
