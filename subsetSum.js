/*
more recursion:
given a list of numbers & a target
determine if a sublist can sum to the target

1 2 5 with t = 3 is true ;  t = 4 is false
*/

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

What should my 'subset' look like?
I want my 'head' to add with the 'next'
the 'head' should exhaust all possible options of 'next' (list w/o 'head')
before diving a branch deeper where
the 'head' is now one of the 'next' (list will now have 2 'head' val removed)
when we do extend a branch, it'll be the OG 'head' plus these new 2 values
>>check if head + recursion(head, next) === target
this will end when there is no more 'next'
*/

function subset(list, target) {
  if (!list.length) {
    return [];
  }
  const result = [];
  function helper(arr, head = []) {
    if (!arr.length) {
      return [[]];
    }
    if (!head.length) {
      result.push([]);
    }
    for (let i = 0; i < arr.length; i++) {
      let remaining = arr.slice(i + 1);
      let oneCombo = head.concat([arr[i]]);
      result.push(oneCombo);
      helper(remaining, oneCombo);
    }
  }
  helper(list);
  // console.log(result);
  const sums = result.map(combo => {
    return combo.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  });
  // console.log(sums);
  return sums.includes(target);
}

let test1 = [1, 2, 5];
let listA = [0, 1, 2];
let listB = [1, 2, 3, 4];
console.log(subset(test1, 3)); //T
console.log(subset(test1, 4)); //F
console.log(subset(listA, 5)); //F
console.log(subset(listB, 5)); //T
