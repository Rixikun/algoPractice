/*
You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.
sample input: [
  [1,0,0,1,0],
  [1,0,1,0,0],
  [0,0,1,0,1],
  [1,0,1,0,1],
  [1,0,1,1,0],
]
sample output: [1,2,2,2,5]
*/

function riverSizes(matrix) {
  const visited = {};
  const sizes = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let key = `${i},${j}`;
      if (row[j] === 1 && !visited[key]) {
        //check for neighbors
        sizes.push(transverse(matrix, i, j));
      }
    }
  }
  function transverse(matrix, outer, inner) {
    let size = 1;
    visited[`${outer},${inner}`] = true;

    const adjacent = {
      up: [outer - 1, inner],
      down: [outer + 1, inner],
      left: [outer, inner - 1],
      right: [outer, inner + 1]
    };
    for (let direction in adjacent) {
      let x = adjacent[direction][0];
      let y = adjacent[direction][1];
      if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length) {
        if (!visited[`${x},${y}`] && matrix[x][y] === 1) {
          size += transverse(matrix, x, y);
        }
      }
    }
    return size;
  }
  return sizes;
}

let test1 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];
console.log(riverSizes(test1));
// console.log([0, 1].join(","));
