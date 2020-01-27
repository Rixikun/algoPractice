let test = [5, 1, 4, 2, 3];
let test2 = [32, 27, 3, 5, 1, 9, 4, 3, 3, 14, 2, 9];

function quicksort(arr) {
  let low = [];
  let high = [];
  if (arr.length < 2) {
    return arr;
  }
  let pickedNum = arr.pop();
  console.log(pickedNum);
  console.log("arr: ", arr);
  arr.forEach(num => {
    if (num <= pickedNum) {
      low.push(num);
    }
    if (num > pickedNum) {
      high.push(num);
    }
  });
  return [...quicksort(low), pickedNum, ...quicksort(high)];
}

console.log(quicksort(test2));

/*
quicksort:
pick an element of the unorganized array
create arr of values less than pickedNum
create arr of values greater than pickedNum
*/
/*
concept: divide&conquer
pick a idx-value as the pivot
left of pivot is smaller
right of pivot is greater
*/

// console.log(quicksort(test));
