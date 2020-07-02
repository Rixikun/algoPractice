/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.
Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
Note:
The number of nodes in the given list will be between 1 and 100.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var middleNode = function(head) {
  let curr = head
  let two = head
  while(two && two.next) {
    curr = curr.next
    two = two.next.next
  }
  return curr.val
};

var middleNode2 = function(head) {
  let count = 0
  let pointer = head
  while(pointer){
    count++
    pointer = pointer.next
  }
  count = Math.floor(count/2)
  while(count--) {
    head = head.next
  }
  return head
};

const list = new ListNode(1,2)
list.next = new ListNode(2,3)
list.next.next = new ListNode(3,4)
list.next.next.next = new ListNode(4,5)
list.next.next.next.next = new ListNode(5,6)
console.log(list)
// console.log(list.next.next.next.next)
console.log(middleNode2(list))
