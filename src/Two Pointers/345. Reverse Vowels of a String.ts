/**
 *  
 *   Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


 * 
 *  Time Complexity: O(n), Space Complexity: O(1)
 */

function reverseVowels(s: string): string {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let sp = s.split('');

  function isVowel(ch: string): boolean {
    return vowels.has(ch);
  }

  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (!isVowel(sp[p1])) {
      p1++;
      continue;
    }
    if (!isVowel(sp[p2])) {
      p2--;
      continue;
    }

    [sp[p1], sp[p2]] = [sp[p2], sp[p1]];

    p1++;
    p2--;
  }

  return sp.join('');
}
