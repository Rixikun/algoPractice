/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
*/
/*
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function(dividend, divisor) {
//   let quotient = 0;
//   let negative = false;
//   let doubleNeg = dividend < 0 && divisor < 0;
//   let max = 2147483647;
//   let maxPlusOne = 2147483648;

//   //should quotient be negative?
//   if(dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0){
//     negative = true;
//   }
//   //make all positive
//   dividend = Math.abs(dividend)
//   divisor = Math.abs(divisor)

//   while(dividend >= divisor){
//     dividend -= divisor;
//     quotient++;

//     if(quotient >= max) {
//       quotient = max
//       if(doubleNeg){
//         quotient = max - 1
//       }
//       break
//     }
//   }
//   return negative ? -quotient : quotient
// };

var divide = function (dividend, divisor) {
  const maxInt = 2 ** 31 - 1
  let sign = 1
  if (dividend < 0) sign = sign * (-1)
  if (divisor < 0) sign = sign * (-1)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let originalDivisor = divisor
  let res = 0
  while (dividend >= divisor) {
      let shift = 0;
      // num >> 1 === num / 2
      // num << 1 === num * 2
      while (divisor <= (dividend >> 1)) {
          shift++;
          divisor = divisor << 1
      }
      res = res + (1 << shift)
      dividend = dividend - divisor
      divisor = originalDivisor
  }
  if (res > maxInt && sign === 1) return maxInt
  if (res > maxInt + 1 && sign === -1) return maxInt

  if (sign === -1 && res != 0)  res = res * (-1)
  return res
};

// console.log(2**31 - 1)
// console.log(2147483648>>1)
// console.log(2147483648/2)
// console.log(2147483648>>2)
// console.log(2147483648/4)
// console.log(1<<4)
// console.log(divide(10,3)) //3
// console.log(divide(7,-3)) //-2
// console.log(divide(-1,1)) //-1
// console.log(divide(-4,-1)) //4

// console.log(divide(-2147483648,1)) //-2147483648
// console.log(divide(-2147483648,-1)) //2147483647
// console.log(divide(-2147483648,2)) // need Optimization
