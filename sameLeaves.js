const tree = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 2,
    c3: 1,
    c4: 1
  },
  d: 1
};
const tree2 = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 1,
    c3: 1,
    c4: 1
  },
  d: 1
};
function areLeavesEqual(tree) {
  let leaf = null;
  for (const key in tree) {
    const branch = tree[key];
    if (typeof branch !== "object") {
      // console.log("value: ", branch);
      if (leaf === null) {
        leaf = branch;
      }
      if (leaf !== null) {
        if (leaf !== branch) {
          return false;
        }
      }
    } else {
      return areLeavesEqual(branch);
    }
  }
  return true;
}

console.log(areLeavesEqual(tree)); // false
// console.log(areLeavesEqual(tree2)); // true
