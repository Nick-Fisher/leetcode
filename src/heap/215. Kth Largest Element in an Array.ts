/**
 * 
 *   Given an integer array nums and an integer k, return the kth largest element in the array.

    Note that it is the kth largest element in the sorted order, not the kth distinct element.

    Can you solve it without sorting?

    

    Example 1:

    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5
 *  
 * 
 * 
 */

// Quick Select Algorithm - Time Complexity: O(n), Space Complexity: O(1)

function findKthLargest(nums: number[], k: number): number {
  return quickSelect(nums, 0, nums.length - 1, k);
}

function quickSelect(nums: number[], low: number, high: number, k: number): number {
  const pivot = partition(nums, low, high);

  if (pivot === k - 1) {
    return nums[pivot];
  } else if (pivot > k - 1) {
    return quickSelect(nums, low, pivot - 1, k);
  } else {
    return quickSelect(nums, pivot + 1, high, k);
  }
}

function partition(nums: number[], low: number, high: number): number {
  let pivot = nums[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (nums[j] > pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  [nums[i], nums[high]] = [nums[high], nums[i]];

  return i;
}

// Priority Queue - Time Complexity: O(nlogk), Space Complexity: O(k)



function findKthLargestHeap(nums: number[], k: number): number {
  let minHeap = new MinPriorityQueue();

  for (let num of nums) {
    minHeap.enqueue(num);

    if (minHeap.size() > k) minHeap.dequeue();
  }

  return minHeap.front();
}