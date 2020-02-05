/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let isPrime = n => {
  for (let i = 2; i * i <= n; i++) {
    if (isPrime(i) && n % i === 0) {
      return false;
    }
  }
  return true;
};

function prime10001() {
    let count = 1
    for(let i = 3; count <= 10001; i+=2) {
        if(isPrime(i)){
            count++
        }
        if(count === 10001) {
            return i
        }
    }
}

console.log(prime10001())
