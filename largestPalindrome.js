/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// function largestP() {
//   //100*100 is smollest: 10000
//   //999*999 is the largest possible product: 998001
//   //then find the next largest palindrome <= 998001, which is NOT palin
//   //then check if it can be a product of two 3-dig nums
//   let start = 998001;
//   let someNum = String(start - 1);
//   let pal = 997799;
//   if (isPal(start) === true) {
//     return start;
//   } else {
//     if (pal < start) {
//       if (isPal(pal)) {
//         return pal;
//       }
//     }
//     // while (Number(someNum) < pal) {
//     //   console.log("should be 997799");
//     //   break;
//     // }
//   }
// }

//max call exceed
function largestP() {
  let largest = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (isPal(i * j)) {
        if (i * j > largest) {
          largest = i * j;
        }
      }
    }
  }
  return largest;
}

console.log(largestP());

function isPal(num) {
  num = String(num);
  //base case
  if (num.length === 1 || num.length === 0) {
    return true;
  }
  if (num[0] !== num[num.length - 1]) {
    return false;
  } else {
    return isPal(num.slice(1, num.length - 1));
  }
}
// console.log(isPal(202));
// console.log(isPal(201));
