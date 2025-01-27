/**
 * 
 * 
 * Given a string s, find the length of the longest 
    substring
    without repeating characters.
    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
 * 
    Time complexity: O(n), Space complexity: O(n)
 * 
 */

function lengthOfLongestSubstring(s: string): number {
  let ans = 0;
  let l = 0;
  let window = new Set();

  for (let r = 0; r < s.length; r++) {
    while (window.has(s[r])) {
      window.delete(s[l]);
      l++;
    }
    window.add(s[r]);

    ans = Math.max(ans, r - l + 1);
  }

  return ans;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3
console.log(lengthOfLongestSubstring('bbbbb')); // Output: 1
console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3
