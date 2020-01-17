/*
You are given a non-empty array of integers. Each element represents the maximum number of steps you can take forward. For example, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4. Write a function that returns the minimum number of jumps needed to reach the final index. Note that jumping from index i to index i + x always constitutes 1 jump, no matter how large x is.

Sample input: [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3] //arr.len = 11
Sample output: 4(3-->4 or 2-->2 or 3-->7-->3)
*/
function minNumberOfJumps(array) {
  // Write your code here.
}

/*
dynamic programming??
reach end w/ min # of JUMPS
each landing spot determines max steps
basically: How do I reach the "largest" distance earliest
shortest path? maybe not optimal substructure
min distance: arr.length -1
*/
