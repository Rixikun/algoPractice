/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:
Consider the following matrix:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.
Given target = 20, return false.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    //dostuff: prove true (find match)
    // A: check current array's arr[0] & arr[last] element to see if the target falls in that range
        // if (true)
          // loop through the array
            // if (arr[i] > target) break from this array, go to the next!
  
    let set = {}
    for(let i = 0; i < matrix.length; i++){
      let first = matrix[i][0] 
      let last = matrix[i][matrix[i].length - 1]
      console.log(first, last)
      if(first <= target && last >= target){
        set[i] = matrix[i]
      }
    }
    for(let row in set){
      if(set[row].includes(target)){
        return true
      }
    }
    return false
  };
  let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  let input1 = 5 //true
  let input2 = 20 //false
  // searchMatrix(matrix, 5)
  // searchMatrix(matrix, 20)
  let matrix2 = [[-1,3]]
  let input3 = 3
  // searchMatrix(matrix2, input3) //true