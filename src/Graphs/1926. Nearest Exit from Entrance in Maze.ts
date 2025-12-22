/**
 *  
 *  You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

    In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

    Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
 * 
 *   
 *  Time Complexity: O(m*n), Space Complexity: O(m*n)
 */

function nearestExit(maze: string[][], entrance: number[]): number {
  let rows = maze.length;
  let cols = maze[0].length;

  let [e_r, e_c] = entrance; // entrance row
  maze[e_r][e_c] = '+';

  let q = [[e_r, e_c, 0]];

  while (q.length) {
    let [r, c, num] = q.shift();

    for (let [dr, dc] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      let new_r = r + dr;
      let new_c = c + dc;

      if (
        new_r >= 0 &&
        new_c >= 0 &&
        new_r < rows &&
        new_c < cols &&
        maze[new_r][new_c] === '.'
      ) {
        if (
          new_r === 0 ||
          new_r === rows - 1 ||
          new_c === 0 ||
          new_c === cols - 1
        ) {
          return num + 1;
        }

        q.push([new_r, new_c, num + 1]);
        maze[new_r][new_c] = '+';
      }
    }
  }

  return -1;
}

function nearestExit2(maze: string[][], entrance: number[]): number {
  let n = maze.length;
  let m = maze[0].length;

  let q = [[entrance[0], entrance[1], 0]];

  let seen = new Set();
  seen.add(JSON.stringify(entrance));

  while (q.length) {
    let [r, c, d] = q.shift();

    if (
      (r !== entrance[0] || c !== entrance[1]) &&
      (r === 0 || r === n - 1 || c === 0 || c === m - 1)
    ) {
      return d;
    }

    for (let [dx, dy] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      let newR = r + dx;
      let newC = c + dy;

      if (
        newR >= 0 &&
        newR < n &&
        newC >= 0 &&
        newC < m &&
        maze[newR][newC] === '.' &&
        !seen.has(JSON.stringify([newR, newC]))
      ) {
        q.push([newR, newC, d + 1]);
        seen.add(JSON.stringify([newR, newC]));
      }
    }
  }

  return -1;
}
