/**
 *  
 *  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

    You must write an algorithm that runs in O(n) time.

    

    Example 1:

    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * 
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

function longestConsecutive(nums: number[]): number {
  let set = new Set(nums);
  let maxLen = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      // If num - 1 exists, then it means we are not starting from the smallest number and we should skip this number
      let len = 0;
      while (set.has(num + len)) {
        // Keep checking if the next number exists in the set and increment the length
        len += 1;
      }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}
