/**
 * 
 *  In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

    Return the maximum amount of gold you can collect under the conditions:

    Every time you are located in a cell you will collect all the gold in that cell.
    From your position, you can walk one step to the left, right, up, or down.
    You can't visit the same cell more than once.
    Never visit a cell with 0 gold.
    You can start and stop collecting gold from any position in the grid that has some gold.
    

    Example 1:

    Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
    Output: 24
    Explanation:
    [[0,6,0],
    [5,8,7],
    [0,9,0]]
    Path to get the maximum gold, 9 -> 8 -> 7.
 *  
 * 
 *  
 */

function getMaximumGold(grid: number[][]): number {
  let cols = grid[0].length;
  let rows = grid.length;
  let maxGold = 0;

  function dfs(row, col, currentGold) {
    if (
      row >= 0 &&
      col >= 0 &&
      row < rows &&
      col < cols &&
      grid[row][col] !== 0
    ) {
      const goldInCurrentCell = grid[row][col];
      currentGold += goldInCurrentCell;

      grid[row][col] = 0;

      maxGold = Math.max(maxGold, currentGold);

      dfs(row + 1, col, currentGold);
      dfs(row - 1, col, currentGold);
      dfs(row, col + 1, currentGold);
      dfs(row, col - 1, currentGold);

      // backtrack
      grid[row][col] = goldInCurrentCell;
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== 0) {
        dfs(row, col, 0);
      }
    }
  }

  return maxGold;
}
