// https://www.geeksforgeeks.org/check-possible-path-2d-matrix/

/* Your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.


n = number of rows
m = number of columns
w = length of the word

*/

function decode(board, word){
    //start any point
    //traverse down or right only
    //if pt matches word letter, continue & search for next letter ...dfs?
    const first = word[0]
    let coord = []
    let res=[]
    for(let i = 0; i < board.length; i++){
      let row = board[i]
      for(let j = 0; j < row.length; j++){
        let pt = row[j]
        //if first match, begin travesal
        if(pt === first){
        // console.log("==============> pt: ",pt, "i, j", i , j)
          function traverse(x, y, idx){
            if(board[x][y] === word[idx]){
              // console.log(idx, x, y,'------', board[x][y])
              coord.push([x,y])
              // console.log('coord',coord)
            }
            if(x < board.length - 1){
              let down = board[x + 1][y]
              if(down === word[idx + 1]){
                // console.log('x', x, y, board[x][y])
                traverse(x + 1, y, idx + 1)
              }
            }
            if(y < row.length - 1){
              let right = board[x][y + 1]
              if(right && right === word[idx + 1]){
                // console.log('y', x, y, board[x][y])
                traverse(x, y + 1, idx + 1)
              }
            }
  
            idx++
            if(idx === word.length){
              res.push(coord)
              // console.log("COMPLETE______________________", coord)
              coord = []            
            } else {
              let flag = false
              // console.log('else')
              if(coord.length && x > 0 && y > 0){
                let lastCoord = coord[coord.length-1]
                let last = board[lastCoord[0]][lastCoord[1]]
                // console.log("lastCoord", lastCoord, 'last', last)
                if(x < board.length - 1){
                  let prevDown = board[x + 1][y - 1]
                  // console.log('prevDown: ', prevDown)
                  if(last === prevDown){
                    // console.log('switch prevDown')
                    flag = true
                    coord.pop()
                    idx--
                  }
                }          
                if(y < row.length - 1){
                  let prevRight = board[x - 1][y + 1]
                  // console.log('prevRight: ', prevRight)
                  if(last === prevRight){
                    // console.log('switch prevRight')
                    flag = true
                    coord.pop()
                    idx--
                  }
                }
              } 
              if(!flag) {
                // console.log('reset')
                coord = []
              }   
            }    
          }
          traverse(i, j, 0)
        }
      }
    }
    return res
  }
  
  let grid1 = [
      ['c', 'c', 'c', 'a', 'r', 's'],
      ['c', 'c', 'i', 't', 'n', 'b'],
      ['a', 'c', 'n', 'n', 't', 'i'],
      ['t', 'c', 'i', 'i', 'p', 't']
  ]
  
  let word1_1 = "catnip"
  // [ (0, 2), (0, 3), (1, 3), (2, 3), (3, 3), (3, 4) ]
  let word1_2 = "cccc"
  // [(0, 1), (1, 1), (2, 1), (3, 1)]
  // OR [(0, 0), (1, 0), (1, 1), (2, 1)]
  // OR [(0, 0), (0, 1), (1, 1), (2, 1)]
  // OR [(1, 0), (1, 1), (2, 1), (3, 1)]
  
  let grid2 = [
      ['c', 'p', 'a', 'n', 't', 's'],
      ['a', 'b', 'i', 't', 'a', 'b'],
      ['t', 'f', 'n', 'n', 'c', 'i'],
      ['x', 's', 'c', 'a', 't', 'n'],
      ['x', 's', 'd', 'd', 'e', 'a'],
      ['s', 'q', 'w', 'x', 's', 'p']
  ]
  let word2 = "catnap"
  //[ (3, 2), (3, 3), (3, 4), (3, 5), (4, 5), (5, 5) ]
  
  let grid3 = [
      ['c', 'r', 'c', 'a', 'r', 's'],
      ['a', 'b', 'i', 't', 'n', 'i'],
      ['t', 'f', 'n', 'n', 'x', 'p'],
      ['x', 's', 'i', 'x', 'p', 't']]
  let word3 = "catnip"
  // [ (0, 2), (0, 3), (1, 3), (1, 4), (1, 5), (2, 5) ]
  
  console.log(decode(grid1,word1_1))
  console.log(decode(grid1,word1_2))
  console.log(decode(grid2,word2))
  console.log(decode(grid3,word3))
  
  

  
