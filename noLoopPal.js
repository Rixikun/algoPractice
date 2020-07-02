/*
create a func that returns T/F if its Palindrome
no loops
*/

function noLoopPal(string) {
  //base
  if (!string.length || string.length === 1) {
    return true;
  }
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  return noLoopPal(string.slice(1, string.length - 1));
}

console.log(noLoopPal("cat"));
console.log(noLoopPal("toot"));
console.log(noLoopPal("tacocat"));
