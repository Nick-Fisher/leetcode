/**
 * 
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.

    Example 1:

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
    Example 2:

    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.
    Example 3:

    Input: nums = [5,4,-1,7,8]
    Output: 23
    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * 
 *  Time Complexity: O(n), Space Complexity: O(1)
 */

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currSum = 0;

  for (let num of nums) {
    currSum = Math.max(currSum, 0);
    currSum += num;
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

// Divide and Conquer approach
// Time Complexity: O(nlogn), Space Complexity: O(logn)

function maxSubArrayDivideConquer(nums: number[]): number {
  return divideConquer(nums, 0, nums.length - 1);
}

function divideConquer(nums: number[], left: number, right: number): number {
  if (left === right) return nums[left];

  let mid = Math.floor((left + right) / 2);

  let leftSum = divideConquer(nums, left, mid);
  let rightSum = divideConquer(nums, mid + 1, right);
  let crossSum = crossSumArray(nums, left, right, mid);

  return Math.max(leftSum, rightSum, crossSum);
}

function crossSumArray(
  nums: number[],
  left: number,
  right: number,
  mid: number
): number {
  if (left === right) return nums[left];

  let leftSubSum = Number.MIN_SAFE_INTEGER;
  let currSum = 0;

  for (let i = mid; i >= left; i--) {
    currSum += nums[i];
    leftSubSum = Math.max(leftSubSum, currSum);
  }

  let rightSubSum = Number.MIN_SAFE_INTEGER;
  currSum = 0;

  for (let i = mid + 1; i <= right; i++) {
    currSum += nums[i];
    rightSubSum = Math.max(rightSubSum, currSum);
  }

  return leftSubSum + rightSubSum;
}
