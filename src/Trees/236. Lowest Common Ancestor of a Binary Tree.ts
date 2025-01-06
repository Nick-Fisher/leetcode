/**
 *  
 *  236. Lowest Common Ancestor of a Binary Tree 
 *   
 *  Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

    According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 *  Example 1:
 *  
 *  Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 *  Output: 3 
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 */

// Recursive solution

const lowestCommonAncestor3 = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor3(root.left, p, q);
  let right = lowestCommonAncestor3(root.right, p, q);

  if (left && right) {
    return root;
  } else if (left) {
    return left;
  } else if (right) {
    return right;
  }

  return null;
};
