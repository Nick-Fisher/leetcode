/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

    Example 1:

    Input: nums = [1,2,3,1], k = 3
    Output: true
 *  

 * 
    *  Time Complexity: O(n), Space Complexity: O(n)
 */

// Sliding window solution

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(map.get(nums[i]) - i) <= k) return true;

    map.set(nums[i], i);
  }

  return false;
}
