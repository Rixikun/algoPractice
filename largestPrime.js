/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
too large, i dunno how to approach this for efficiency

*/

function largestPrime(num) {
  //   console.log("pass", num);
  if (isPrime(num)) {
    return num;
  }
  if (num % 2 === 0) {
    return largestPrime(num / 2);
  }
  if (!isPrime(num)) {
    // console.log("divide me", num);
    return largestPrime(num / isFactor(num));
  }
}

function isFactor(num) {
  if (!isPrime(num)) {
    for (let i = 3; i * i <= num; i++) {
      if (num % i === 0) {
        return i;
      }
    }
  }
}

let isPrime = n => {
  for (let i = 2; i * i <= n; i++) {
    if (isPrime(i) && n % i === 0) {
      return false;
    }
  }
  return true;
};

// function isPrime(n) {
//     let count = 3;
//     while(count < )
// }

console.log(largestPrime(600851475143));
// console.log(largestPrime(7272));
// console.log(largestPrime(100))
// console.log(isPrime(25))
// console.log(isPrime(7272))
// console.log(isFactor(7272))
