/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // _ * n = O(n)
    i++                             // _ * n = O(n)
  ) {
    const word = words[i];          // _ * _ = O(n)
    if (!seen[word]) {              // _ * n = O(n)
      seen[word] = true;            // _ * n = O(n)
      unique[unique.length] = word; // _ * n = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // _ * _ = O(1)
    i < words.length;               // _ * _ = O(n)
    i++                             // _ * _ = O(n)
  ) {
    const word = words[i];          // _ * _ = O(n)
    let isUnique = true;            // _ * _ = O(n)
    for (
      let c = 0;                    // _ * _ = O(n)
      c < i;                        // _ * _ = O(n^2)
      c++                           // _ * _ = O(n^2)
    ) {
      const comparing = words[c];   // _ * _ = O(n^2)
      if (comparing === word) {     // _ * _ = O(n^2)
        isUnique = false;           // _ * _ = O(n^2)
      }
    }
    if (isUnique) {                 // _ * _ = O(n)
      unique[unique.length] = word; // _ * _ = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
