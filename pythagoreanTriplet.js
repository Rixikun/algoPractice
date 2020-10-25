/**
Pythagorean Triplet in an array

Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.
*/

const input1 = [3, 1, 4, 6, 5]
// Output: True
// There is a Pythagorean triplet (3, 4, 5).

const input2 = [10, 4, 6, 12, 5]
// Output: False
// There is no Pythagorean triplet.


function pyTriplet(nums){
  const sorted = nums.sort((a,b) => a-b)
  function isPy(a,b,c){
   return a * a + b * b === c * c
  }
  for(let c = nums.length - 1; c >= 0; c--){
    let a = 0;
    let b = c - 1;
    while(a < b){
      for(let a = 0; a < b; a++){
        if(isPy(nums[a], nums[b], nums[c]) === true){
          return true;
        }
      }
      b--;
    }
  }
  return false;
}



console.log(pyTriplet(input1))
console.log(pyTriplet(input2))
