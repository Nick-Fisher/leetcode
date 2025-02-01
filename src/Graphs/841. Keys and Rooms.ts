/**
 * 
 *  There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

    When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

    Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.


 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 */

function canVisitAllRooms(rooms: number[][]): boolean {
  let visited = new Set<number>();
  let stack = [0];

  while (stack.length) {
    let current = stack.pop()!;
    

    for (let key of rooms[current]) {
      if (!visited.has(key)) {
        visited.add(current);
        stack.push(key);
      }
    }
  }

  return visited.size === rooms.length;
}

function canVisitAllRooms2(rooms: number[][]): boolean {
  let seen = [0];

  function traverse(room) {
    for (let neighbour of rooms[room]) {
      if (!seen.includes(neighbour)) {
        seen.push(neighbour);
        traverse(neighbour);
      }
    }
  }

  traverse(0);
  return seen.length === rooms.length;
}
