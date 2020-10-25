/*
How many different ways can you climb a set of stairs given N steps, and X amount of steps you can take per move?
N = # steps in stairs
X = [] nums of steps you can take per move

*/

function stairs(N, X){
    if(N === 0) return 1
    const memo = new Array(N+1)
    memo[0] = 1
  
    for(let i = 1; i <= N; i++){
      let totalWays = 0
      for(let steps of X){
        if(i - steps >= 0){
          totalWays += memo[i - steps]
        }
        memo[i] = totalWays
      }
    }
    return memo[N]
  }
  
  console.log(stairs(4,[1,3,5])) // 3
  console.log(stairs(5,[1,3,5])) // 5