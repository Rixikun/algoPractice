/* https://leetcode.com/problems/flood-fill/
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.
*/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/*
image = [[1,1,1],
         [1,1,0],
         [1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],
         [2,2,0],
         [2,0,1]]


Input: 
    [[0,0,0],
     [0,1,1]]
sr = 1, sc= 1, newColor = 1
*/

// Time: O(n) || Space: O(n)
function floodFillBFS(image, sr, sc, newColor){

    let originalColor = image[sr][sc];
    if(originalColor === newColor) return image; 
  
    let stack = [[sr, sc]];
  
    while(stack.length) { 
      let [row, col] = stack.pop(); 
  
      let val = image[row][col]; 
      if(val === originalColor) {
         image[row][col] = newColor;
  
        if(checkNeighbors(image, row + 1, col, originalColor)) stack.push([row + 1, col])
        if(checkNeighbors(image, row - 1, col, originalColor)) stack.push([row - 1, col])
        if(checkNeighbors(image, row, col + 1, originalColor)) stack.push([row, col + 1])
        if(checkNeighbors(image,  row, col - 1, originalColor)) stack.push([row, col - 1])
      }    
    }
  
    return image; 
  }
  
  function checkNeighbors(image, row, col, originalColor) {
    if(row < image.length && row >= 0 && col < image[0].length && col >= 0) {
        if(image[row][col] === originalColor){
          return true;
        }
    }
  
    return false; 
  } 
  
  console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
  
 ////////////

 var floodFillDFS = function(image, sr, sc, newColor) {
    function dfs(i, j, newColor, oldColor) {
      if(newColor === oldColor) return;
      if(i < 0 || j < 0 || i >= image.length || j >= image[0].length || image[i][j] !== oldColor) return;

      image[i][j] = newColor;
      dfs(i, j - 1, newColor, oldColor)
      dfs(i, j + 1, newColor, oldColor)
      dfs(i - 1, j, newColor, oldColor)
      dfs(i + 1, j, newColor, oldColor)
    }
    dfs(sr, sc, newColor, image[sr][sc])
    return image
};