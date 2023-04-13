export default function takeFront(queue) {
  if (queue.peek() !== undefined) {
    return queue.dequeue();
  } else {
    return undefined;
  }
}
