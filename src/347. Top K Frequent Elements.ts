/** Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique. **/

// Complexity: time O(n), space O(n)

function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 1) return nums;

  const hashMap: Record<number, number> = {};

  for (const num of nums) {
    hashMap[num] = ++hashMap[num] || 1;
  }

  const frequencyMap: string[][] = Array.from(
    { length: nums.length + 1 },
    () => []
  );

  for (const [num, count] of Object.entries(hashMap)) {
    frequencyMap[count].push(num);
  }

  const result: any = [];

  for (let i = frequencyMap.length - 1; i > 0; i--) {
    frequencyMap[i].length && result.push(...frequencyMap[i]);
    if (result.length === k) return result;
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
