/*
You are given a Binary Tree data structure consisting of Binary Tree nodes. Each Binary Tree node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value. Write a function that returns a boolean representing whether or not the Binary Tree is a valid BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values.

sample input:
    10
    /\
   5 15
  /\  /\
 2 5 13 22
/     \
1      14
sample output: true
*/
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, min, max) {
  // Write your code here.
  //base: if null, then true
  if (tree === null) {
    return true;
  }
  //left should be less of parent val, right should be more, else false
  if (tree.value < min || tree.value >= max) {
    return false;
  }
  //check recursively on left & right side using the new side as the tree input
  //replace the infinity with the parent node value in the correct side
  return (
    validateBstHelper(tree.left, min, tree.value) &&
    validateBstHelper(tree.right, tree.value, max)
  );
}

/*
recursion
check left for smaller value T/F
check right for larger values T/F
*/
