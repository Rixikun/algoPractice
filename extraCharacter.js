/*
 
Given 2 strings of random length, determine what the single "extra" character is.
All ASCII characters allowed, case-sensitive.
StrA can be > or < or = to StrB length

*/

  // 2 O(N)
  // create histogram strA (or shorter string)
  // decrement iterating thru strB
  // consider edge cases that'll break the algo: length is equal or diff > 2

  function findExtra(strA, strB){
    if(Math.abs(strA.length - strB.length) !== 1){
      throw new Error('Exception message');
    }
    let shorter = strA
    let longer = strB
    if(strA.length > strB.length){
      shorter = strB
      longer = strA
    }
    console.log("shorter", shorter)
  
    const histogram = {}
  
    for(let i = 0; i < shorter.length; i++){
      const char = shorter[i]
      if(!histogram[char]){
        histogram[char] = 1
      } else {
        histogram[char]++
      }
    }
    console.log(histogram)
  
    for(let i = 0; i < longer.length; i++){
      const char = longer[i]
      if(!histogram[char]){
        return char
      }
      else if(histogram[char] === 0){
        return char
      } else {
        histogram[char]--
      }
    }
  }
  
  
  console.log(findExtra("abc", "abcx")) // x
  console.log(findExtra("bac", "axbc")) // x
  console.log(findExtra("abbc", "bac")) // b
  // console.log(findExtra("abb", "aac")) // throw error
  // console.log(findExtra("asdfg", "xyz")) // throw error