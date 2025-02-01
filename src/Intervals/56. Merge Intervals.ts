/**
 *  
 *  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
    Example 1:

    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 

 * . Time Complexity: O(nlogn), Space Complexity: O(1)
 */

function mergeIntervals(intervals: number[][]): number[][] {
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let merged = [sortedIntervals[0]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    let current = sortedIntervals[i];
    let prev = merged.at(-1);

    if (current[0] <= prev?.[1]) {
      prev[1] = Math.max(prev?.[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}
