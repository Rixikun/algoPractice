/* fibonacci, but make it dynamic
*/

// Approach 1: Recursive
// return fib(n - 1) + fib(n - 2)

// Approach 2: Recursive but w memoization

// Approach: 3: Iterative
//      3
//   2      1
// 1 + 0

// Time: O(n) 
// Space: O(n)
function fibonacci(n){
    const array = [0, 1];
    for (let i = 2; i <= n; i++) {
      array[i] = array[i - 1] + array[i - 2]
    }
    return array[n - 1];
  }
  
  // space: O(1)
  function fibonacciConstant(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
      let nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++;
    }
  
    return n > 1 ? lastTwo[1] : lastTwo[0]
  }
  
  console.log(fibonacci(5));
  console.log(fibonacci(25));
  