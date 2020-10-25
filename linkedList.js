class Node {
  constructor(val) {
    (this.value = val), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    if (!this.head) {
      this.head = new Node(val);
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(val);
    }
    return this;
  }

  delete(val) {
    let curr = this.head;
    while (curr.next) {
      if (curr.next.value === val) {
        curr.next = curr.next.next;
        return this;
      }
      curr = curr.next;
    }
    return this;
  }

  print(cb) {
    let curr = this.head;
    while (curr) {
      cb(curr.value);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList
  .add(4)
  .add(4)
  .add(4)
  .add(4)
  .add(4)
  .delete(4);

// linkedList.head.next.next.next = linkedList.head;

const linkedList2 = new LinkedList();
linkedList2
  .add(1)
  .add(2)
  .add(3)
  .add(2)
  .add(1);

const linkedList3 = new LinkedList();
linkedList3
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6);

const linkedList4 = new LinkedList();
linkedList4
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(3)
  .add(2)
  .add(1);

function isLooped(list) {
  if (!list) return null;
  let curr = list.head;
  let second = list.head;
  while (curr.next && second.next) {
    if (curr.next === null || second.next.next === null) {
      return false;
    }
    curr = curr.next;
    second = second.next.next;
    if (curr === second) {
      return true;
    }
  }
  return false;
}

function isPalindrome(list) {
  const holdValues = [];
  let curr = list.head;
  while (curr) {
    holdValues.push(curr.value);
    curr = curr.next;
  }
  while (holdValues.length) {
    if (
      holdValues.length === 1 ||
      (holdValues.length === 2 && holdValues[0] === holdValues[1])
    ) {
      return true;
    }
    if (holdValues[0] === holdValues[holdValues.length - 1]) {
      holdValues.pop();
      holdValues.shift();
    } else if (holdValues[0] !== holdValues[holdValues.length - 1]) {
      return false;
    }
  }
}

function isPalindrome2(list) {
  let curr = list.head;
  let second = list.head;
  while (second.next && second.next.next) {
    curr = curr.next;
    second = second.next.next;
  }
  let rev = reverseList(curr);
  let third = list.head;
  while (third && rev) {
    if (third.value !== rev.value) {
      return false;
    }
    third = third.next;
    rev = rev.next;
  }
  return true;
}

function reverseList(list) {
  let curr = list;
  let prev, next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function isPalindrome3(list) {
  const holdValues = [];
  let curr = list.head;
  while (curr) {
    holdValues.push(curr.value);
    curr = curr.next;
  }
  let left = 0;
  let right = holdValues.length - 1;
  while (left < right) {
    if (holdValues[left] === holdValues[right]) {
      left++;
      right--;
    } else if (holdValues[left] !== holdValues[right]) {
      return false;
    }
  }
  return true;
}

function isPalindrome4(list) {
  if(!list || !list.next){return true}
  if(!list.next.next && list.value === list.next.value) {return true}
  let curr = list.head;
  let second = list.head;
  let holdValues = [curr.value];
  let even = true;
  while (second.next && second.next.next) {
    curr = curr.next;
    holdValues.push(curr.value);
    second = second.next.next;
    even = !even;
    if (second.next) {
      even = !even;
    }
  }
  let counter = holdValues.length - 1;
  while (curr && curr.next) {
    if (even) {
      console.log('even')
      if (holdValues[counter] !== curr.next.value) {
        return false;
      }
    }
    if (!even) {
      console.log('odd')
      console.log(counter, holdValues[counter], curr.value)
      if (holdValues[counter] !== curr.value) {
        return false;
      }
    }
    curr = curr.next;
    counter--;
  }
  if(!curr.next){return false}
  return true;
}

const linkedList5 = new LinkedList();
linkedList5
  .add(1)
  .add(2)
  .add(3)
  .add(2)
  .add(1);

const linkedList6 = new LinkedList();
linkedList6
  .add(1)
  .add(2)
  .add(1)
  // .add(1);

// console.log(isLooped(linkedList));
// console.log(isPalindrome4(linkedList5)); //12321
console.log(isPalindrome4(linkedList6)); //1221



////////////////////////////////////////////////////////////

/* LinkedList */

function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
    return length
  };

  this.head = function(){
    return head
  };

  this.add = function(element){
   if(head === null) {
     head = new Node(element)
   } else {
     let curr = head
     while(curr.next){
       curr = curr.next
     }
     curr.next = new Node(element)
   }
   length++;
  }; 

  this.remove = function(element){
    let curr = head;
    let prev;
    if(curr.element === element) {
      head = curr.next
    } else {
      while(curr.element !== element){
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next
    }
    length--;
  };
  
  this.isEmpty = function() {
    return length === 0
  };

  this.indexOf = function(element) {
    let idx = -1;
    let curr = head
    while(curr){
      idx++;
      if(curr.element === element) return idx;
      curr = curr.next
    }
    return -1
  };

  this.elementAt = function(index) {
   let count = 0;
   let curr = head;
   while(count < index){
     count++;
     curr = curr.next
   }
   return curr.element;
  };
  
  
  this.addAt = function(index, element){
   if(index > length) return false;
   let count = 0;
   let curr = head;
   let prev = curr;
   while (count < index) {
     prev = curr;
     curr = curr.next;
     count++;
   }
    let added = new Node(element)
    prev.next = added
    added.next = curr
    length++;
  }
  
  this.removeAt = function(index) {
   if(index > length || index <= 0) return null;
   let count = 0;
   let curr = head;
   let prev = curr;
   if(index === 0) {
     head = curr.next
   } else {
    while (count < index) {
      prev = curr;
      curr = curr.next;
      count++;
    }
    prev.next = curr.next
    }
    length--;
    return curr.element
  }
} 



///////////////

var deleteDuplicates = function(head) {
  if(!head) return null;
  let prev = head;
  let curr = head.next;
  while(curr) {
    if(prev.val === curr.val){
      prev.next = curr.next
    } else {
      prev = curr
    }
    curr = curr.next
  }
  return head
};

const head = new ListNode(1,new ListNode(1, new ListNode(2)))
const head2 = new ListNode(1,new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))

console.log(deleteDuplicates(head2))



/////////////////////////

function fullSum(nodeA, nodeB){
  let currA = reverseList(nodeA)
  let currB = reverseList(nodeB)
  let res = new ListNode()
  let currRes = res

  let carryOne = false
  while(currA || currB){
    let a = currA ? currA.val : 0
    let b = currB ? currB.val : 0
    let sum = carryOne ? 1 + a + b : a + b
    carryOne = false
    if(sum > 9){
      sum -= 10
      carryOne = true
    }
    
    currRes.val = sum

    if(currA) {
      currA = currA.next
    }
    if(currB) {
      currB = currB.next
    }
    currRes.next = new ListNode()
    currRes = currRes.next
  }

  if(carryOne) currRes.val = 1

  return reverseList(res)
}



const a = new ListNode(9, new ListNode(8, new ListNode(1)))
const b = new ListNode(6, new ListNode(7))
const c = new ListNode(9, new ListNode(8))
const d = new ListNode(6, new ListNode(7))

console.log(fullSum(a, b)) // 1-0-4-8