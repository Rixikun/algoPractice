/* https://leetcode.com/problems/majority-element/
 
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function(nums) {
    const n = Math.floor(nums.length/2)
    const memo = new Map()
    for(let i = 0; i < nums.length; i++){
      let num = nums[i]
      if(!memo.has(num)){
        memo.set(num, 1)
      } else {
        memo.set(num, memo.get(num) + 1)
      }
      if(memo.get(num) > n){
        return num
      }
    }
  };
  
  var majorityElement = function(nums) {
    let curr = null // element
    let count = 0
  
    for(let i = 0; i < nums.length; i++){
      let num = nums[i]
      if(count === 0){
        curr = num
      }
      if(num === curr){
        count++
      } else if(num !== curr){
        count--;
      }
    }
    return curr
  }
  
  console.log(majorityElement([3,2,3])) //3
  console.log(majorityElement([2,2,1,1,1,2,2])) //2