/**

Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

*/

// Complexity: O(n) time, O(1) space

function findDisappearedNumbers(nums: number[]): number[] {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  }

  return ans;
}
