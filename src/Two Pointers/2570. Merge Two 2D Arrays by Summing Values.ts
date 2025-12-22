/**
 * 
 *  Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
    Output: [[1,6],[2,3],[3,2],[4,6]]
    Explanation: The resulting array contains the following:
    - id = 1, the value of this id is 2 + 4 = 6.
    - id = 2, the value of this id is 3.
    - id = 3, the value of this id is 2.
    - id = 4, the value of this id is 5 + 1 = 6.
 * 
 *  Time Complexity - O(n), Space Complexity - O(1)
 */

function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  let result = [];

  for (let i = 0, j = 0; i < nums1.length || j < nums2.length; ) {
    const [id1, val1] = nums1[i] ?? [Infinity, 0];
    const [id2, val2] = nums2[j] ?? [Infinity, 0];

    if (id1 < id2) {
      result.push(nums1[i]);
      i++;
    } else if (id1 > id2) {
      result.push(nums2[j]);
      j++;
    } else {
      result.push([id1, val1 + val2]);
      i++;
      j++;
    }
  }

  return result;
}
