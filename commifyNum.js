/*
Implement a function that given an integer number num, it returns the a string representation of the number, comma separated.

//1234 
//1,234 
  
// 104450 -> 104,450 
// 123123123 -> 123,123,123 
  
// 1000000 -> 10,00,000 
// 00010100 
*/


function convertToComma(num){
    const strNum = String(num)
    let res = ""
    let count = 0
  
    for(let i = strNum.length - 1; i >= 0; i--){
      const char = strNum[i]
      if(count === 3){
        res += ","
        count = 0
      }
      res += char
      count++
    }
  
    return res.split("").reverse().join("")
  }
  
  
  
  console.log(convertToComma(1234)) // 1,234
  console.log(convertToComma(123123123)) // 123,123,123 
  