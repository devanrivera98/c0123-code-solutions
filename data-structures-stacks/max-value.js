export default function maxValue(stack) {
  let maxNumber = -Infinity;
  if (stack.peek() === undefined) {
    return -Infinity;
  }

  while (stack.peek() >= maxNumber) {
    maxNumber = stack.peek();
    stack.pop();
  }
  return maxNumber;
}
