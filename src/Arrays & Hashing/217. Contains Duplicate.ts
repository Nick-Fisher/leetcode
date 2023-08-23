/**

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

*/

// Complexity: time O(n), space O(n)

function containsDuplicate1(nums: number[]): boolean {
    const hashMap: Record<string, number>= {};

    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] || 0;
        hashMap[nums[i]] += 1;
        if (hashMap[nums[i]] > 1) {
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