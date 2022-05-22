/**

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

*/

function containsDuplicate1(nums: number[]): boolean {
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

containsDuplicate1([1,2,3,1])


function containsDuplicate2(nums: number[]): boolean {
    const set = new Set(nums);
    
    return set.size !== nums.length;
};

containsDuplicate2([1,2,3,1])