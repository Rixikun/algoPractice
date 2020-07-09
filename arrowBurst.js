/*
There are a number of spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter and hence the x-coordinates of start and end of the diameter suffice. Start is always smaller than end. There will be at most 104 balloons.
An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps travelling up infinitely. The problem is to find the minimum number of arrows that must be shot to burst all balloons.
*/

let input = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]; // 2
// Explanation:
// One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

// 1<= x <= 16 <-- find min x start & max x end
// at each x(index), see if it falls inbetween the coordinates...
// we need a count to keep track of how many ballons are hit
/*

dictionary = {
  1: [1]
  2: [1, 2]
  3: 2,
  4: 2,
  5: 2,
  6: 2,
  7: [2, 3]
  8: 2,
  9: [3]
  10: [0, 3]
  11: 2,
  12: 2,
  13: [0]
  14: 1,
  15: 1,
  16: 1
}
 */

/**
 * @param {number[][]} points
 * @return {number}
 */

//goal: find the most shared coordinates to get min num of shots needed to burst all balloon?
// at X, which balloons (arr[i]) exists?
// if first shot is X, what combo of next shots are needed to hit rest of balloons
// if 2nd shot is X, what combo of next shots are need to hit rest of balloons

var findMinArrowShots = function (points) {
  let res = points.length;
  if (!res) {
    return 0;
  }
  let leftmost = Infinity;
  let rightmost = -Infinity;
  let dict = {}; // at x, which point[idx] exists
  //find lower & upper limit of x
  for (let i = 0; i < points.length; i++) {
    let left = points[i][0];
    let right = points[i][1];
    leftmost = Math.min(leftmost, left);
    rightmost = Math.max(rightmost, right);
  }
  for (let x = leftmost; x <= rightmost; x++) {
    for (let i = 0; i < points.length; i++) {
      let left = points[i][0];
      let right = points[i][1];
      if (left <= x && x <= right) {
        if (!dict[i]) {
          dict[i] = [x];
        } else if (dict[i]) {
          if (!dict[i].includes(x)) {
            dict[i].push(x);
          }
        }
      }
    }
  }

  let balloons = new Array(points.length).fill(0);
  for (let key in dict) {
    //best case
    if (dict[key].length === points.length) {
      res = 1;
      return res;
    }
    dict[key].forEach((e) => (balloons[e] = 1));
  }

  console.log(dict);
  return res;
};

// console.log(findMinArrowShots(input)); //2

//count max non-overlap intervals
function findMinArrowShots2(points) {
  //bad case
  if (!points.length) {
    return 0;
  }
  //sort by earliest end point
  points.sort((a, b) => a[1] - b[1]);
  //init with first item
  let currStart = points[0][0];
  let currEnd = points[0][1];
  let count = 1;
  console.log(points);

  for (let point in points) {
    let left = points[point][0];
    let right = points[point][1];
    if (left > currEnd) {
      count++;
      currEnd = right;
      console.log(point, left, right, currEnd);
    }
  }

  return count;
}

let input2 = [
  [3, 9],
  [7, 12],
  [3, 8],
  [6, 8],
  [9, 10],
  [2, 9],
  [0, 9],
  [3, 9],
  [0, 6],
  [2, 8],
]; // 2

// console.log(findMinArrowShots2(input)); //2
console.log(findMinArrowShots2(input2)); //2
