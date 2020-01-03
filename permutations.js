/*
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers. If the input array is empty, your function should return an empty array.

input: [1,2,3]
Sample output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

function getPermutations(arr) {
  const result = [];
  if (!arr.length) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    let remaining =
      i > 0 ? arr.slice(i + 1).concat(arr.slice(0, i)) : arr.slice(i + 1);
    console.log("curr", arr[i], "remaining: ", remaining);
    // result.push([arr[i]].concat(getPermutations(remaining)));
    // console.log(result);
  }
  // console.log(result);
  return result;
}

console.log(getPermutations([1, 2, 3]));
