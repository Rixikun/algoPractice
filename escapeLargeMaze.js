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
  const adjacent = { up: [], down: [], left: [], right: [] };
  //stores current cell's adja blocked T/F
  //up down left right
  const isBlocked = {};
  //create obj to hold Visited cells
  const visited = {};

  //func to check if cell is blocked
  const checkBlocked = function(adja, blocked) {
    Object.keys(adja).forEach(cDir => {
      blocked.forEach(block => {
        if (block[0] === adja[cDir][0] && block[1] === adja[cDir][1]) {
          isBlocked[adja[cDir]] = true;
        } else {
          isBlocked[cDir] = false;
        }
      });
    });
  };

  function checkAdja(currCell) {
    if (!currCell) {
      return null;
    }
    //else add visited cells to dict/memo/"visited" obj
    //key would be X-coor
    //val would be obj holding Y-coor as keys = True (if exist, otherwise that Y-coor simply doesnt exist as key)
    visited[currCell[0]] = { ...currCell[0], [currCell[1]]: true };
    //define adjacent cells based on current cell
    adjacent.up = [currCell[0], currCell[1] + 1];
    adjacent.down = [currCell[0], currCell[1] - 1];
    adjacent.left = [currCell[0] - 1, currCell[1]];
    adjacent.right = [currCell[0] + 1, currCell[1]];

    for (const dir in adjacent) {
      //if not visited & not blocked: recursion
      if (!visited[dir] && checkBlocked(adjacent, blocked)[dir] === false) {
        if (dir[0] === target[0] && dir[1] === target[1]) {
          return true;
        }
        return checkAdja(dir);
      }
    }
  }
  checkAdja(source);
};

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

// checkBlocked(adjacent, blocked);

// console.log(isBlocked);
