/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
*/
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.val === undefined || head.next === null) {
    return null;
  }
  let length = 1;
  let end = head;
  //as long as the next value exists
  while (end.next) {
    length++;
    end = end.next;
  }
  let fromHead = length - n;
  let counter = 0;
  let foundNode = head;
  let prev;
  console.log("endNode", end.val);
  console.log("len", length);
  console.log("fromhead", fromHead);
  if (fromHead === 0) {
    head = head.next;
    return head;
  }
  while (counter < fromHead) {
    counter++;
    prev = foundNode;
    foundNode = foundNode.next;
  }
  console.log("found", foundNode.val);
  // console.log("prev", prev.val, "new next", foundNode.next.val);
  prev.next = foundNode.next;
  return head;
};

// const list = new ListNode(1);
// list.next = new ListNode(2);
// list.next.next = new ListNode(3);
// list.next.next.next = new ListNode(4);
// list.next.next.next.next = new ListNode(5);
// list.next.next.next.next.next = new ListNode(6);
// list.next.next.next.next.next.next = new ListNode(7);
// list.next.next.next.next.next.next.next = new ListNode(8);
// list.next.next.next.next.next.next.next.next = new ListNode(9);
// list.next.next.next.next.next.next.next.next.next = new ListNode(10);
// list.next.next.next.next.next.next.next.next.next.next = new ListNode(11);
// list.next.next.next.next.next.next.next.next.next.next.next = new ListNode(12);
// list.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
//   13
// );
// list.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
//   14
// );
// list.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
//   15
// );
// list.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
//   16
// );
const list = new ListNode(0);
list.next = new ListNode(7);
list.next.next = new ListNode(1);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(8);
list.next.next.next.next.next = new ListNode(5);
list.next.next.next.next.next.next = new ListNode(6);
list.next.next.next.next.next.next.next = new ListNode(6);
list.next.next.next.next.next.next.next.next = new ListNode(8);
list.next.next.next.next.next.next.next.next.next = new ListNode(3);
list.next.next.next.next.next.next.next.next.next.next = new ListNode(8);
list.next.next.next.next.next.next.next.next.next.next.next = new ListNode(5);
list.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
  1
);
list.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
  9
);
list.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
  4
);
list.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(
  1
);
// const list2 = new ListNode(1);
// list2.next = new ListNode(2);

// console.log(list);
// console.log(removeNthFromEnd(list, 3)); // 1,3,4
// console.log(list2);
// console.log(removeNthFromEnd(list2, 1)); //[]
// console.log(removeNthFromEnd(list2, 2)); //2
// console.log([0, 7, 1, "!4!", 8, 5, 6, 6, 8, 3, 8, 5, 1, 9, 4, 1].length);// 16len, 13 == idx4
console.log(removeNthFromEnd(list, 13)); //4
