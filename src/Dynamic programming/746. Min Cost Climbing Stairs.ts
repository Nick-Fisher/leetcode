/**
 *  
 *  You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

    You can either start from the step with index 0, or the step with index 1.

    Return the minimum cost to reach the top of the floor.

    Example 1:

    Input: cost = [10,15,20]
    Output: 15
    Explanation: You will start at index 1.
    - Pay 15 and climb two steps to reach the top.
    The total cost is 15.


 *  Time Complexity: O(n), Space Complexity: O(1)
 * 
 */

function minCostClimbingStairs(cost: number[]): number {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

function minCostClimbingStairs2(cost: number[]): number {
  let cache = {};
  let n = cost.length;

  function inner(n) {
    if (n <= 1) return 0;

    if (cache[n]) return cache[n];

    return Math.min(inner(n - 1) + cost[n - 1], inner(n - 2) + cost[n - 2]);
  }

  return inner(n);
}

function minCostClimbingStairs3(cost: number[]): number {
  let n = cost.length;

  let dp = new Array(n + 1);
  (dp[0] = 0), (dp[1] = 0);

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
}
