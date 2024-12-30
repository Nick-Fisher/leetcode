/**
 *
 *  235. Lowest Common Ancestor of a Binary Search Tree
 *  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *
 *  Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 *  According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 *  Example 1:
 *  Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 *  Output: 6
 *
 *  Time Complexity: O(n), Space Complexity: O(n)
 *
 */

// Recursive solution

const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (!root) return null;

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

const lowestCommonAncestor2 = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  if (!root) return null;

  if (root === p || root === q) {
    return root;
  }

  let left = lowestCommonAncestor2(root.left, p, q);
  let right = lowestCommonAncestor2(root.right, p, q);

  if (left && right) {
    return root;
  } else if (left) {
    return left;
  } else if (right) {
    return right;
  }

  return null;
};
