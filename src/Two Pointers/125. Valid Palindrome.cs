public class Solution
{
    public bool IsPalindrome(string s)
    {
        var start = 0;
        var end = s.Length - 1;

        while (start < end)
        {
            var first = char.ToLower(s[start]);
            var last = char.ToLower(s[end]);

            if (!char.IsLetterOrDigit(s[start]))
            {
                start++;
                continue;
            }

            if (!char.IsLetterOrDigit(s[end]))
            {
                end--;
                continue;
            }

            if (first != last)
            {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }

    public bool isAlphaBetical(char c)
    {
        return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
}