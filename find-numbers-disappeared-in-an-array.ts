/**

Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

*/

function findDisappearedNumbers(nums: number[]): any { 
    let i = 0;
    const arrayLength: any = nums.length;
    while (i < arrayLength) {
        const pos = nums[i] - 1;
        console.log('kek', nums[i], pos)
        i++
    }
}

findDisappearedNumbers([4,3,2,7,8,2,3,1]);