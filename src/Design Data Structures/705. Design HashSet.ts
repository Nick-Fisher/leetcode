/**
 *  
 *  Design a HashSet without using any built-in hash table libraries.

    Implement MyHashSet class:

    void add(key) Inserts the value key into the HashSet.
    bool contains(key) Returns whether the value key exists in the HashSet or not.
    void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
    

    Example 1:

    Input
    ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
    [[], [1], [2], [1], [3], [2], [2], [2], [2]]
    Output
    [null, null, null, true, false, null, true, null, false]

 * 
    Time Complexity: O(1), all operations are O(1) on average. In the worst case, the time complexity is O(n) for add, contains, and remove operations.
    Space Complexity: O(n), where n is the number of unique keys that will be inserted into the hash set.
 */

class HashSetNode {
  key: number;
  next: HashSetNode;

  constructor(key: number) {
    this.key = key;
    this.next = null;
  }
}

class MyHashSet {
  private capacity;
  private set;

  constructor(capacity = 10 ** 6) {
    this.capacity = capacity;
    this.set = new Array(capacity).fill(new HashSetNode(0));
  }

  hash(key: number): number {
    return key % this.capacity;
  }

  add(key: number): void {
    let index = this.hash(key);

    let current = this.set[index];

    while (current.next) {
      if (current.next.key === key) {
        return;
      }
      current = current.next;
    }

    current.next = new HashSetNode(key);
  }

  remove(key: number): void {
    let index = this.hash(key);

    let current = this.set[index];

    while (current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  contains(key: number): boolean {
    let index = this.hash(key);

    let current = this.set[index];

    while (current.next) {
      if (current.next.key === key) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}
