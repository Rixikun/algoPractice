const test = [3, 6, 1, 7, 10, 4];
//`keeps divide in half until cant, base case: 1, then sort || recursive || help func`;

function split(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));
  return merge(split(left), split(right));
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else if (left[0] > right[0]) {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

console.log(split(test));
