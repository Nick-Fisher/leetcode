/**
 *  
 *  You are given an integer array nums. You need to ensure that the elements in the array are distinct. To achieve this, you can perform the following operation any number of times:

    Remove 3 elements from the beginning of the array. If the array has fewer than 3 elements, remove all remaining elements.
    Note that an empty array is considered to have distinct elements. Return the minimum number of operations needed to make the elements in the array distinct.

    

    Example 1:

    Input: nums = [1,2,3,4,2,3,3,5,7]

    Output: 2

    Explanation:

    In the first operation, the first 3 elements are removed, resulting in the array [4, 2, 3, 3, 5, 7].
    In the second operation, the next 3 elements are removed, resulting in the array [3, 5, 7], which has distinct elements.
    Therefore, the answer is 2.
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

function minimumOperations(nums: number[]): number {
  const seen = new Set();

  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i])) return Math.ceil((i + 1) / 3);
    seen.add(nums[i]);
  }

  return 0;
}

function minimumOperations2(nums: number[]): number {
  const set = new Set<number>();
  let operations = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      operations++;
      i += 2;
    }
  }

  return operations;
}
