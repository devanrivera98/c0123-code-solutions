export default function getTop(stack) {
  if (stack < 0) {
    return undefined;
  }
  return stack.peek();
}
