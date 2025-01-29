/**

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

    Time complexity: O(nlogn), Space complexity: O(n)

*/

public class Solution {
    public int LastStoneWeight(int[] stones) {
        var maxHeap = new PriorityQueue<int, int>(Comparer<int>.Create((x, y) => y.CompareTo(x)));

        foreach (var stone in stones)
        {
            maxHeap.Enqueue(stone, stone);
        }

        while (maxHeap.Count > 1)
        {
            var first = maxHeap.Dequeue();
            var second = maxHeap.Dequeue();

            if (first != second)
            {
                maxHeap.Enqueue(first - second, first - second);
            }
        }

        return maxHeap.Count == 0 ? 0 : maxHeap.Dequeue();
    }
}