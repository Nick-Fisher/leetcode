/** 
 *  
 *  You are given the root of a binary search tree (BST) and an integer val.

    Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 * 
 *  Input: root = [4,2,7,1,3], val = 2
 * 
 *  Output: [2,1,3]
 * 
 *  Time Complexity: O(n), space complexity: O(n) 
 */

// Recursive solution

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) return root;

  if (root.val < val) return searchBST(root.right, val);

  return searchBST(root.left, val);
}

// Iterative solution

// Time complexity: O(n), space complexity: O(n)

function searchBSTIterative(root: TreeNode | null, val: number): TreeNode | null {
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (!node) continue;

    if (node.val === val) return node;
    if (node.val < val) stack.push(node.right);
    if (node.val > val) stack.push(node.left);
  }

  return null;
}

