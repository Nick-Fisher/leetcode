/**
 *  
 *  Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
    Note that the integers in the lists may be returned in any order.
 *  
 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    [...set1].filter((num) => !set2.has(num)),
    [...set2].filter((num) => !set1.has(num)),
  ];
}

function findDifference2(nums1: number[], nums2: number[]): number[][] {
  let nums11 = new Set(nums1);
  let nums22 = new Set(nums2);

  let res1 = new Set();
  let res2 = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (!nums22.has(nums1[i])) {
      res1.add(nums1[i]);
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (!nums11.has(nums2[j])) {
      res2.add(nums2[j]);
    }
  }

  return [Array.from(res1) as number[], Array.from(res2) as number[]];
}
