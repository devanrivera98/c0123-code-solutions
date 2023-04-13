export default function maxValue(stack) {
  let maxNumber = -Infinity;
  if (stack.peek() === undefined) {
    return -Infinity;
  }

  for (let i = 0; stack.peek() !== undefined; i++) {
    if (maxNumber < stack.peek()) {
      maxNumber = stack.peek();
    }
    stack.pop();
    i++;
  }
  return maxNumber;
}
