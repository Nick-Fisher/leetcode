/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Time complexity: O(n), Space complexity: O(1)
*/

public class Solution
{
    public bool CanJump(int[] nums)
    {
        var max = nums[0];

        for (var i = 0; i < nums.Length; i++)
        {
            if (i > max) return false;

            max = Math.Max(max, i + nums[i]);
        }

        return true;
    }
}