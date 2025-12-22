/**
 *  
 *  Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

    The distance between two cells sharing a common edge is 1.
 * 
 *  Time Complexity: O(m*n), Space Complexity: O(m*n)
 */

function updateMatrix(mat: number[][]): number[][] {
    if (!mat) return mat;

    let n = mat.length;
    let m = mat[0].length;

    let seen = new Set();

    let q = [];

    const isValid = (r: number, c: number) => r >= 0 && c >= 0 && r < n && c < m && !seen.has(JSON.stringify([r, c]));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] === 0) {
                q.push([i, j, 1]);
                seen.add(JSON.stringify([i, j]));
            }
        }
    }
    

    while (q.length) {
        let [r, c, d] = q.shift();

        for (let [dx, dy] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
            if (isValid(r + dx, c + dy)) {
                mat[r + dx][c + dy] = d;
                q.push([r + dx, c + dy, d + 1]);
                seen.add(JSON.stringify([r + dx, c + dy]));
            }
        }
    }

    return mat;
};