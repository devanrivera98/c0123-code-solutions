/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  const newList = new LinkedList(value);
  if (list) {
    while (list.next) {
      list = list.next;
      if (list.next === null) {
        list.next = newList;
        return list.next;
      }
    }
  }
}

// FAILED ATTEMPT
// export default function append(list, value) {
//   const newList = new LinkedList(value);
//   console.log(newList.data);
//   console.log(list.data);
//   if (list) {
//     while (list.next === null) {
//       list.next = newList;
//       console.log('this');
//     }
//   }
//   return list.next;
// }
