public class Solution
{
    public PriorityQueue<int, int> minHeap;
    public int k;

    public int FindKthLargest(int[] nums, int k)
    {
        this.minHeap = new PriorityQueue<int, int>();
        this.k = k;

        foreach (int num in nums)
        {
            minHeap.Enqueue(num, num);

            if (minHeap.Count > k)
            {
                minHeap.Dequeue();
            }
        }

        return minHeap.Peek();
    }
}