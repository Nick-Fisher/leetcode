/**
 *  2000. Reverse Prefix of Word
 *
 *  You are given a 0-indexed string word and a character ch. You need to reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
 *  For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
 *
 *  Time Complexity: O(n), Space Complexity: O(n)
 *
 */

const reversePrefixTwoPointers = (word: string, ch: string): string => {
  let l = 0;
  let r = 0;
  let arr = word.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ch) {
      r = i;

      while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
      }

      break;
    }
  }

  return arr.join('');
};
