/*
use recursion to convert "12345" to 12345
string to number value, individual chars
or
merge sort
*/

function conversion(str) {
  //base case: single char
  if (str.length === 1) {
    return Number(str);
  } else {
    //backward
    // console.log('x: ', str.slice(0, str.length-1))
    // return Number(str[str.length-1]) + (conversion(str.slice(0, str.length-1))* 10^ )
    //forward
    // console.log('x: ', str.slice(1))
    // console.log(Number(str[0]) * (10**(str.length-1)))
    return Number(str[0]) * 10 ** (str.length - 1) + conversion(str.slice(1));
  }
}

let test = "12345";
console.log(typeof conversion(test), conversion(test)); //12345
