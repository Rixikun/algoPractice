/*
given a grid, each cell has a value, if adjacent cells have same value, they are same piece.
count total pieces in the grid
[[]]
*/

function pieceCount(grid) {
  let memo = {};
  let count = 0;
  let rowEnd = grid.length - 1;
  let colEnd = grid[0].length - 1;
  let prev = grid[0][0];

  function checkAdja(coord) {
    const x = coord[0];
    const y = coord[1];
    const curr = grid[(x, y)];
    const adjacent = {
      up: [x - 1, y],
      down: [x + 1, y],
      left: [x, y - 1],
      right: [x, y + 1],
    };
    memo[`${x},${y}`] = curr;

    for (let dir in adjacent) {
      let key = `${adjacent[dir][0]},${adjacent[dir][1]}`;
      let neighbor = [adjacent[dir][0], adjacent[dir][1]];
      if (
        adjacent[dir][0] >= 0 &&
        adjacent[dir][0] <= rowEnd &&
        adjacent[dir][1] >= 0 &&
        adjacent[dir][1] <= colEnd
      ) {
        if (!memo[key] && grid[neighbor[0]][neighbor[1]] !== curr) {
          count++;
        }
        if (!memo[key]) {
          checkAdja(neighbor);
        }
      }
    }
    return count;
  }
}

let grid = [
  [1, 2, 3],
  [2, 2, 3],
  [2, 1, 3],
  [4, 5, 5],
  [1, 1, 2],
]; //8
