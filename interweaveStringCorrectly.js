/*
Write a function that takes in three strings and returns a boolean representing whether or not the third string can be formed by interweaving the first two strings. To interweave strings means to merge them by alternating their letters without any specific pattern. For instance, the strings "abc" and "123" can be interwoven as "a1b2c3", as "abc123", and as "ab1c23" (this list is nonexhaustive).

Sample input: "algoexpert", "your-dream-job", "your-algodream-expertjob" // true
*/

function interweavingStrings(x, y, target) {
  //base cases:
  //all empty, good
  if (!x.length && !y.length && !target.length) {
    return true;
  }
  //target finished but left over char
  if (!target.length && (x.length || y.length)) {
    return false;
  }
  //recursive case x:
  if (
    x.length &&
    x[0] === target[0] &&
    interweavingStrings(x.slice(1), y, target.slice(1)) === true
  ) {
    return true;
  }
  //if x falsey -> recursive case y:
  if (
    y.length &&
    y[0] === target[0] &&
    interweavingStrings(x, y.slice(1), target.slice(1)) === true
  ) {
    return true;
  }
  //nothing good?
  return false;
}

/*
going in order for one&two, create target as a possibility
have a new string as a result
place chars from one / two into indexes of result 'in order'
the first char of either string has to be str1.len||str2.len -1 length apart
target[0] should match one[0] || two[0] else {false}
*/
console.log(interweavingStrings("abc", "123", "abc123"));

console.log(interweavingStrings("abc", "123", "ayz789"));
