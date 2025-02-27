/**
 *
 *  There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
 *
 *  A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 *
 *  You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
 *
 *  Return the total number of provinces.
 *
 *
 *  Time Complexity: O(n^2), Space Complexity: O(n)
 */

function findCircleNumGraph(isConnected) {
  let n = isConnected.length;

  let graph = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) {
        graph[i] ? graph[i]?.push(j) : (graph[i] = [j]);
        graph[j] ? graph[j]?.push(i) : (graph[j] = [i]);
      }
    }
  }

  let seen = new Set();
  let number = 0;

  for (let i = 0; i < n; i++) {
    if (!seen.has(i)) {
      number++;
      seen.add(i);

      let queue = [i];

      while (queue.length) {
        let v = queue.shift();

        for (let n of graph[v]) {
          if (!seen.has(n)) {
            seen.add(n);
            queue.push(n);
          }
        }
      }
    }
  }

  return number;
}


function findCircleNum(isConnected: number[][]): number {
  let n = isConnected.length;
  let visited = Array(n).fill(false);
  let provinces = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(isConnected, i, visited);
      provinces++;
    }
  }

  return provinces;
}

function dfs(isConnected: number[][], i: number, visited: boolean[]) {
  visited[i] = true;

  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[i][j] === 1 && !visited[j]) {
      dfs(isConnected, j, visited);
    }
  }
}

function findCircleNumBFS(isConnected: number[][]): number {
  let n = isConnected.length;

  let visited = new Array(n).fill(false);

  let count = 0;

  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      count++;

      const queue = [city];
      visited[city] = true;

      while (queue.length > 0) {
        let current = queue.shift();

        for (let ngbr = 0; ngbr < n; ngbr++) {
          if (isConnected[current][ngbr] === 1 && !visited[ngbr]) {
            visited[ngbr] = true;
            queue.push(ngbr);
          }
        }
      }
    }
  }

  return count;
}

