/**

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

*/

function containsDuplicate(nums: number[]): boolean {
    const table: Record<string, number>= {};

    for (let i = 0; i < nums.length; i++) {
        table[nums[i]] = table[nums[i]] || 0;
        table[nums[i]] += 1;
        if (table[nums[i]] > 1) {
            return true;
        }
    }
 
    return false;
};

containsDuplicate([1,2,3,1])