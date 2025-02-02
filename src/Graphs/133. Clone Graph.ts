/**
 *  
 *  Given a reference of a node in a connected undirected graph.

    Return a deep copy (clone) of the graph.

    Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

    class Node {
        public int val;
        public List<Node> neighbors;
    }

 * 
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;

  let map = new Map<GraphNode, GraphNode>();

  let dfs = (node: GraphNode) => {
    if (map.has(node)) return map.get(node);

    let clone = new GraphNode(node.val);
    map.set(node, clone);

    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
}

function cloneGraphStackDFS(node: GraphNode | null): GraphNode | null {
  if (!node) return null;

  let seen = new Map<GraphNode, GraphNode>();
  let stack = [node];

  seen.set(node, new GraphNode(node.val, []));

  while (stack.length) {
    let v = stack.pop()!;

    for (let n of v.neighbors) {
      if (!seen.has(n)) {
        seen.set(n, new GraphNode(n.val, []));
        stack.push(n);
      }

      seen.get(v)!.neighbors.push(seen.get(n)!);
    }
  }

  return seen.get(node)!;
}
