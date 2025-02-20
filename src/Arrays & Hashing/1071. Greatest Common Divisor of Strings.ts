/**
 * 
 *  For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2 
 *  
 *  Input: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"
 * 
    Time Complexity: O(n), Space Complexity: O(1)
 */

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return '';

  function gcd(a: number, b: number) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return str1.substring(0, gcd(str1.length, str2.length));
}
