/**
 * 
 * You are given an integer array nums consisting of n elements, and an integer k.

    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
    Example 1:

    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * 
 * Time Complexity: O(n), space complexity: O(1)
 * 
 */

function findMaxAverage(nums: number[], k: number): number {
  let sum = nums.slice(0, k).reduce((prev, sum) => prev + sum, 0);
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }
  return max / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000