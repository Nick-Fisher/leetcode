public class Solution
{
    public void SortColors(int[] nums)
    {
        var l = 0;
        var m = 0;
        var r = nums.Length - 1;

        while (m <= r)
        {
            if (nums[m] == 0)
            {
                (nums[l], nums[m]) = (nums[m], nums[l]);
                m++;
                l++;
            }
            else if (nums[m] == 2)
            {
                (nums[m], nums[r]) = (nums[r], nums[m]);
                r--;
            }
            else
            {
                m++;
            }
        }
    }
}