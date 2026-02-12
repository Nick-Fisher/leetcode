// Complexity: Time: O(N) | Space: O(1)

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let amount = 0;
  let windowSum = 0;

  let L = 0;

  for (let R = 0; R < arr.length; R++) {
    windowSum += arr[R];

    if (R - L + 1 === k) {
      if (windowSum / k >= threshold) {
        amount++;
      }

      windowSum -= arr[L];
      L++;
    }
  }

  return amount;
}
