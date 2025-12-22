/**
 *  
 *  There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

    Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

    This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

    Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

    It's guaranteed that each city can reach city 0 after reorder
 * 
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

function minReorder(n: number, connections: number[][]): number {
    let count = 0;
    let og_directions = new Set();
    let graph = {};

    for (let [f, s] of connections) {
        graph[f] ? graph[f].push(s) : graph[f] = [s];
        graph[s] ? graph[s].push(f) : graph[s] = [f];
        og_directions.add(JSON.stringify([f, s]))
    }

    let seen = new Set([0]);
    let stack = [0];

    while (stack.length) {
        let v = stack.pop();

        for (let n of graph[v]) {
            if (!seen.has(n)) {
                if (og_directions.has(JSON.stringify([v, n]))) count++;
                stack.push(n);
                seen.add(n);
            }
        }
    }

    return count;
};

function minReorderDFS(n: number, connections: number[][]): number {
  let graph = new Map<number, [number, number][]>();

  for (let [from, to] of connections) {
    if (!graph.has(from)) graph.set(from, []);
    if (!graph.has(to)) graph.set(to, []);

    graph.get(from).push([to, 1]);
    graph.get(to).push([from, 0]);
  }

  let count = 0;

  function dfs(node: number, parent: number) {
    for (let [ngbr, direction] of graph.get(node)) {
      if (ngbr === parent) continue;

      count += direction;
      dfs(ngbr, node);
    }
  }

  dfs(0, -1);

  return count;
}