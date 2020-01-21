let Hanoi = function(n) {
  this.pegs = { 1: [], 2: [], 3: [] };
  this.cnt = 0;
  this.sz = n;
  this.bad = false;

  for (let i = 0; i < this.sz; i++) {
    this.pegs[1].push(n - i);
  }
};

Hanoi.prototype.move = function(a, b) {
  if (this.bad === true) return;

  let thing = this.pegs[a].pop();
  if (thing === undefined) {
    this.bad = true;
    return;
  }

  if (
    this.pegs[b].length > 0 &&
    thing >= this.pegs[b][this.pegs[b].length - 1]
  ) {
    this.bad = true;
    return;
  }

  this.pegs[b].push(thing);
  this.cnt += 1;
};

Hanoi.prototype.submit = function(n) {
  if (this.bad === true) return false;
  if (this.pegs[1].length !== 0) return false;
  if (this.pegs[2].length !== 0) return false;
  if (this.pegs[3].length !== this.sz) return false;
  for (let i = 0; i < this.sz; i++) {
    if (this.pegs[3][i] !== this.sz - i) return false;
  }
  if (this.cnt !== n) return false;
  return true;
};

// let test = new Hanoi(2);
// console.log(test);
// test.move(1, 2);
// console.log(test);
// test.move(1, 3);
// console.log(test);
// test.move(2, 3);
// console.log(test);
// console.log(test.submit(3));

/*
solve(), returns num of min moves to complete tower
n-1 is solved when:
storage has n-1 to 1
target has nothing
start has n
once it's solved:
move n to target
view storage as new start
start is new storage
target is target
*/
//declare 5 params, 3 for each peg type
let solve = (obj, n, start = 1, target = 3, storage = 2) => {
  console.log("pegs: ", obj.pegs, "bad: ", obj.bad);
  //base case: n = 1
  if (n === 1) {
    obj.move(start, target);
    return 1;
  }
  //for numbers higher than 1, view as n-1 until it reaches 1
  else {
    //while solving for n, we inevitably solve for n-1, but with a dif peg target
    //swap target & storage for n-1's target being storage (thus saving the original target for n)
    //save numerical value to a variable
    let moveA = solve(obj, n - 1, start, storage, target);
    //when recursive case is finished, n-1 to 1, should be on storage-target peg, and original target peg should be empty, start peg should only have n
    //move n from start to target peg, so target peg will finally have n as its base
    obj.move(start, target);
    //now we start from storage b/c n-1 is the biggest value & is at the base
    //original start is empty b/c n JUST got moved
    //make storage as start, start as storage, target remains target
    let moveB = solve(obj, n - 1, storage, target, start);
    //important to shuffle again in moveB, as now we are finally going from base n down to n-1
    console.log("count: ", moveA + moveB + 1);
    //moveA does x moves, moveB does y moves, and between there is obj.move() once, so +1
    return moveA + moveB + 1;
  }
};

let test2 = new Hanoi(4);
let steps = solve(test2, 4);
console.log(test2.submit(steps));
