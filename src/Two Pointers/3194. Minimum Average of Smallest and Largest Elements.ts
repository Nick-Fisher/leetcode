/**
 *  
 *  You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

    You repeat the following procedure n / 2 times:

    Remove the smallest element, minElement, and the largest element maxElement, from nums.
    Add (minElement + maxElement) / 2 to averages.
    Return the minimum element in averages.
 *   
 *  Time Complexity: O(nlogn), Space Complexity: O(1)
 * 
 */

function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let minElem = Infinity;

  for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
    minElem = Math.min((nums[l] + nums[r]) / 2, minElem);
  }

  return minElem;
}
