export default function getTail(list) {
  if (list) {
    while (list.next) {
      list = list.next;
    }
    return list.data;
  }
}
