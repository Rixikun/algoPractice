/*
 Valley: below sea level (0)
 Always starts at 0
 "U"  - Up
 "D"  - Down
 Given a string of Up/Down steps in-order, how many valleys exists

ex: 1
S = "UDDDUDUU"

_/\      _
   \    /
    \/\/
Result: 1 Valley

ex: 2
S = "UDDDUDUUDU"

_/\      _  _
   \    / \/
    \/\/
Result: 2 Valleys

*/

function findValley(str){
    let isInValley = false;
    let height = 0;
    let count = 0;
  
    for(let i = 0; i < str.length; i++){
      const dir = str[i]
      if(dir === "U"){
        height++
      } else if(dir === "D") {
        height--
      }
  
      if(height === 0 && isInValley){
        count++
        isInValley = false
      } else if(height < 0){
        isInValley = true
      }
    }
    return count
  }
  
  
  console.log(findValley("UDDDUDUU")) // 1
  console.log(findValley("UDDDUDUUDU"))  // 2
  
  