// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
            
// Input: s = "abcabcbb"
//{a:0,b:1,c:2,a:3}
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
               
// Input: s = 'bbbbbbbb'
// Output s

// start pointer ending pointer

const lengthOfLongestSubstring = (str) => {
    let idxMap = new Map()
    let count = 0;
    let longest = 0;
    for(let i = 0; i < str.length; i++){
      const char = str[i]
      if(!idxMap.has(char)){
        idxMap.set(char, i)
        count++
        longest = Math.max(longest, count)
        console.log(char, 'count', count)
      } else {
        count = 0
        i = idxMap.get(char)
        idxMap = new Map()
      }
    }
    return longest
  }
  
  
  
  console.log(lengthOfLongestSubstring("abcabcbb")) // 3
  // console.log(lengthOfLongestSubstring("abca")) // 3
  // console.log(lengthOfLongestSubstring("bbbbbbbbb")) // 1