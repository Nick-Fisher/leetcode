/**
 * 
 * 
 *  Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

    Note that after backspacing an empty text, the text will continue empty.

    Example 1:

    Input: s = "ab#c", t = "ad#c"
    Output: true
    Explanation: Both s and t become "ac".
    Example 2:

    Input: s = "ab##", t = "c#d#"
    Output: true
    Explanation: Both s and t become "".
    Example 3:

    Input: s = "a#c", t = "b"
    Output: false
    Explanation: s becomes "c" while t becomes "b".
 * 
 * 
 */

function backspaceCompare(s: string, t: string): boolean {
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    let skip_counter1 = 0;
    let skip_counter2 = 0;

    while (0 <= p1 || 0 <= p2) {
        while (0 <= p1 && (s[p1] === "#" || 0 < skip_counter1)) {
            if (s[p1] === "#") {
                skip_counter1++;
            } else {
                skip_counter1--;
            }
            p1--;
        }

        while (0 <= p2 && (t[p2] === "#" || 0 < skip_counter2)) {
            if (t[p2] === "#") {
                skip_counter2++;
            } else {
                skip_counter2--;
            }
            p2--;
        }

        if (p1 < 0 && p2 < 0) {
            return true;
        }

        if (p1 < 0 || p2 < 0 || s[p1] !== t[p2]) {
            return false;
        }

        p1--;
        p2--;
    }

    return true;
}

console.log(backspaceCompare("ab#c", "ad#c")); // true