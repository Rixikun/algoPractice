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

MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  let last = this.stack2.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return last;
};

var x = new MyQueue();
for (let i = 0; i < 10; i++) x.push(i);
console.log(x);
