public class Solution
{
    public int MaxArea(int[] height)
    {
        var start = 0;
        var end = height.Length - 1;

        var max = 0;

        while (start < end)
        {
            var size = CalculateSize(end - start, height[start] > height[end] ? height[end] : height[start]);
            if (size > max)
            {
                max = size;
            }

            if (height[start] > height[end])
            {
                end--;
            }
            else
            {
                start++;
            }

        }

        return max;
    }

    public int CalculateSize(int length, int height)
    {
        return length * height;
    }
}