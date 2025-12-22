/**
 *  
 *  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    Example 1:

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

 * 
 *  Time Complexity: O(4^n / sqrt(n)), Space Complexity: O(4^n / sqrt(n))
 */

function generateParenthesis(n: number): string[] {
  let result = [];

  function backtrack(acc, open, close) {
    if (acc.length === 2 * n) {
      result.push(acc);
      return;
    }

    if (open < n) {
      backtrack(acc + '(', open + 1, close);
    }

    if (close < open) {
      backtrack(acc + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);

  return result;
}

