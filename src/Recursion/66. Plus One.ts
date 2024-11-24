/**
 * 
 *  You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

    Increment the large integer by one and return the resulting array of digits.

    Example 1:

    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].
 * 
 */

function plusOne(digits: number[]): number[] {
  const recursiveFunc = (digits: number[], indexToCheck) => {
    if (digits[indexToCheck] >= 10) {
      if (indexToCheck === 0) {
        digits[0] = 0;
        return [1, ...digits];
      } else {
        digits[indexToCheck] %= 10;
        digits[indexToCheck - 1] += 1;
        return recursiveFunc(digits, indexToCheck - 1);
      }
    } else {
      return digits;
    }
  };

  digits[digits.length - 1] += 1;
  return recursiveFunc(digits, digits.length - 1);
}

plusOne([9, 9]); // [1,0,0]
