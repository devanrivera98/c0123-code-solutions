export default function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    for (let i = 0; i <= index + 1; i++) {
      const newEntry = queue.peek();
      queue.dequeue();

      queue.enqueue(newEntry);
      i++;
    }
    const item = queue.dequeue();
    return item;
  } else {
    return undefined;
  }
}

// index represents the number of times the front of the queue is dequeue and then re added back to the queue. function should then return the front of the queue value??

// for the number of index
// if i is less than the index
// deque and enque the first of the list to the end
// one the loop ends return the value at the front of the queue

// export default function takeValueAtIndex(queue, index) {
//   if (queue.peek() !== undefined) {
//     for (let i = 0; i < index + 1; i++) {
//       const newEntry = queue.peek();
//       queue.dequeue();
// if (queue.peek() === undefined) {
//   return;
// }
// queue.enqueue(newEntry);
//       i++;
//     }
//     return queue.peek();
//   } else {
//     return undefined;
//   }
// }
