const tree1 = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 1,
    c3: {
      c31: 1,
      c32: 1
    }
  }
};
const tree2 = {
  a: 1,
  b: 1,
  c: {
    c1: 10,
    c2: 1,
    c3: {
      c31: 1,
      c32: 1
    }
  }
};

function is(tree, checkVal = null) {
  return (function isSame() {
    //recursion, check into obj's values
    //have value to compare 'difference'
    // let checkVal = null
    console.log("tree", tree);
    //base: assign a value to check
    if (typeof tree !== "object" && checkVal === null) {
      checkVal = tree;
    }
    console.log("val", checkVal);
    //false: when value isnt same as check
    if (typeof tree !== "object" && checkVal !== null) {
      console.log("FALSE", checkVal, tree);
      return false;
    }
    //recursive case: keep looking into obj values until it returns a 'value'
    Object.keys(tree).map(leaf => isSame(tree[leaf]));
    // console.log(Object.keys(tree))
    //default when false isnt triggered
    return true;
  })();
}

console.log(is(tree1));
