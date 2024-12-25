/**
 * 
 *    Design a HashMap without using any built-in hash table libraries.

    Implement the MyHashMap class:

    MyHashMap() initializes the object with an empty map.
    void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
    int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
    void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 * 


 */

class LLNode {
  public value: number;
  public next: LLNode;
  public key: number;

  constructor(value, next, key) {
    this.value = value || 0;
    this.next = next || null;
    this.key = key || 0;
  }
}

class LinkedList {
  public head: LLNode = new LLNode(0, null, 0);

  put(key: number, value: number): void {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }

      current = current.next;
    }

    let newNode = new LLNode(value, this.head, key);

    this.head = newNode;
  }

  get(key: number): number {
    let current = this.head;

    while (current) {
      if (current.key === key) return current.value;

      current = current.next;
    }

    return -1;
  }

  remove(key: number) {
    if (!this.head) return;

    if (this.head.key === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }
}

const hash = (x: number, n: number) => {
  return x % n;
};

class MyHashMap {
  private ll: LinkedList = new LinkedList();
  private buckets: LinkedList[] = [];
  private n: number = 991;

  constructor() {
    for (let i = 0; i < this.n; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  put(key: number, value: number): void {
    let n = hash(key, this.n);
    this.buckets[n].put(key, value);
  }

  get(key: number): number {
    let n = hash(key, this.n);
    return this.buckets[n].get(key);
  }

  remove(key: number): void {
    let n = hash(key, this.n);
    this.buckets[n].remove(key);
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
