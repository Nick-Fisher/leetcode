/**
 * 
 *  Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

    There is only one repeated number in nums, return this repeated number.

    You must solve the problem without modifying the array nums and using only constant extra space.

    

    Example 1:

    Input: nums = [1,3,4,2,2]
    Output: 2
    Example 2:

    Input: nums = [3,1,3,4,2]
    Output: 3
 * 
 *  Time Complexity: O(n), Space Complexity: O(1)
 */

function findDuplicate(nums: number[]): number {
    //  Intialize the fast and slow pointers and make them point the first
    //  element of the array
    let fast = nums[0];
    let slow = nums[0];
    // PART #1
    // Traverse in array until the intersection point is found
    while (true) {
        // Move the slow pointer using the nums[slow] flow
        slow = nums[slow];
        // Move the fast pointer two times fast as the slow pointer using the 
        // nums[nums[fast]] flow 
        fast = nums[nums[fast]];
        // Break the loop when slow pointer becomes equal to the fast pointer, i.e., 
        // if the intersection is found
        if (slow == fast) {
            break;
        }
    }
    // PART #2
    // Make the slow pointer point the starting position of an array again, i.e.,
    // start the slow pointer from starting position
    slow = nums[0];
    // Traverse the array until the slow pointer becomes equal to the
    // fast pointer
    while (slow != fast) {
        // Move the slow pointer using the nums[slow] flow
        slow = nums[slow];
        // Move the fast pointer slower than before, i.e., move the fast pointer
        // using the nums[fast] flow
        fast = nums[fast];
    }
    // Return the fast pointer as it points the duplicate number of the array
    return fast
};