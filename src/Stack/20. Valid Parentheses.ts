/**
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 * 
 */

// Complexity: time O(n), space O(n)

function isValid(s: string): boolean {
  if (s.length < 2) return false;

  const stack: string[] = [];

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of s) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      if (!stack.length || stack.pop() !== char) return false;
    }
  }

  return !stack.length;
}

console.log(isValid('(){}[]')); // true
