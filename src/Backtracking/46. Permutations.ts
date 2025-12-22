/**
 * 
 *  
 *  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

    Example 1:

    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    Example 2:

    Input: nums = [0,1]
    Output: [[0,1],[1,0]]
 * 
 * Time Complexity: O(n!), Space Complexity: O(n!)
 *  
 */

function permute(nums: number[]): number[][] {
  let result = [];

  function backtrack(acc) {
    if (acc.size === nums.length) {
      result.push([...acc]);
    }

    for (let num of nums) {
      if (!acc.has(num)) {
        acc.add(num);
        backtrack(acc);
        acc.delete(num);
      }
    }
  }

  backtrack(new Set());

  return result;
}

function permute2(nums: number[]): number[][] {
  let result = [];

  function backtrack(acc, nums) {
    if (nums.length === 0) {
      result.push([...acc]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      acc.push(nums[i]);
      backtrack(acc, nums.slice(0, i).concat(nums.slice(i + 1)));
      acc.pop();
    }
  }

  backtrack([], nums);

  return result;
}
