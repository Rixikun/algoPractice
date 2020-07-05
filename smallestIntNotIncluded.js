/*
return smallest positive integer not included in the input array
*/

function solution(A) {
  let min = 1;
  let memo = {};
  let flag = false;
  A.forEach((e) => {
    if (!memo[e] && e > 0) {
      memo[e] = true;
    }
  });
  let shortenedArr = Object.keys(memo);
  let smallest;
  if (!shortenedArr.length) {
    return min;
  } else {
    smallest = Math.min(...shortenedArr);
  }
  if (smallest !== 1) {
    return min;
  } else {
    min = smallest + 1;
    while (!flag) {
      if (!memo[min]) {
        flag = true;
        return min;
      } else if (memo[min]) {
        delete memo[min];
        min++;
      }
    }
  }
}

let input = [-1, -3];
let input2 = [1, 2, 4];
console.log(solution(input));
console.log(solution(input2));
