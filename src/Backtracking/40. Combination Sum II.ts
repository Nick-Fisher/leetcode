/**
 *  
 *  Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

    Each number in candidates may only be used once in the combination.

    Note: The solution set must not contain duplicate combinations.

    

    Example 1:

    Input: candidates = [10,1,2,7,6,1,5], target = 8
    Output: 
    [
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
    ]
 * 
 * 
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  let result = [];

  candidates.sort((a, b) => a - b);

  function backtrack(acc, start, sum) {
    if (sum === target) {
      result.push([...acc]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        if (i > start && candidates[i] === candidates[i - 1]) {
          continue;
        }
        acc.push(candidates[i]);
        backtrack(acc, i + 1, sum + candidates[i]);
        acc.pop();
      }
    }
  }

  backtrack([], 0, 0);

  return result;
}