// const testArr = [1, 2, 3, 4, 5, 6];
const testArr2 = [3, 1, 6, 2, 5, 4];

function bubbleSort(arr) {
  let counter = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === counter) {
      counter--;
      i = 0;
    }
    if (counter === 0) {
      break;
    }
    let first = arr[i];
    let second = arr[i + 1];
    if (arr[i] > arr[i + 1]) {
      arr[i + 1] = first;
      arr[i] = second;
      // swap(arr, i, i + 1);
    }
  }
  return arr;
}

// function swap(arr, idx1, idx2) {
// [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }
console.log(bubbleSort(testArr2));
