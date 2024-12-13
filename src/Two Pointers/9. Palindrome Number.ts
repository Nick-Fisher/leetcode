/**
 * 
 *  Given an integer x, return true if x is a palindrome, and false otherwise.

    Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

 *  // Complexity: time O(n), space O(1)
 * 
 */

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reversed === original;
}

function isPalindrome2(x: number): boolean {
  let items = String(x)?.split('');
  let l = 0,
    r = items.length - 1;

  while (l < r) {
    if (items[l] !== items[r]) return false;
    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome2(121)); // true
