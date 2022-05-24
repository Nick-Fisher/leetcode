/**
 
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.

*/

function missingNumber(nums: number[]): number {
    const n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    return n * (n + 1) / 2 - sum;
};

missingNumber([3,0,1])

/**
 * 
 * It calls triangular number and we can calculate sum of the n natural numbers from 1 to n by the following explicit formulas:
 * 
 *  n * (n + 1) / 2
 * 
 */