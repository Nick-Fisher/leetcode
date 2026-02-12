// Recursive solution
// Complexity: O(n) time, O(n) space

public class SolutionRecursive
{
    public List<int> result = new List<int>();

    public IList<int> PreorderTraversal(TreeNode root) {
        if (root == null) return [];

        Traverse(root);

        return result;
    }

    public void Traverse(TreeNode node) {
        result.Add(node.val);

        if (node.left != null) Traverse(node.left);

        if (node.right != null) Traverse(node.right);
    }
}

// Iterative solution
// Complexity: O(n) time, O(n) space

public class SolutionIterative
{
    public static IList<int> PreorderTraversalIterative(TreeNode root) {
        if (root == null) return [];

        var result = new List<int>();
        var stack = new Stack<TreeNode>();

        stack.Push(root);

        while (stack.Count > 0)
        {
            var node = stack.Pop();

            result.Add(node.val);

            if (node.right != null) stack.Push(node.right);

            if (node.left != null) stack.Push(node.left);
        }

        return result;
    }
}