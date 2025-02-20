/**
 *  
 *  You are given the root of a binary tree containing digits from 0 to 9 only.

    Each root-to-leaf path in the tree represents a number.

    For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
    Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

    A leaf node is a node with no children.
 * 
 * 
 * Input: root = [1,2,3]
    Output: 25
    Explanation:
    The root-to-leaf path 1->2 represents the number 12.
    The root-to-leaf path 1->3 represents the number 13.
    Therefore, sum = 12 + 13 = 25.

    Time Complexity: O(n), Space Complexity: O(n)
 */

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;

  let sum = 0;

  let st = [{ node: root, localSum: root.val.toString() }];

  while (st.length) {
    let { node, localSum } = st.pop();

    node.left &&
      st.push({ node: node.left, localSum: localSum + node.left.val });
    node.right &&
      st.push({ node: node.right, localSum: localSum + node.right.val });

    if (!node.left && !node.right) sum += Number(localSum);
  }

  return sum;
}

function sumNumbersDFS(root: TreeNode | null): number {
  return dfs(root, 0);
}

function dfs(node: TreeNode | null, sum: number): number {
  if (!node) return 0;
  sum = sum * 10 + node.val;
  if (!node.left && !node.right) return sum;
  return dfs(node.left, sum) + dfs(node.right, sum);
}
