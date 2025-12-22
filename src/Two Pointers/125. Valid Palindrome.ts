/**
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
    Example 2:

    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
    Example 3:

    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
    

    Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
 * 
 */

// Complexity: time O(n), space O(n)

function isAlphaNum(c: string) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}

function isPalindrome5(s: string): boolean {
    if (s.length === 1) return true;

    let p1 = 0;
    let p2 = s.length - 1;

    while (p1 < p2) {
        while (p1 < p2 && !isAlphaNum(s[p1].toLowerCase())) p1++;
        while (p1 < p2 && !isAlphaNum(s[p2].toLowerCase())) p2--;

        if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
            return false;
        }

        p1++;
        p2--;
    }

    return true;
};


function isPalindrome3(s: string): boolean {
  const regex = /[^a-z0-9]/gi;
  const str = s.toLowerCase().replace(regex, '');

  let l = 0,
    r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

const isAlfaNum = (c: string): boolean => {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};

function isPalindrome4(s: string): boolean {
  const str = s
    .toLowerCase()
    .split('')
    .filter((c) => isAlfaNum(c));

  let l = 0,
    r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

