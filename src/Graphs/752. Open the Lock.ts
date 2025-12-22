/**
 *  
 *  You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

    The lock initially starts at '0000', a string representing the state of the 4 wheels.

    You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

    Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

 * 
 *  Time Complexity: O(10^4), Space Complexity: O(10^4)
 */

function openLock(deadends: string[], target: string): number {
  if (deadends.includes('0000')) return -1;

  let q: [string, number][] = [['0000', 0]];
  let seen = new Set(deadends);

  function neighbours(current) {
    let result = [];

    for (let i = 0; i < 4; i++) {
      let n = Number(current[i]);

      result.push(
        current.slice(0, i) + (n === 9 ? 0 : n + 1) + current.slice(i + 1)
      );
      result.push(
        current.slice(0, i) + (n === 0 ? 9 : n - 1) + current.slice(i + 1)
      );
    }

    return result;
  }

  while (q.length) {
    let [current, steps] = q.shift();

    if (current === target) {
      return steps;
    }

    for (let n of neighbours(current)) {
      if (!seen.has(n)) {
        q.push([n, steps + 1]);
        seen.add(n);
      }
    }
  }

  return -1;
}
