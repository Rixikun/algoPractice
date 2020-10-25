/*
Given an array of unique integers, how many subsets will sum up to K ?
*/

function findSubset1(nums, sum){
    return helper(nums, sum, nums.length - 1)
  }
  
  function helper(arr, total, i){
    //base case
    if (total === 0) return 1 //only empty subset can "add" to 0
    else if (total < 0) return 0 //no negatuves in arr
    else if(i < 0) return 0 // i has passed arr bounds
    //recursive case                            //i - 1 <-- moves down the arr
    //total without curr num bc curr > total. impossible
    else if(total < arr[i]) return helper(arr, total, i - 1)
    //total without curr num 
    //&& total with curr num by: finding #of subsets w/o curr that adds to total-curr
    else return helper(arr, total, i - 1) + helper(arr, total - arr[i], i - 1)
  }
  //
  
  function findSubset(nums, sum){
    const mem = {} // init empty dict
    return helperDP(nums, sum, nums.length - 1, mem)
  }
  //return key-value in mem
  function helperDP(arr, total, i, mem){
    let toReturn;
    //create unique key names
    let key = String(total) + ":" + String(i)
    if(mem[key]) return mem[key]
    //base case
    if (total === 0) return 1
    else if (total < 0) return 0
    else if(i < 0) return 0
    //main case
    else if(total < arr[i]) {
     toReturn = helperDP(arr, total, i - 1, mem)
    } 
    else {
     toReturn = (helperDP(arr, total - arr[i], i -1, mem) + helperDP(arr, total, i-1, mem))
    }
    mem[key] = toReturn
    return toReturn
  }
  
  console.log(findSubset([2,4,6,10], 16)) //2
  console.log(findSubset([2,3,4,5,6,7,10], 12)) //5 [2,10] [2,4,6] [5,7] [2,3,7] [3,4,5]