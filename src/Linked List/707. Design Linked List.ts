/**
 * 
 *  Implement the MyLinkedList class:

    MyLinkedList() Initializes the MyLinkedList object.
    int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
    void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
    void addAtTail(int val) Append a node of value val as the last element of the linked list.
    void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
    void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 * 
 */

class TNode {
  public value: number;
  public next: TNode;

  constructor(value, next) {
    this.value = value || 0;
    this.next = next || null;
  }
}

class MyLinkedList {
  private head: TNode | null;
  private size: number = 0;

  constructor() {}

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    return this._get(index)?.value;
  }

  _get(index: number): TNode | null {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;
    this.size++;

    if (index === 0) {
      let newNode = new TNode(val, this.head);
      this.head = newNode;
      return;
    }

    let current = this._get(index - 1);
    let oldNext = current.next;
    current.next = new TNode(val, oldNext);
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;
    this.size--;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this._get(index - 1);
    current.next = current?.next?.next;
  }
}


let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtHead(4);
myLinkedList.addAtHead(5);
myLinkedList.addAtIndex(3, 0);

myLinkedList.deleteAtIndex(2);
myLinkedList.addAtHead(6);
myLinkedList.addAtTail(7);
myLinkedList.get(4);

