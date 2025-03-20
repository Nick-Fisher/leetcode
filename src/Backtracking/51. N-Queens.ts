/**
 * 
 *   The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

    Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

    Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
 *  
 *  Time Complexity: O(n!), Space Complexity: O(n^2)
 * 
 */

function solveNQueens(n: number): string[][] {
  let result = [];

  function bt(row, columns, diagonals, t_diagonals, board) {
    if (row === n) {
      result.push(board.map((row) => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      let current_diagonal = row + col;
      let current_t_diagonal = row - col;

      if (
        columns.has(col) ||
        diagonals.has(current_diagonal) ||
        t_diagonals.has(current_t_diagonal)
      ) {
        continue;
      }

      columns.add(col);
      diagonals.add(current_diagonal);
      t_diagonals.add(current_t_diagonal);
      board[row][col] = 'Q';

      bt(row + 1, columns, diagonals, t_diagonals, board);

      columns.delete(col);
      diagonals.delete(current_diagonal);
      t_diagonals.delete(current_t_diagonal);
      board[row][col] = '.';
    }
  }

  let board = Array.from({ length: n }, () => Array(n).fill('.'));

  bt(0, new Set(), new Set(), new Set(), board);

  return result;
}

function solveNQueens2(n: number): string[][] {
  let result = [];

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  }

  function backtrack(board, row) {
    if (row === board.length) {
      result.push(board.map((row) => row.join('')));
      return;
    }

    for (let col = 0; col < board.length; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 'Q';
        backtrack(board, row + 1);
        board[row][col] = '.';
      }
    }
  }

  let board = Array.from({ length: n }, () => Array(n).fill('.'));
  backtrack(board, 0);

  return result;
}
