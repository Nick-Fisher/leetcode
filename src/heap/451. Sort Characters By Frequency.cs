using System;
using System.Collections.Generic;

/**
    Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

    Return the sorted string. If there are multiple answers, return any of them.

    Example 1:

    Input: s = "tree"
    Output: "eert"
    Explanation: 'e' appears twice while 'r' and 't' both appear once.
    So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

    Time complexity: O(nlogn), Space complexity: O(n)
*/


public class Solution
{

    public string FrequencySort(string s)
    {
        var frequencyMap = new Dictionary<char, int>();

        // Count frequencies of each character
        foreach (char c in s)
        {
            frequencyMap[c] = frequencyMap.GetValueOrDefault(c, 0) + 1;
        }

        // Use a max heap (PriorityQueue) to sort by frequency
        var maxHeap = new PriorityQueue<(char character, int frequency), int>();

        foreach (var entry in frequencyMap)
        {
            // Enqueue each character with its frequency as the priority (negative for max-heap behavior)
            maxHeap.Enqueue((entry.Key, entry.Value), -entry.Value);
        }

        var result = new List<char>();

        // Build the result string
        while (maxHeap.Count > 0)
        {
            var (character, frequency) = maxHeap.Dequeue();

            for (int i = 0; i < frequency; i++)
            {
                result.Add(character);
            }
        }

        return new string(result.ToArray());
    }
}