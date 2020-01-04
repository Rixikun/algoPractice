/*
Write a function that takes in three strings and returns a boolean representing whether or not the third string can be formed by interweaving the first two strings. To interweave strings means to merge them by alternating their letters without any specific pattern. For instance, the strings "abc" and "123" can be interwoven as "a1b2c3", as "abc123", and as "ab1c23" (this list is nonexhaustive).

Sample input: "algoexpert", "your-dream-job", "your-algodream-expertjob" // true
*/

function interweavingStrings(one, two, target) {
  const charPool = (one + two).toLowerCase();
  console.log(charPool);
  const targetDict = {};
  target
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (!targetDict[char]) {
        targetDict[char] = 1;
      } else {
        targetDict[char]++;
      }
    });
  for (let i = 0; i < charPool.length; i++) {
    console.log(targetDict);
    if (targetDict[charPool[i]]) {
      targetDict[charPool[i]]--;
    } else if (!targetDict[charPool[i]] || targetDict[charPool[i]] < 0) {
      return false;
    }
  }
  return true;
}

/*
input 3 strings, 1 & 2 must be able to produce 3
output true/false
non alphanumeric seems ok
basically param1 & param2 can be just 1 big param if combined, just a char pool
so given 1 large string, can it be permutated to form the 3rd string?
iterate thru the target, see if the char exists in the char pool
*/
console.log(interweavingStrings("Hi", "Bye", "hibYE"));
