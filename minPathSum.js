/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/
/*
 * @param {number[][]} grid
 * @return {number}
 */
// how to move down or right (row+1, col+1)
// examine all possibilities, recursion
// memo smallest sum
var minPathSum = function(grid) {
  let rowEnd = grid.length - 1
  let colEnd = grid[0].length - 1
  let memo = []
  function traverse(x,y){
    //check for bad cases
    if(x > rowEnd || y > colEnd) {
      return Number.MAX_SAFE_INTEGER;
    }
    let curr = grid[x][y]
    //check if end
    if(x === rowEnd && y === colEnd) {
      return curr
    }
    //if row not defined yet, create arr
    if(!memo[x]) {
      memo[x] = []
    }
    //if point not defined yet, set it as sum of itself & less of Right or Down recursion
    if(!memo[x][y]) {
      memo[x][y] = curr + Math.min(traverse(x, y+1), traverse(x+1, y))
    }
    return memo[x][y]
  }
  // see if there's a valid grid, then start
  return (!grid.length||!grid[0].length) ? 0 : traverse(0,0)

};

var minPathSumDP = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const row = grid.length, col = grid[0].length;
  for(let i = 0; i < row; i++) {
    //in each row check each col
      for (let j = 0; j < col; j++) {
        //curr cell becomes summation of prior cell
          //if either is a 0 coord to prev undefined when comparing min
          if (i == 0 || j == 0) {
              if (j > 0 && j < col) {
                grid[i][j] += grid[i][j - 1];
              }
              if (i > 0 && i < row) {
                grid[i][j] += grid[i - 1][j];
              }
              console.log(i,j, grid[i][j])
          } else {
            //make sure to sum with the lesser value
            console.log('a',i,j, grid[i][j])

              grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
              console.log('b',i,j, grid[i][j])

          };
      };
  };
  //last cell will hold smallest sum of all prev smaller cells
  return grid[row - 1][col - 1];
};


let input = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
let input2 = [
  [1,2],
  [1,1]
]
// console.log(minPathSum(input)) // 7
// console.log(minPathSum(input2)) // 3
console.log(minPathSumDP(input))
// console.log(minPathSumDP(input2))

