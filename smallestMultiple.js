/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/
//3628800

function factorsOf20(num) {
  let factors = []
  for (let i = 2; i <= 20; i++) {
    if (num % i !== 0) {
      return false
    }
    factors.push(i)
  }
  return true
}


function isFactor(num) {
    for (let i = 3; i * i <= num; i++) {
      if (num % i === 0) {
        return i;
      }
    }
}

const smallestM =()=> {
   let flag = false
  for(let i = 4; flag === false; i++) {
    if(factorsOf20(i) === true) {
      flag = true
      return i
    }
  }
}

console.log(smallestM())
