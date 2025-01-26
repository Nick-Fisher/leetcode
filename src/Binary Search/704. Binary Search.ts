/**
 * 
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 * 
 */

// Time complexity: O(log n), space complexity: O(1)

function search(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const midPoint = Math.floor((start + end) / 2);

    if (target === nums[midPoint]) return midPoint;

    if (target > nums[midPoint]) start = midPoint + 1;

    if (target < nums[midPoint]) end = midPoint - 1;
  }

  return -1;
}
