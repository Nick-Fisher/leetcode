/**

Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

*/

// Complexity: time O(n), space O(1)

function cycleSort(nums: number[]) {
  let i = 0;

  while (i < nums.length) {
    let pos = nums[i] - 1;

    if (nums[i] !== nums[pos]) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
    } else {
      i += 1;
    }
  }
  return nums;
}

function findDisappearedNumbers(nums: number[]): number[] {
  nums = cycleSort(nums);

  const missedValues: number[] = [];

  for (let j in nums) {
    if (nums[j] !== Number(j) + 1) {
      missedValues.push(Number(j) + 1);
    }
  }

  return missedValues;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
