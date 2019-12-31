/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */

/*
 In a 1 million by 1 million grid, the coordinates of each grid square are (x, y) with 0 <= x, y < 10^6.

We start at the source square and want to reach the target square.  Each move, we can walk to a 4-directionally adjacent square in the grid that isn't in the given list of blocked squares.

Return true if and only if it is possible to reach the target square through a sequence of moves.

0 <= blocked.length <= 200
blocked[i].length == 2
0 <= blocked[i][j] < 10^6
source.length == target.length == 2
0 <= source[i][j], target[i][j] < 10^6
source != target

Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
Output: false
Explanation:
The target square is inaccessible starting from the source square, because we can't walk outside the grid.

Input: blocked = [], source = [0,0], target = [999999,999999]
Output: true
Explanation:
Because there are no blocked cells, it's possible to reach the target square.
*/

var isEscapePossible = function(
  blocked,
  source,
  target //depth first search: if all adjacent cells are visited/blocked; escape route and go dive into parent's unvisited neighbors
) {
  //create obj to hold Visited cells
  const visited = {};
  //func to check if cell is blocked
  const blockMemo = {};
  blocked.forEach(block => (blockMemo[`${block[0]},${block[1]}`] = true));
  const checkBlocked = function(curr, blocked) {
    if (blockMemo[`${curr[0]},${curr[1]}`]) {
      return true;
    }
    return false;
  };

  function checkAdja(currCell) {
    const x = currCell[0];
    const y = currCell[1];
    const adjacent = {
      up: [x, y + 1],
      down: [x, y - 1],
      left: [x - 1, y],
      right: [x + 1, y]
    };
    if (!currCell) {
      return null;
    }
    visited[`${x},${y}`] = true;
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
      //if current cell = target, change result to true
      if (x === target[0] && y === target[1]) {
        // console.log("you found me!");
        return true;
      }
      //else add visited cells to dict/memo/"visited" obj
      //key would be X-coor
      //val would be obj holding Y-coor as keys = True (if exist, otherwise that Y-coor simply doesnt exist as key)
      // visited[currCell[0]] = { ...currCell[0], [currCell[1]]: true };
      //define adjacent cells based on current cell
      for (const dir in adjacent) {
        // console.log("currCell: ", currCell, `adjacent: ${dir} `, adjacent);
        if (
          adjacent[dir][0] >= 0 &&
          adjacent[dir][0] <= 4 &&
          adjacent[dir][1] >= 0 &&
          adjacent[dir][1] <= 4
        ) {
          let visitKey = `${adjacent[dir][0]},${adjacent[dir][1]}`;
          //if not visited & not blocked: recursion
          if (
            !visited[visitKey] &&
            checkBlocked(adjacent[dir], blocked) === false
          ) {
            // console.log("visit", visited);
            if (checkAdja(adjacent[dir])) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  checkAdja(source);
};

let trapped = [
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4]
];
let noBlocks = [[]];
console.log(isEscapePossible(noBlocks, [0, 0], [4, 4])); //true
console.log(isEscapePossible(trapped, [0, 0], [4, 4])); //false

// //small sample maze
// const blocked = [
//   [0, 2],
//   [1, 1],
//   [1, 3],
//   [3, 1]
// ];

// //sample: inital start's adjacency
// const adjacent = {
//   up: [0, 1],
//   down: [],
//   left: [],
//   right: [1, 0]
// };
// const isBlocked = {};

// const checkBlocked = function(adja, blocked) {
//   return Object.keys(adja).map(cDir => {
//     blocked.forEach(block => {
//       if (block[0] === adja[cDir][0] && block[1] === adja[cDir][1]) {
//         isBlocked[adja[cDir]] = true;
//       } else {
//         isBlocked[cDir] = false;
//       }
//     });
//   });
// };
// checkBlocked(adjacent, blocked);

// console.log(isBlocked);

/* for clear view


var isEscapePossible = function(
  blocked,
  source,
  target
) {
  let result = false;
  const visited = {};
  const blockMemo = {}
  blocked.forEach(block => blockMemo[`${block[0]},${block[1]}`] = true)
  const checkBlocked = function(curr, blocked) {
    if(blockMemo[`${curr[0]},${curr[1]}`]) {return true}
    return false;
  };

  function checkAdja(currCell) {
    const x = currCell[0]
    const y = currCell[1]
    const adjacent = { up: [x, y + 1], down: [x, y - 1], left: [x - 1, y], right: [x + 1, y] };
    if (!currCell) {
      return null;
    }
    visited[`${x},${y}`] = true;
    if (
      x >= 0 &&
      x <= 4 &&
      y >= 0 &&
      y <= 4
    ) {
      if (x === target[0] && y === target[1]) {
        return true
      }
      for (const dir in adjacent) {
        if (
          adjacent[dir][0] >= 0 &&
          adjacent[dir][0] <= 4 &&
          adjacent[dir][1] >= 0 &&
          adjacent[dir][1] <= 4
        ) {
          let visitKey = `${adjacent[dir][0]},${adjacent[dir][1]}`;
          if (
            !visited[visitKey] &&
            checkBlocked(adjacent[dir], blocked) === false
          ) {
             if(checkAdja(adjacent[dir])){return true}
          }
        }
      }
    }
    return false
  }
  return checkAdja(source);
};
*/
