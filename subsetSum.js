/*
more recursion:
given a list of numbers & a target
determine if a sublist can sum to the target

1 2 5 with t = 3 is true ;  t = 4 is false
*/

function subset(list, target) {
  //base case: lists mean trim to 0 length
  if (!list.length) {
    console.log("base case here");
  }
  //recursive case:
  let head = list.pop(); // pick a num as the main base to start the combo tree
  for (let i = 0; i < list.length; i++) {
    //for adding head to one other el
    if (head + list[i] === target) {
      return true;
    }
  }

  //default case, nothing triggers true:
  return false;
}

/*
each el should have combos of any len (max arr.len)
factorial?
1: 1,
    1, 2
    1, 5
2: 2,
    2, 1
    2, 5
5: 5,
    5, 1
    5, 2
*/
