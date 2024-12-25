/**
 * 
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 * 
 */

// Solution with Map

class LRUCache {
  private store = new Map();
  private size;

  constructor(capacity: number) {
    this.size = capacity;
  }

  get(key: number): number {
    if (!this.store.has(key)) {
      return -1;
    }

    const tempValue = this.store.get(key);
    this.store.delete(key);
    this.store.set(key, tempValue);

    return tempValue;
  }

  put(key: number, value: number): void {
    if (this.store.size === this.size && !this.store.has(key)) {
      const { value: lastElementKey } = this.store.keys().next();
      this.store.delete(lastElementKey);
    }

    this.store.delete(key);
    this.store.set(key, value);
  }
}

// Solution with Doubly Linked List

class DLLNode {
  key: number;
  value: number;
  next: DLLNode | null;
  prev: DLLNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache2 {
  private capacity: number;
  private data: Map<number, DLLNode> = new Map();
  private head = new DLLNode(0, 0);
  private tail = new DLLNode(8888, 0);

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.data.has(key)) return -1;

    let node = this.data.get(key);
    this.remove(node);
    this.addToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.data.has(key)) {
      let node = this.data.get(key);
      this.remove(node);
      this.addToHead(node);
      node.value = value;
      return;
    }

    if (this.data.size >= this.capacity) {
      let node = this.tail.prev;
      this.remove(node);
      this.data.delete(node.key);
    }

    let newNode = new DLLNode(key, value);
    this.addToHead(newNode);
    this.data.set(key, newNode);
    return;
  }

  remove(node: DLLNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToHead(node: DLLNode): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}
