/**
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.

 

    Example 1:

    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.
 * 
 *
 *  Time Complexity: O(n^2), Space Complexity: O(1)
 *  
 */

const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
        r = nums.length;

    while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];

        if (sum > 0) {
            r--;
        } else if (sum < 0) {
            l++;
        } else {
            result.push([nums[i], nums[l], nums[r]]);
            l++;
            r--;

            while (nums[l] === nums[l - 1] && l < r) {
              l += 1;
            }
        }
    }

  }

  return result;
};














// function threeSum(nums: number[]) {
//     nums.sort((a, b) => a - b);
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) break;
//         // Non negative values can't give in sum 0

//         if (i > 0 && nums[i] === nums[i - 1]) {
//             //prevent same values
//             continue;
//         }

//         let l = i + 1;
//         let r = nums.length - 1;

//         while (l < r) {
            
//             const sum = nums[i] + nums[l] + nums[r];
//             if (sum > 0) {
//                 r--;
//             } else if (sum < 0) { 
//                 l++;
//             } else {
//                 result.push([nums[i], nums[l], nums[r]]);
//                 l++;
//                 r--;
//                 // if value the same - move left pointer
//                 while (nums[l] === nums[l - 1] && l < r) {
//                     l += 1;
//                 }
//             }
//         }
//     }

//     return result;
// };