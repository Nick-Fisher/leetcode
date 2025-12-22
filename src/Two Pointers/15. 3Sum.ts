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
 *  Time Complexity: O(n^2), Space Complexity: O(n)
 *    
 */
function threeSum(nums) {
  // Sort the array
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  // Iterate through the array
  for (let pivot = 0; pivot < n - 2; pivot++) {
    // If the current number is greater than 0, break the loop (no valid triplets possible)
    if (nums[pivot] > 0) {
      break;
    }
    // Skip duplicate values for the pivot
    if (pivot > 0 && nums[pivot] === nums[pivot - 1]) {
      continue;
    }

    // Use two-pointer technique
    let low = pivot + 1,
      high = n - 1;
    while (low < high) {
      const total = nums[pivot] + nums[low] + nums[high];
      if (total < 0) {
        low++;
      } else if (total > 0) {
        high--;
      } else {
        // Found a triplet
        result.push([nums[pivot], nums[low], nums[high]]);
        low++;
        high--;
        // Skip duplicates for low and high pointers
        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
        while (low < high && nums[high] === nums[high + 1]) {
          high--;
        }
      }
    }
  }

  return result;
}

const threeSum2 = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // Non negative values can't give in sum 0

    if (i > 0 && nums[i] === nums[i - 1]) continue; //prevent same values

    let l = i + 1,
      r = nums.length - 1;

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
          // if value the same - move left pointer
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
