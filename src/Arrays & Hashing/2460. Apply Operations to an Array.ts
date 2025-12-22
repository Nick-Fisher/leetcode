/**
 * 
 *  You are given a 0-indexed array nums of size n consisting of non-negative integers.

    You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums:

    If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
    After performing all the operations, shift all the 0's to the end of the array.

    For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
    Return the resulting array.

    Note that the operations are applied sequentially, not all at once.

    

    Example 1:

    Input: nums = [1,2,2,1,1,0]
    Output: [1,4,2,0,0,0]
 * 
 *  Time Complexity - O(n), Space Complexity - O(1)
 */

function applyOperations(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums[i - 1] = 2 * nums[i - 1];
      nums[i] = 0;
    }
  }

  let insertPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }

  for (let i = insertPosition; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(applyOperations([1, 2, 2, 1, 1, 0])); // [1,4,2,0,0,0]
