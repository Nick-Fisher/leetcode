public class Solution
{
    public int[] TwoSum(int[] numbers, int target)
    {
        var first = 0;
        var last = numbers.Length - 1;

        while (first < last)
        {
            var sum = numbers[first] + numbers[last];
            if (sum == target)
            {
                return [first + 1, last + 1];
            }

            if (sum > target)
            {
                last--;
                continue;
            }

            if (sum < target)
            {
                first++;
                continue;
            }
        }

        throw new Exception("No such indecies");
    }
}