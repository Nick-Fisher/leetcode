/**
 * 
 * 
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

    Example 1:

    Input: s = "abc", t = "ahbgdc"
    Output: true
    Example 2:

    Input: s = "axc", t = "ahbgdc"
    Output: false
 * 
    Time complexity O(N), space complexity O(1)
 * 
 */

function isSubsequence(s: string, t: string): boolean {
  let sPointer = 0;

  if (!s) return true;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sPointer]) {
      if (sPointer === s.length - 1) {
        return true;
      }
      sPointer++;
    }
  }

  return false;
}

isSubsequence('abc', 'ahbgdc'); // Output: true
