/**
 * 
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

    Example 1:

    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].
    Example 2:

    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
    * 
 * 
 * Time Complexity: O(n), space complexity: O(n)
 * 
 */

function sortedSquares(nums: number[]): number[] {
  let length = nums.length;
  const result: number[] = Array.from({ length: length });

  let l = 0,
    r = length - 1;

  for (let i = r; 0 <= i; i--) {
    let left = Math.pow(nums[l], 2);
    let right = Math.pow(nums[r], 2);

    if (left < right) {
      result[i] = right;
      r--;
    } else {
      result[i] = left;
      l++;
    }
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
