/**
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.
    Given n, calculate F(n).
 * 
 */

// Naive recursive solution with O(2^n) time complexity
const fib = (n: number): number => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// Time complexity: O(n), Space complexity: O(n)
const fib2 = (n: number, memo: number[] = []): number => {
  if (n < 2) return n;
  if (memo[n] !== undefined) return memo[n];

  return (memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo));
};

// using Binet's formula with O(1) time complexity
function fib3(n: number): number {
  const goldenRatio = 1.618034; // (1 + Math.sqrt(5)) / 2
  return Math.trunc(
    (Math.pow(goldenRatio, n) - Math.pow(1 - goldenRatio, n)) / Math.sqrt(5)
  );
}

// Time complexity: O(n), Space complexity: O(1)
function fib4(n: number): number {
  if (n < 2) return n;
  let output = 1;
  for (let prev = 0; n > 1; n--) {
    [output, prev] = [prev + output, output];
  }
  return output;
}

console.log(fib(4));
