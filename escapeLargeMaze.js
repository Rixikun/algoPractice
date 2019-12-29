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

var isEscapePossible = function(blocked, source, target) {};

const blocked = [
  [0, 2],
  [1, 1],
  [1, 3],
  [3, 1]
];
let adjacent = {
  up: [0, 1],
  down: [],
  left: [],
  right: [1, 0]
};

let isBlocked = {};

Object.keys(adjacent).forEach(cDir => {
  blocked.forEach(block => {
    if (block[0] === adjacent[cDir][0] && block[1] === adjacent[cDir][1]) {
      isBlocked[adjacent[cDir]] = true;
    } else {
      isBlocked[cDir] = false;
    }
  });
});

console.log(isBlocked);
