// function fib(num, memo = []) {
//   if (num === 0 || num === 1) {
//     return num;
//   } else {
//     memo[0] = 0;
//     memo[1] = 1;
//     for (let i = 2; i < num; i++) {
//       memo[i] = memo[i - 1] + memo[i - 2];
//     }
//     memo[num - 1] + memo[num - 2];
//   }
//   let even = memo.filter(num => num % 2 === 0);
//   // console.log(even);
//   let result;
//   for (let i = 0; i < even.length; i++) {
//     if (even[i - 1] + even[i] > 4000000) {
//       result = even[i - 2] + even[i - 1];
//     } else {
//       result = even[i - 1] + even[i];
//     }
//   }
//   return result;
// }

// console.log(fib(10));
// console.log(fib(40));
// console.log(fib(100));

// function fib(num) {
//   if (num === 0 || num === 1) {
//     return num;
//   } else {
//     return fib(num - 2) + fib(num - 1);
//   }
// }
// let s = 0;
// for (let i = 0; fib(i) <= 4000000; i++) {
//   if (fib(i) % 2 === 0) {
//     s += fib(i);
//   }
//   return fib(i);
// }
// // return s;

// console.log(fib(s));

function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    console.log(fib(num - 2), "||", fib(num - 1));
    return fib(num - 2) + fib(num - 1);
  }
}

console.log(fib(3));
