const test = [3, 6, 1, 7, 10, 4];
const test2 = [10, 52, 8, 6, 31, 7, 3, 24, 18];
//`keeps divide in half until cant, base case: 1, then sort || recursive || help func`;

function split(arr) {
  //stopping condition for L&R array splitting
  if (arr.length === 1) {
    return arr;
  }
  //split array into left v right ...continuously
  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));
  //merges & orders the collection of arrays
  return merge(split(left), split(right));
}

//merge compares L&R values, pushes whichever is smaller, first
//starts from the bottom leaves up, expanding the array
//going from comparing pairs, to 2v2, to 3s, etc
function merge(left, right) {
  let sortedArr = [];
  //if either L/R arr runs out, we've successfully moved the smallest values out into the sortedArr
  while (left.length && right.length) {
    //compare first idx, b/c it should be the 'smallest'
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
      // console.log("left", sortedArr.length, sortedArr);
    } else if (left[0] > right[0]) {
      sortedArr.push(right.shift());
      // console.log("right", sortedArr.length, sortedArr);
    }
  }
  //sorted should have the smallest values, L/R should be empty
  return [...sortedArr, ...left, ...right];
}

console.log(split(test));
console.log(split(test2));
