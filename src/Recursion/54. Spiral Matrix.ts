/**
 *
 *  Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *  Output: [1,2,3,6,9,8,7,4,5]
 *
 */

const recursive = (
  matrix: number[][],
  vector: 'right' | 'down' | 'left' | 'up'
): number[] => {
  if (!matrix.length || !matrix[0].length) return [];

  if (vector === 'right') {
    return [...matrix.shift()!, ...recursive(matrix, 'down')];
  } else if (vector === 'down') {
    const col: number[] = [];
    matrix.forEach((row) => col.push(row.pop()!));
    return [...col, ...recursive(matrix, 'left')];
  } else if (vector === 'left') {
    return [...matrix.pop()?.reverse()!, ...recursive(matrix, 'up')];
  } else {
    const col: number[] = [];
    matrix.forEach((row) => col.push(row.shift()!));
    return [...col.reverse(), ...recursive(matrix, 'right')];
  }
};

function spiralOrder(matrix: number[][]): number[] {
  return recursive(matrix, 'right');
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
