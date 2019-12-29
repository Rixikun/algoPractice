/**
 * Initialize your data structure here. (from leetcode)
 */

var Stack = function() {
  this.s = [];
};

Stack.prototype.push = function(x) {
  this.s.push(x);
};

Stack.prototype.pop = function() {
  return this.s.pop();
};

Stack.prototype.peek = function() {
  return this.s[this.s.length - 1];
};

Stack.prototype.size = function() {
  return this.s.length;
};

var MyQueue = function() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.stack2.size()) {
    while (this.stack1.size()) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.stack2.size()) {
    while (this.stack1.size()) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (!this.stack1.size() && !this.stack2.size()) {
    return true;
  }
  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var x = new MyQueue();
for (let i = 0; i < 10; i++) x.push(i);
console.log(x);

/* for clarity

var MyQueue = function() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
};

MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
  if (!this.stack2.size()) {
    while (this.stack1.size()) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

MyQueue.prototype.peek = function() {
  return this.stack2[this.stack2.size() - 1];
};

MyQueue.prototype.empty = function() {
  if (!this.stack1.size() && !this.stack2.size()) {
    return true;
  }
  return false;
};

*/
