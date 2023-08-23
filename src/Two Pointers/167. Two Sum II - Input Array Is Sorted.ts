/**
 * 
 * Given an array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * 
 * Return the indices of the two numbers (1-indexed) as an integer array answer of size 2,
 * where 1 <= answer[0] < answer[1] <= numbers.length.
 * 
 * The tests are generated such that there is exactly one solution.
 * You may not use the same element twice.
 * 
 * Example 1:
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * 
 * Example 2:
 * 
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 * 
 * Example 3:
 * 
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 * 
 */

// Complexity: time O(n), space O(1)

function twoSum(numbers: number[], target: number) {
    let l = 0, r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];

        if (sum === target) return [l + 1, r + 1];

        if (sum > target) r--;

        if (sum < target) l++;
    }
};

console.log(twoSum([2,7,11,15], 9)); // [1,2]