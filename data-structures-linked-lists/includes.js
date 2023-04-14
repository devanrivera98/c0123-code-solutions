export default function includes(list, value) {
  while (list) {
    if (list.data === value) {
      return true;
    }
    list = list.next;
  }
  return false;
}

// if (list.data === value) {
//   return true;
