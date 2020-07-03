/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.


For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2


return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(1,null, 2)
tree.right.left = 2

var findMode = function(root) {
  let result = []
  let max = 0;
  let dict = {}
  if(!root) return result;
  function traverse(node){
      if(!root) return;

      dict[node.val] = (dict[node.val] || 0) + 1;
      if(dict[node.val] > max) {
        max = dict[node.val]
      }
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }
    traverse(root)
    Object.keys(dict).forEach(key => {
      if(dict[key] === max) {
        result.push(key)
      }
    })
    return result
};

console.log(tree)
console.log(tree.right.left)
