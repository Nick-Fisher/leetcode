/**
 * 
 *  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


 *   Time Complexity: O(m*n), Space Complexity: O(m*n)
 */

function numIslands(grid: string[][]): number {
  let count = 0;

  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    )
      return;

    grid[i][j] = '0';

    dfs(i + 1, j); // up
    dfs(i - 1, j); // down
    dfs(i, j - 1); // left
    dfs(i, j + 1); // right
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;
}

function numIslandsBFS(grid: string[][]): number {
  if (!grid) return 0;

  let number = 0;
  let n = grid.length;
  let m = grid[0].length;

  function isNotValid(r, c) {
    return r < 0 || c < 0 || r >= n || c >= m || grid[r][c] === '0';
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        number++;

        let queue = [[i, j]];

        while (queue.length) {
          let [r, c] = queue.shift();

          if (!isNotValid(r, c)) {
            grid[r][c] = '0';
            queue.push([r + 1, c]);
            queue.push([r - 1, c]);
            queue.push([r, c + 1]);
            queue.push([r, c - 1]);
          }
        }
      }
    }
  }

  return number;
}
