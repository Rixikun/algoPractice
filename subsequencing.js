/*
 given a target, is x a subsequence?
 subsequence:  contains el of target in the same relative order
 deletion from target & addition to x allowed
 eg: target = ABCDEF
 x = ABD
 true: AB *C* D *EF*
*/
function subSequence(x, target) {
  //base case: false - still x but ran thru all of target
  if (!target.length && x.length) {
    return false;
  }
  //base case: true
  if ((!target.length && !x.length) || (target.length && !x.length)) {
    return true;
  }
  //recursive case:
  if (x.length) {
    if (x[0] === target[0]) {
      console.log("yes", target[0]);
      return subSequence(x.slice(1), target.slice(1));
    }
    if (x[0] !== target[0]) {
      console.log("no", target[0]);
      return subSequence(x, target.slice(1));
    }
  }
  //defaulting when we look thru all of target
  console.log("end");
  return false;
}

/*
would x[0] = target[0]?
if first el of target doesnt match, iterate to the next target[i+1]
only when x = target, x can iterate to x[i+1]
false: x leftover but done w/ target

*/
// console.log("ac: ", subSequence("ac", "abcd"));
console.log("c: ", subSequence("x", "abcd"));
