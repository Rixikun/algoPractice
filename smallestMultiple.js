/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/
//3628800

function smallestM(num = 3628800) {
  if (num <= 210) {
    return "hi";
  }
  for (let i = 10; i > 0; i--) {
    if (num % i !== 0) {
      return `false ${num}`;
    }
  }
  console.log(`ok ${num}`);
  smallestM(num / 10);
}

console.log(smallestM());
