/*
The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 26972593−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2p−1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433×27830457+1.

Find the last ten digits of this prime number.
*/

// return 28433n * 2n ** 7830457n + 1n;
function nonMP() {
  // num % 10000000000
}

console.log(nonMP());

/*
function addmod(a, b, n) {
  //base case: b = 0 / 1
  if (b == 0n) {
    return 0n;
  }
  if (b == 1n) {
    return a;
  }
  return (addmod(a, b / 2n + 1n, n) + addmod(a, b / 2n, n)) % n;
}
*/
