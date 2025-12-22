/**
 *  Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array where only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

    Examples
    uniqueArray([1, 2, 3]); // [1, 2, 3]
    uniqueArray([1, 1, 2]); // [1, 2]
    uniqueArray([2, 1, 2]); // [2, 1]
 */

// Complexity: time O(n), space O(n)

// Instead of create a new array, we can use a Set to store the unique values and then convert it to an array. 

export default function uniqueArray<T extends ReadonlyArray<unknown>>(
  array: T
): Array<T[number]> {
  const uniqueValues = new Set();
  const result: T[number][] = [];

  for (let element of array) {
    if (!uniqueValues.has(element)) {
      uniqueValues.add(element);
      result.push(element);
    }
  }

  return result;
}
