/** https://leetcode.com/problems/permutation-in-string/

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False

Note: all lowercase, has length

 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // sliding window technique: shift 1 char over
    // 'window' = a substring of s2
    // determine if s1 is anagram of s2
      // true if: length, unique char, & char freq are same
      // if true, substring perm found, else false
    // create dict for s1 & s2-windows
    if(s1.length > s2.length) return false;
    const subSize = s1.length
    const s1Freq = {}
    const s2Freq = {}
    
    // fill s1freq
    for(let i = 0; i < subSize; i++){
      const char = s1[i]
      s1Freq[char] = s1Freq[char] ? ++s1Freq[char] : 1
    }
  
    // fill s2freq
    let left = 0;
    for(let i = 0; i < s2.length - subSize + 1; i++){
      let right = i + subSize - 1;
      if(i === 0){
        // update freq chart per window
        for(let j = i; j < i + subSize; j++) {
          const char = s2[j]
          s2Freq[char] = s2Freq[char] ? ++s2Freq[char] : 1
        }
      } else {
        const prev = s2[left]
        // delete or decrement when shifting
        if(s2Freq[prev]){
          if(s2Freq[prev] < 2){
            delete s2Freq[prev]
          } else {
            s2Freq[prev] = s2Freq[prev] - 1
          }
        }
        s2Freq[s2[right]] = s2Freq[s2[right]] ? ++s2Freq[s2[right]] : 1
        // shift over
        left++
      }
      // compare
      if(compare(s1Freq, s2Freq)){
        return true
      }
    }
  
    function compare(str, window){
      for(let char in str){
        if(str[char] !== window[char]){
          return false
        }
      }
      return true
    }
    // else no substring perm
    return false
  }
  
  console.log(checkInclusion("ab","eidbaooo"))
  console.log(checkInclusion("ab","eidboaoo"))
  console.log(checkInclusion("adc","dcda")) //true
  console.log(checkInclusion("a","ab")) //true