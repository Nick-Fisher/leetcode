/**
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.

    Example 1:

    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

 *  Time complexity O(N), space complexity O(1)
 * 
 */

function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nums[nonZeroIndex] === 0) {
        [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      }
      nonZeroIndex++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
