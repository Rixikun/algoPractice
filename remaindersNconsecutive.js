// * Return true if the array contains, somewhere, three increasing
// * adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
// * See the asserts below for examples of input
// * and expected output.
// * If you have node installed, all you need to do to test
// * your code is run: `node tripleThreat.js`. If you see errors,
// * it is because the tests below did not pass. Once the
// * tests do pass, you will see a log of `Success!`
function tripleThreat(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    let one = numArr[i];
    let two = numArr[i + 1];
    let three = numArr[i + 2];
    if (one + 1 === two && one + 2 === three) {
      return true;
    }
  }
  //default if not true
  return false;
}

const test = [1, 2, 3, 4, 5]; // true
const test2 = [6, 12, 30, 45, 8]; // false
const test3 = [42, 15, 7, 35, 36, 37, 120]; // true

console.log(tripleThreat(test));
console.log(tripleThreat(test2));
console.log(tripleThreat(test3));

// We need to deliver a package of cookies bags.  You will be given an inventory of small bags (1 kilo each) and big bags
// (5 kilos each) along with the goal amount of kilos we need to ship the customer.  Return the amount of small bags the package
// will contain assuming we always use big bags first.  Return -1 if it cannot be done.
// Input
// small (type: int) - The number of small bags we have to work with
// big (type: int) - The number of big bags we have to work with
// goal (type: int) - The goal weight of the package that we need to ship out
// Output
// In of how many small bags to use, if there isn't enough return -1.

function skittles(small, big, goal) {
  let remainder = goal - big * 5;
  if (remainder < 0) {
    let leftover = goal % 5;
    // console.log('L',leftover)
    if (small >= leftover) {
      return leftover;
    }
  }
  // console.log('R', remainder)
  if (small >= remainder) {
    return remainder;
  }
  //default
  return -1;
}

console.log(skittles(12, 2, 40)); // -1
console.log(skittles(5, 3, 19)); // 4
console.log(skittles(7, 30, 24)); // 4
console.log(skittles(30, 15, 12)); // 2
