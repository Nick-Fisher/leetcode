/**
 *  
 *  Given an integer array nums of unique elements, return all possible subsets (the power set).

    The solution set must not contain duplicate subsets. Return the solution in any order.

    Example 1:

    Input: nums = [1,2,3]
    Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    Example 2:

    Input: nums = [0]
    Output: [[],[0]]
 * 
 * 
 *  Time Complexity: O(n * 2^n), Space Complexity: O(n * 2^n)
 */

function subsets(nums: number[]): number[][] {
    let result = [];

    function backtrack(acc, start) {
        if (start > nums.length) {
            return;
        }

        result.push([...acc]);

        for (let i = start; i < nums.length; i++) {
            acc.push(nums[i]);
            backtrack(acc, i + 1);
            acc.pop();
        }
        
    }

    backtrack([], 0)

    return result;
};


function subsets2(nums: number[]): number[][] {
    let result = [];

    function backtrack(acc, start) {
        result.push([...acc]);

        for (let i = start; i < nums.length; i++) {
            acc.push(nums[i]);
            backtrack(acc, i + 1);
            acc.pop();
        }
    }

    backtrack([], 0);

    return result;
};