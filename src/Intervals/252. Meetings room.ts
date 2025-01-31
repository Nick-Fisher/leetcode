/**
 * 
    The problem presents a scenario in which an individual has multiple meetings scheduled, represented by time intervals. Each interval is an array of two values [start_i, end_i], where start_i is the time a particular meeting begins, and end_i is the time the meeting ends. The intervals array contains all such meeting time intervals.

    The task is to determine whether the person can attend all the scheduled meetings without any overlaps. More specifically, no two meetings can occur at the same time. The person can only attend all meetings if, for any two meetings, one finishes before the other starts
 *  
   
    Time Complexity: O(nlogn), Space Complexity: O(1)

 */

function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }

  return true;
}

canAttendMeetings([
  [0, 30],
  [5, 10],
  [15, 20],
]); // false

canAttendMeetings([
  [7, 10],
  [2, 4],
]); // true
