/**
 *  
 *  You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

    We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
 *  
 * 
 *  Time Complexity: O(n^2), Space Complexity: O(n)
 * 
 */

public class Solution
{
   public int NetworkDelayTime(int[][] times, int n, int k)
   {
      Dictionary<int, List<(int, int)>> graph = new();

      // Build graph
      foreach (var edge in times)
      {
         int source = edge[0], target = edge[1], weight = edge[2];

         if (!graph.ContainsKey(source))
         {
            graph[source] = new List<(int, int)>();
         }

         graph[source].Add((target, weight));
      }

      // Min-heap (Dijkstra's algorithm)
      var minHeap = new PriorityQueue<int, int>();      // (node, distance)
      minHeap.Enqueue(k, 0);

      var distances = new Dictionary<int, int>();    // (node, distance)
      distances[k] = 0;

      while (minHeap.Count > 0)
      {
         minHeap.TryDequeue(out int node, out int dst);  // Dequeue the node with the smallest distance 

         // If the distance is already greater than the recorded distance, skip it
         if (dst > distances.GetValueOrDefault(node, int.MaxValue)) continue;

         // Check neighbors
         if (graph.TryGetValue(node, out var neighbors))
         {
            foreach (var (ngh, dstToNgh) in neighbors)
            {
               int newDst = dst + dstToNgh;

               if (newDst < distances.GetValueOrDefault(ngh, int.MaxValue))
               {
                  distances[ngh] = newDst;
                  minHeap.Enqueue(ngh, newDst);
               }
            }
         }
      }

      // If not all nodes are reachable
      if (distances.Count < n) return -1;

      // Return the longest shortest path
      return distances.Values.Max();
   }
}