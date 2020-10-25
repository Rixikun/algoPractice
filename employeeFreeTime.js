/*
We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping  Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for  all  employees, also in sorted order.


*/

const freeTime = (schedules) =>{
 
    const flattened = []
    const freeTimes = []
  
    let sorted = schedules.flat().sort((a,b) => a[0] - b[0])
    console.log('sorted',sorted)
  
    let prev = sorted[0]
    for(let i = 1; i < sorted.length; i++){
      let start = sorted[i][0]
      if(prev[1] < start){
        freeTimes.push([prev[1], start])
      } 
        prev = sorted[i]
    }
  
    return freeTimes
  }
  
  
  // [5-6], [7-9]
  //                     [3-6],[7-12]  |  [1,2],[4-12]  |  [1-2],[5-9]
  // console.log(freeTime([[[1, 3], [6, 7]],  [[2, 4]],  [[2, 5], [9, 12]]]))//
  console.log(freeTime([[[1,2],[5,6]], [[1,3]],[[4,10]]]))