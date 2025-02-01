/**
 * 
 *  There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

    You want to determine if there is a valid path that exists from vertex source to vertex destination.

    Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

function validPathDFS(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let graph = {};

  for (let [a, b] of edges) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  let seen = new Set();

  let stack = [source];

  while (stack.length) {
    let v = stack.pop();

    if (v === destination) {
      return true;
    }

    for (let n of graph[v]) {
      if (!seen.has(n)) {
        seen.add(n);
        stack.push(n);
      }
    }
  }

  return false;
}

function validPathDFS2(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let graph = new Map<number, number[]>();

  for (let [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);

    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }

  let visited = new Set<number>();
  let stack = [source];

  while (stack.length) {
    let current = stack.pop()!;

    if (current === destination) return true;

    if (visited.has(current)) continue;

    visited.add(current);

    for (let neighbour of graph.get(current)!) {
      stack.push(neighbour);
    }
  }

  return false;
}

function validPathBFS(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let graph = {};

  for (let [a, b] of edges) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  let seen = new Set();
  let queue = [source];

  while (queue.length) {
    let v = queue.shift();

    if (v === destination) return true;

    for (let ngbr of graph[v]) {
      if (!seen.has(ngbr)) {
        seen.add(ngbr);
        queue.push(ngbr);
      }
    }
  }

  return false;
}
