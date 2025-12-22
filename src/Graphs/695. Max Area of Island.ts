/**
 * 
 *  You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

    The area of an island is the number of cells with a value 1 in the island.

    Return the maximum area of an island in grid. If there is no island, return 0.
 * 
 *  Time Complexity: O(m*n), Space Complexity: O(m*n)
 */

function maxAreaOfIsland(grid: number[][]): number {
  if (!grid) return 0;
  let maxArea = 0;

  let n = grid.length;
  let m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        let currentArea = 0;

        let q = [[i, j]];

        while (q.length) {
          let [r, c] = q.shift();

          if (r >= 0 && c >= 0 && r < n && c < m && grid[r][c] === 1) {
            currentArea++;
            grid[r][c] = 0;

            q.push([r + 1, c]);
            q.push([r - 1, c]);
            q.push([r, c + 1]);
            q.push([r, c - 1]);
          }
        }

        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }

  return maxArea;
}
