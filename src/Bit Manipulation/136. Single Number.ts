/**

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1

 */

// Complexity: time O(n), space O(1)

function singleNumber(nums: number[]): number {
  let mask = 0;
  for (let num of nums) {
    mask ^= num;
  }

  return mask;
}

console.log(singleNumber([2, 2, 1])); // 1
