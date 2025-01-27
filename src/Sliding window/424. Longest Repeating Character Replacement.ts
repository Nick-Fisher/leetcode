/**
 *  
 *  You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

    Return the length of the longest substring containing the same letter you can get after performing the above operations.

    Example 1:

    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace the two 'A's with two 'B's or vice versa.
 *  

 *  Time complexity: O(n), Space complexity: O(1)
 */

function characterReplacement(s: string, k: number): number {
  let ans = 0;
  let l = 0;
  let maxCount = 0;
  let window = new Map();

  for (let r = 0; r < s.length; r++) {
    window.set(s[r], (window.get(s[r]) || 0) + 1);
    maxCount = Math.max(maxCount, window.get(s[r])!);

    if (r - l + 1 - maxCount > k) {
      window.set(s[l], window.get(s[l])! - 1);
      l++;
    }

    ans = Math.max(ans, r - l + 1);
  }

  return ans;
}
