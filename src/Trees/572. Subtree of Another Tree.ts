/**
 * 
 *  Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

    A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 * 
    *  Example 1:
    * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
    * Output: true
 * 
 * Time Complexity: O(n), Space Complexity: O(n) 
 */

// Recursive solution

const isSameTree2 = (
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean => {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  return (
    root.val === subRoot.val &&
    isSameTree2(root.left, subRoot.left) &&
    isSameTree2(root.right, subRoot.right)
  );
};

const isSubtree = (
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean => {
  if (!root) return false;

  return (
    isSameTree2(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
