public class KthLargest
{

    private PriorityQueue<int, int> minHeap;
    private int k;

    public KthLargest(int k, int[] nums)
    {
        this.k = k;
        this.minHeap = new PriorityQueue<int, int>();

        foreach (int num in nums)
        {
            Add(num);
        }
    }

    public int Add(int val)
    {
        if (minHeap.Count < k)
        {
            minHeap.Enqueue(val, val);
        }
        else if (val > minHeap.Peek())
        {
            minHeap.Dequeue();
            minHeap.Enqueue(val, val);
        }

        return minHeap.Peek();
    }
}