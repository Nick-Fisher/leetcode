/*

You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.

Return the string that represents the kth largest integer in nums.

Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

 

Example 1:

Input: nums = ["3","6","7","10"], k = 4
Output: "3"
Explanation:
The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
The 4th largest integer in nums is "3".

Time complexity: O(logn), Space complexity: O(n)

*/

public class Solution
{
    public string KthLargestNumber(string[] nums, int k)
    {
        var pq = new PriorityQueue<string, string>(new MyComparer());

        foreach (var num in nums)
        {
            pq.Enqueue(num, num);

            if (pq.Count > k)
            {
                pq.Dequeue();
            }
        }

        return pq.Dequeue();
    }

    class MyComparer : IComparer<string>
    {
        public int Compare(string first, string second)
        {
            return first.Length == second.Length ? first.CompareTo(second) : first.Length - second.Length;
        }
    }
}