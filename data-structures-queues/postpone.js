export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const newEntry = queue.peek();
    queue.dequeue();
    return queue.enqueue(newEntry);
  } else {
    return undefined;
  }
}
