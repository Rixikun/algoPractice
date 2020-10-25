/*

Given a 2D array of 0's & 1's
0 = water
1 = land

island = land with no adjacent water

assume map border is all water, no diagonals.
how many islands exist in the matrix?

*/
/*
                 (x-1, y)
                    ^
                    |
   (x, y-1)  <-   (x, y)  -> (x, y+1)
                    |
                    V
                 (x+1, y)
*/

//DFS Time: O(N) Space+ O(1)
// start with 2 loops
// enter DFS when cell === 1, for Up, Down, Left, Right
// once cell = 1 is visited, change it to NOT 1, to mark as "visited"
function numberOfIslands1(grid){
    if(!grid.length) return 0;
    // DFS call, use rowLen & colLen to help define out of bound coords
    function traverse(grid, x, y, rowLen, colLen){
        // if either X or Y is OOB, return;
        // if visited already, return;
        if(x < 0 || x >= rowLen || y < 0 || y >= colLen || grid[x][y] !== 1) return;
        // else, mark & recursively call on adjacent cells
        //mark visited
        grid[x][y] = 2
        //call adjacent 4
        traverse(grid, x - 1, y, rowLen, colLen)
        traverse(grid, x + 1, y, rowLen, colLen)
        traverse(grid, x, y - 1, rowLen, colLen)
        traverse(grid, x, y + 1, rowLen, colLen)
    }

    // hold count
    let total = 0;
    // look thru each cell
    for(let i = 0; i <  grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            // enter recursive call only if 1 (/not visited, will mark later)
            if(grid[i][j] === 1){
                traverse(grid, i, j, grid.length, grid[i].length)
                // once traversal finishes, we've explored the length of the entire single island
                // increment count
                total++;
            }
        }
    }

    return total
}

// BFS
function numberOfIslands2(grid){
    const rows = grid.length;
    const cols = grid[0].length
    if(!rows || !cols) return 0;  
    let total = 0;
    const queue = [];

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 1){
                total++;
                grid[i][j] = 2;
                queue.push([i,j])
                while(queue.length){
                    let point = queue.shift()
                    let x = point[0]
                    let y = point[1]
                    //up
                    if(x-1 >= 0 && grid[x-1][y] === 1){
                        queue.push([x-1, y])
                        grid[x-1][y] = 2;
                    }
                    //down
                    if(x+1 < rows && grid[x+1][y] === 1){
                        queue.push([x+1, y])
                        grid[x+1][y] = 2;
                    }
                    //left
                    if(y-1 >= 0 && grid[x][y-1] === 1){
                        queue.push([x, y-1])
                        grid[x][y-1] = 2;
                    }
                    //right
                    if(y+1 < cols && grid[x][y+1] === 1){
                        queue.push([x, y+1])
                        grid[x][y+1] = 2;
                    }
                }
            }
        }
    }
    return total
}

// BFS, but cleaner
function numberOfIslands(grid){
    const rows = grid.length;
    const cols = grid[0].length
    if(!rows || !cols) return 0;  
    let total = 0;
    const queue = [];

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 1){
                total++;
                grid[i][j] = 2;
                queue.push([i,j])

                while(queue.length){
                    const [row, col] = queue.shift()
                    const directions = [
                        [0,-1], //left
                        [0,1], //right
                        [-1,0], //up
                        [1,0], //down
                    ]
                    for(let direction of directions){
                        let x = direction[0] + row;
                        let y = direction[1] + col;

                        if(x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] === 1){
                            queue.push([x,y])
                            grid[x][y] = 2
                        }
                    }
                    
                }
            }
        }
    }
    return total
}

let input = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],
]

console.log(numberOfIslands(input)) // 3

/////////// maxArea //////////


var maxAreaOfIsland = function(grid) {
    const LAND = 1
    const VISITED = 2
    let maxArea = 0;
    let currentArea = 0
  
    function traverseDFS(x, y){
      if(x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === LAND){
        grid[x][y] = VISITED
        currentArea++
        traverseDFS(x - 1,y) // up
        traverseDFS(x + 1,y) // down
        traverseDFS(x,y - 1) // left
        traverseDFS(x,y + 1) // right
      }
    }
  
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
        if(grid[i][j] === LAND){
          traverseDFS(i, j)
          maxArea = Math.max(maxArea, currentArea)
          currentArea = 0
          // console.log(grid)
        }
      }
    }
  
    return maxArea;
  };
  
  
  const grid = [
   [0,0,1,0,0,0,0,1,0,0,0,0,0],
   [0,0,0,0,0,0,0,1,1,1,0,0,0],
   [0,1,1,0,1,0,0,0,0,0,0,0,0],
   [0,1,0,0,1,1,0,0,1,0,1,0,0],
   [0,1,0,0,1,1,0,0,1,1,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,1,1,1,0,0,0],
   [0,0,0,0,0,0,0,1,1,0,0,0,0]
   ] // 6

   /////// UNIQUE /////////////

   const grid1 = [
    [1,1,1,1,1,1],
    [2,2,2,2,2,2],
    [2,3,4,5,5,5],
    [2,2,4,5,5,5],
    [2,2,4,5,5,5],
  ]
  // Output: 5
  
  const grid2 = [
    [1,1,1,1,1,1],
    [2,2,2,2,2,2],
    [2,3,4,5,5,5],
    [2,2,4,5,1,5],
    [2,2,4,5,1,1],
  ]
  // Output: 5
  
  
  var numIslands1 = function(grid) {
    let count = 0;
    let curr = null;
    const READ = "X";
    const unique = new Map()
    function traverse(x, y){
      if(x >= 0 
      && x < grid.length
      && y >= 0
      && y < grid[0].length
      && grid[x][y] === curr){
        grid[x][y] = READ
        traverse(x - 1, y)
        traverse(x + 1, y)
        traverse(x, y - 1)
        traverse(x, y + 1)
      }
    }
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        curr = grid[i][j]
        if(curr !== READ){
          traverse(i, j)
          if(!unique.has(curr)){
            count++;
          }
          unique.set(curr, true)
        }
      }
    }
    return count
  }
  
  var numIslands = function(grid) {
    const VISITED = "X"
    let curr = null;
    let total = 0;
    const unique = new Map()
  
    function traverseBFS(i, j){
      const queue = [[i, j]]
      grid[i][j] = VISITED
      const directions = [
        [1, 0],
        [-1,0],
        [0, 1],
        [0,-1]
      ]
      while(queue.length){
        const [x1, y1] = queue.shift()
        for(const [x2, y2] of directions){
          const x = x1 + x2
          const y = y1 + y2
          if(x >= 0 && x < grid.length && y >= 0 && y < grid[x].length && grid[x][y] === curr) {
            grid[x][y] = VISITED
            queue.push([x,y])
          }
        }
      }
    }
  
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        if(grid[i][j] !== VISITED){
          curr = grid[i][j]
          traverseBFS(i, j)
          if(!unique.has(curr)){
            total++
          }
          unique.set(curr, true)
        }
      }
    }
    return total
  }
  
  console.log(numIslands(grid2)) // 5
  // console.log(numIslands(grid1)) // 5