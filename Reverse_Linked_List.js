// O(n) time, O(n) space
// var reverseList = function(head) {
//   if (!head) return [];
//   const stck = [];
//   const dump = node => {
//     while (node) {
//       stck.push(node.val);
//       node = node.next;
//     }
//   };
//   dump(head);
//   const reconstruct = arr => {
//     const headNode = new ListNode(arr.pop());
//     let node = headNode;
//     while (arr.length) {
//       node.next = new ListNode(arr.pop());
//       node = node.next;
//     }
//     return headNode;
//   };
//   return reconstruct(stck);
// };

// O(1) space, O(n) time
var reverseList = function(head) {
  if (!head) return [];
  let node = head;
  let prev = null;
  while (node) {
    let tmp = node.next;
    node.next = prev;
    prev = node;
    node = tmp;
  }
  return prev;
};
