export default function isEmpty(queue) {
  if (queue.peek() === undefined) {
    return true;
  } else {
    return false;
  }

}
