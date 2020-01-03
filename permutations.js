/*
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers. If the input array is empty, your function should return an empty array.

input: [1,2,3]
Sample output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

function getPermutations(arr) {
  if (!arr.length) {
    return [];
  }
  const result = [];
  function helper(permArr, arr) {
    // console.log("perm", permArr);
    if (!arr.length) {
      result.push(permArr);
    }
    for (let i = 0; i < arr.length; i++) {
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      let oneCombo = permArr.concat([arr[i]]);
      helper(oneCombo, remaining);
    }
  }
  helper([], arr);
  return result;
}

console.log(getPermutations([1, 2, 3]));
