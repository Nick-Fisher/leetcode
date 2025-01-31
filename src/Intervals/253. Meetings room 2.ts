/**
 * 
 *  Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 *  
 *  Input: intervals = [[0,30],[5,10],[15,20]]
 *  Output: 2
 * 
 *  Time Complexity: O(nlogn), Space Complexity: O(n)
 */

function minMeetingRooms(intervals: number[][]): number {
  let starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  let ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

  let rooms = 0;
  let end = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }

  return rooms;
} 