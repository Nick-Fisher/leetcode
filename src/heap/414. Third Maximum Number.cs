/**

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Time complexity: O(n), Space complexity: O(1)
*/

public class Solution
{
    // PriorityQueue approach with O(Nlogk) time complexity and O(n) space complexity
    public int ThirdMax1(int[] nums)
    {
        var uniqueNums = new HashSet<int>(nums);
        var pq = new PriorityQueue<int, int>();

        foreach (var num in uniqueNums)
        {
            pq.Enqueue(num, num);

            if (pq.Count > 3)
            {
                pq.Dequeue();
            }
        }

        if (pq.Count < 3)
        {
            while (pq.Count != 1)
            {
                pq.Dequeue();
            }
        }

        return pq.Peek();
    }

    public int ThirdMax2(int[] nums)
    {
        long max1 = long.MinValue;
        long max2 = long.MinValue;
        long max3 = long.MinValue;

        foreach (var num in nums)
        {
            if (num > max1)
            {
                max3 = max2;
                max2 = max1;
                max1 = num;
            }
            else if (num < max1 && num > max2)
            {
                max3 = max2;
                max2 = num;
            }
            else if (num < max2 && num > max3)
            {
                max3 = num;
            }
        }

        return max3 == long.MinValue ? (int)max1 : (int)max3;
    }
}