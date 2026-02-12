/**
 *   The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * 
 *  F(0) = 0, F(1) = 1
 *     
 * // Complexity is 2 ^ n 
 *  F(n) = F(n - 1) + F(n - 2), for n > 1. 
 *  Given n, calculate F(n).
 *  
 * 
 */

// DP1: top-down approach
// Time complexity: O(n), Space complexity: O(n)

function fibTopDown(n: number): number {
    const memo = new Map<number, number>();

    function helper(n: number): number {
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n);

        memo.set(n, helper(n - 1) + helper(n - 2));

        return memo.get(n);
    }

    return helper(n);
}

// DP2: bottom-up approach
// Time complexity: O(n), Space complexity: O(n)

// The idea is to store each fib number in each index of the array. 
// That way better to understand the logic and to avoid the stack overflow error
// Recursion creates a new stack frame for each call, which stores the function arguments, local variables, meta info etc. 

function fibBottomUp(n: number): number {
    if (n <= 1) return n;

    const dp = new Array(n + 1).fill(0);

    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// DP3: bottom-up approach with constant space
// Time complexity: O(n), Space complexity: O(1)

function fibBottomUpOptimized(n: number): number {
    if (n <= 1) return n;

    let a = 0,
        b = 1;

    for (let i = 2; i <= n; i++) {
        const sum = a + b;
        a = b;
        b = sum;
    }

    return b;
}

