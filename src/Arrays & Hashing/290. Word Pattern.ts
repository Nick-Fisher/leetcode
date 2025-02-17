/**
 *  
 *  Given a pattern and a string s, find if s follows the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.
    

    Example 1:

    Input: pattern = "abba", s = "dog cat cat dog"

    Output: true

    Explanation:

    The bijection can be established as:

    'a' maps to "dog".
    'b' maps to "cat".
 * 

 *  Time Complexity: O(n), Space Complexity: O(n)
 */

function wordPattern(pattern: string, s: string): boolean {
  let letters = pattern.split('');
  let words = s.split(' ');

  if (letters.length !== words.length) return false;

  if (new Set(letters).size !== new Set(words).size) return false;

  let map = new Map();

  for (let i = 0; i < letters.length; i++) {
    !map.has(letters[i]) && map.set(letters[i], words[i]);

    if (map.get(letters[i]) !== words[i]) {
      return false;
    }
  }

  return true;
}
