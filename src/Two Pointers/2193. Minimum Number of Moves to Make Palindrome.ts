/**
 *  Initialize moves with 0
    to keep track of the number of swaps required.

    Start iterating the string from the two ends of the array by initializing two pointers, i at the start and j at the end of the string. This loop continues while i < j.

    Use an inner loop to search backward from j to find a character that matches s[i].

    If a matching character is found, swap it with its adjacent characters to its right until it reaches position j, and increment the moves counter for each swap.

    If no matching character is found, increment moves by the exact number of swaps needed to place this unique character in the middle, ensuring minimal total swaps.

    After processing each pair of characters, move i forward and j backward and continue the process.

    Return moves.
 *  
 * 
 * You are given a string s consisting only of lowercase English letters.

    In one move, you can select any two adjacent characters of s and swap them.

    Return the minimum number of moves needed to make s a palindrome.

    Note that the input will be generated such that s can always be converted to a palindrome.

    

    Example 1:

    Input: s = "aabb"
    Output: 2
    Explanation:
    We can obtain two palindromes from s, "abba" and "baab". 
    - We can obtain "abba" from s in 2 moves: "aabb" -> "abab" -> "abba".
    - We can obtain "baab" from s in 2 moves: "aabb" -> "abab" -> "baab".
    Thus, the minimum number of moves needed to make s a palindrome is 2.
    * 
 *  Time Complexity: O(n^2), Space Complexity: O(1)
 */

function minMovesToMakePalindrome(s: string): number {
    let arr = s.split("");
    let left = 0, right = arr.length - 1;
    let swaps = 0;

    while (left < right) {
        if (arr[left] === arr[right]) {
            left++;
            right--;
        } else {
            let rIdx = right;
            while (rIdx > left && arr[rIdx] !== arr[left]) {
                rIdx--;
            }
            
            if (rIdx === left) {
                // Special case: The character at `left` is unique in the remaining part
                [arr[left], arr[left + 1]] = [arr[left + 1], arr[left]]; 
                swaps++;
            } else {
                // Bring `arr[rIdx]` to `right`
                for (let i = rIdx; i < right; i++) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swaps++;
                }
                left++;
                right--;
            }
        }
    }

    return swaps;
};