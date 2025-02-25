public class Solution
{
    public int[] TopKFrequent(int[] nums, int k)
    {
        var frequencyMap = new Dictionary<int, int>();

        foreach (int num in nums)
        {
            frequencyMap[num] = frequencyMap.GetValueOrDefault(num, 0) + 1;
        }

        var minHeap = new PriorityQueue<int, int>();

        foreach (var entry in frequencyMap)
        {
            minHeap.Enqueue(entry.Key, entry.Value);

            if (minHeap.Count > k)
            {
                minHeap.Dequeue();
            }
        }

        return minHeap.UnorderedItems.Select(x => x.Element).ToArray();
    }
}