/**
 * 
 *  There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

    You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. You are also given an integer array restricted which represents restricted nodes.

    Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.

    Note that node 0 will not be a restricted node.
 *  
 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 */

function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
    let graph = {};

    for (let [a, b] of edges) {
        graph[a] ? graph[a].push(b) : graph[a] = [b];
        graph[b] ? graph[b].push(a) : graph[b] = [a];
    }

    let seen = new Set(restricted);
    seen.add(0);

    let result = 0;

    let stack = [0];

    while (stack.length) {
        let v = stack.pop();
        result++;

        for (let n of graph[v]) {
            if (!seen.has(n)) {
                stack.push(n);
                seen.add(n);
            }
        }

    }

    return result;
};