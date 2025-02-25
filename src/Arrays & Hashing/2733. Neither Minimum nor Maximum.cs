/*

Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

Return the selected integer.

 

Example 1:

Input: nums = [3,2,1,4]
Output: 2
Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.


Best Time complexity: O(1), Space complexity: O(1)
*/


// Time complexity: O(n), Space complexity: O(1)
public class Solution
{
    public int FindNonMinOrMax(int[] nums)
    {
        if (nums.Length < 3) return -1;

        var min = int.MaxValue;
        var max = int.MinValue;

        foreach (var num in nums)
        {
            max = Math.Max(max, num);
            min = Math.Min(min, num);
        }

        foreach (var num in nums)
        {
            if (num != max && num != min) return num;
        }

        return -1;
    }
}

// Time complexity: O(1), Space complexity: O(1)

public class Solution
{
    public int FindNonMinOrMax(int[] nums)
    {
        if (nums.Length < 3) return -1;

        var min = int.MaxValue;
        var max = int.MinValue;
        var nonMinOrMax = int.MinValue;

        foreach (var num in nums)
        {
            if (num < min)
            {
                nonMinOrMax = min;
                min = num;
            }
            else if (num > max)
            {
                nonMinOrMax = max;
                max = num;
            }
            else if (num != min && num != max)
            {
                nonMinOrMax = num;
            }
        }

        return nonMinOrMax;
    }
}