/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

*/

public class Solution
{
    public int[] ProductExceptSelf(int[] nums)
    {
        var arrSize = nums.Length;

        int[] prefixes = new int[arrSize];
        int[] suffixes = new int[arrSize];
        int[] result = new int[arrSize];

        var productPrefixes = 1;

        for (var i = 0; i < arrSize; i++)
        {
            productPrefixes *= nums[i];

            prefixes[i] = productPrefixes;
        }

        var productSuffixes = 1;

        for (var i = arrSize - 1; i >= 0; i--)
        {
            productSuffixes *= nums[i];

            suffixes[i] = productSuffixes;
        }

        for (var i = 0; i < arrSize; i++)
        {
            if (i == 0)
            {
                result[i] = suffixes[1];
            }
            else if (i == arrSize - 1)
            {
                result[i] = prefixes[arrSize - 2];
            }
            else
            {
                result[i] = prefixes[i - 1] * suffixes[i + 1];
            }
        }

        return result;
    }
}