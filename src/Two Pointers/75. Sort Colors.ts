/**
 *  
 *  Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

    We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

    You must solve this problem without using the library's sort function.

    

    Example 1:

    Input: nums = [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
 *  

 *  Time Complexity: O(n), Space Complexity: O(1)
 */

function sortColors(colors) {
  let l = 0;
  let r = colors.length - 1;
  let i = 0;

  function swap(a, b) {
    [colors[a], colors[b]] = [colors[b], colors[a]];
  }

  while (i <= r) {
    if (colors[i] === 0) {
      swap(l, i);
      l++;
      i++;
    } else if (colors[i] === 2) {
      swap(i, r);
      r--;
    } else {
      i++;
    }
  }

  return colors;
}

function sortColors2(nums: number[]): void {
  let r = 0;
  let w = 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) r++;

    if (nums[i] === 1) w++;

    if (nums[i] === 2) b++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (r > 0) {
      nums[i] = 0;
      r--;
      continue;
    }

    if (w > 0) {
      nums[i] = 1;
      w--;
      continue;
    }

    if (b > 0) {
      nums[i] = 2;
      b--;
      continue;
    }
  }
}
