/**
 * 
 *  Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

    Only numbers 1 through 9 are used.
    Each number is used at most once.
    Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

    

    Example 1:

    Input: k = 3, n = 7
    Output: [[1,2,4]]
    Explanation:
    1 + 2 + 4 = 7
    There are no other valid combinations.
 *  
 * 
 *  Time Complexity: O(9 * 2^9), Space Complexity: O(9 * 2^9)
 */

function combinationSum3(k: number, n: number): number[][] {
  let result = [];

  function backtrack(acc, start, sum) {
    if (sum === n && acc.length === k) {
      result.push([...acc]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (sum + i <= n) {
        acc.push(i);
        backtrack(acc, i + 1, sum + i);
        acc.pop();
      }
    }
  }

  backtrack([], 1, 0);

  return result;
}