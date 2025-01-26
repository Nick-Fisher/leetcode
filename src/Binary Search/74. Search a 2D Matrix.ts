/**
 *  
 *  You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.

    You must write a solution in O(log(m * n)) time complexity.


 *   
 *   Time Complexity: O(log(m * n)), Space Complexity: O(1)
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  let row = matrix.length;
  let col = matrix[0].length;

  let left = 0;
  let right = row * col - 1;

  while (left <= right) {
    let pivot = (left + right) / 2;

    let midVal = matrix[Math.floor(pivot / col)][pivot % col];

    if (midVal === target) {
      return true;
    } else if (midVal < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return false;
}
