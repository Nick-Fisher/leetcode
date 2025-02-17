/**
 *  
 *  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

    Each letter in magazine can only be used once in ransomNote.

    

    Example 1:

    Input: ransomNote = "a", magazine = "b"
    Output: false

 * 
 *  Time Complexity: O(m + n), Space Complexity: O(1)
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  let letters = new Map<string, number>(); // Map will be constant space since it will have at most 26 characters

    for (let char of magazine) {
        letters.set(char, letters.has(char) ? letters.get(char) + 1 : 1);
    }

    for (let char of ransomNote) {
        if (letters.has(char)) {
            letters.get(char) > 1 ? letters.set(char, letters.get(char) - 1) : letters.delete(char);
        } else {
            return false;
        }
    }

    return true;
}