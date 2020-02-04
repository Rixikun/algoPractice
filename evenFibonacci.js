// function fib(num, memo = []) {
//   if (num === 0 || num === 1) {
//     return num;
//   } else {
//     memo[0] = 0;
//     memo[1] = 1;
//     for (let i = 2; i < num; i++) {
//       if( (memo[i - 1] + memo[i - 2]) < 4000000) {

//         memo[i] = memo[i - 1] + memo[i - 2];
//       }
//     }
//     memo[num - 1] + memo[num - 2];
//   }
//   let even = memo.filter(num => num % 2 === 0);
//   return even.reduce((acc,curr) => {
//     return acc + curr
//   }, 0)
// }



// console.log(fib(10));
// console.log(fib(40));
// console.log(fib(100));

function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fib(num - 2) + fib(num - 1);
  }
}
function sumEven(){
  let sum = 0;
  for (let i = 0; fib(i) <= 4000000; i++) {
    if (fib(i) % 2 === 0) {
      sum += fib(i);
    }
  }
  return sum
}

console.log(sumEven);

