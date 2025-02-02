/**
 * 
 *  Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

    Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

    Notice that you can return the vertices in any order.
 * 
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  let indegree = Array(n).fill(0);

  for (let [from, to] of edges) {
    indegree[to]++;
  }

  let result = [];

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      result.push(i);
    }
  }

  return result;
}

function findSmallestSetOfVertices2(n: number, edges: number[][]): number[] {
  let in_degree = new Array(n).fill(0);

  for (let [from, to] of edges) {
    in_degree[to] += 1;
  }

  return in_degree.reduce((acc, curr, i) => {
    if (curr === 0) acc?.push(i);
    return acc;
  }, []);
}
