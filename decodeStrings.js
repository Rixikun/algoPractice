/* https://leetcode.com/problems/decode-ways/

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

Example 1:
Input: s = "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.

Example 4:
Input: s = "1"
Output: 1
 
Constraints:
1 <= s.length <= 100
s contains only digits and may contain leading zero(s).

*/

/**
 * @param {string} s
 * @return {number}
 */

var helper = function(str, k, memo){
    //base case: "" = 1 "0" = 0
    if(k === 0) {
      return 1
    }
    const idx = str.length - k;
    if(str[idx] === "0"){
      return 0
    }
    if(memo[idx] !== null){
      return memo[idx]
    }
    let res = helper(str, k - 1, memo)
    
    if(k >= 2 && str.slice(idx, idx + 2) <= 26){ 
      memo[0] = helper(str, k - 2, memo)
      res += helper(str, k - 2, memo)
    }
    memo[idx] = res
    return res
  };
  
  var numDecodings1 = function(str) {
    const memo = new Array(str.length + 1).fill(null)
    return helper(str, str.length, memo)
  };
  
  //
  
  var numDecodings = function(str) {
    if(str.length === 0 || str[0] === "0") return 0
    let first = 1
    let second = first;
    let third;
  
    for(let i = 1; i <= str.length; i++){
      if(str[i - 1] === "0") {
        third = 0
      } else {
        third = second
      }
      if(i > 1 && str[i-2] === "1" || str[i-2] === "2" && str[i-1] <= "6") {
        third += first
      }
      first = second;
      second = third;
  
    }
    return second
  
  }
  
  console.log(numDecodings("12")) // 2
  console.log(numDecodings("226")) // 3
  console.log(numDecodings("0")) // 0
  console.log(numDecodings("1")) // 1