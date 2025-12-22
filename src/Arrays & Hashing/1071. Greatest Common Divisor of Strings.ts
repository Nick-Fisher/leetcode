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
  let minLen = Math.min(str1.length, str2.length);

  for (let prefixLen = minLen; prefixLen > 0; prefixLen--) {
    let prefix = str1.slice(0, prefixLen);

    if (str1.length % prefix.length !== 0 || str2.length % prefix.length !== 0)
      continue;

    let isGcd = isDivisible(str1, prefix) && isDivisible(str2, prefix);

    if (isGcd) return prefix;
  }

  return '';

  function isDivisible(str, prefix) {
    let stringToCheck = prefix;

    while (stringToCheck.length <= str.length) {
      if (stringToCheck === str) return true;

      stringToCheck += prefix;
    }

    return false;
  }
}

function gcdOfStrings2(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return '';

  function gcd(a: number, b: number) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return str1.substring(0, gcd(str1.length, str2.length));
}
