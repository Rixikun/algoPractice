/*
The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 26972593−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2p−1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433×27830457+1.

Find the last ten digits of this prime number.
*/

// primeNum = 28433n * 2n ** 7830457n + 1n;
// num % 10,000,000,000 to get last 10 dig
// n**(a+b) === n**a * n**b
// if b === 2a then n**b === n**a * n**a

let powMod = (a, n, p) => {
  //base 0||1
  if (n === 0n) {
    return 1n;
  } else {
    let x = powMod(a, n / 2n, p);
    //p is last 10 dig
    //account if 'n' is odd (then multiply once more); otherwise do nothing
    return (x * x * (n % 2n === 1n ? a : 1n)) % p;
  }
};

function nonMP() {
  //the 10 digits remainder, aka last 10 dig
  let x = 10n ** 10n;
  return (28433n * powMod(2n, 7830457n, x) + 1n) % x;
}

//multiplication of 2 static ndigit ending will result in the same ndigit num

console.log(nonMP());
