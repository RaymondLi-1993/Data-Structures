class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let prev = current;

    if (!this.head) return undefined;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      this.length++;
      return this;
    }
  }

  get(val) {
    let count = 0;
    let current = this.head;
    if (val < 0 || val >= this.length) return undefined;

    while (count < val) {
      current = current.next;
      count++;
    }
    console.log(current);
  }
}

const newList = new singlyLinkedList();

newList.append(`Hello`);
newList.append(`BYE`);
newList.append(`farewell!`);
newList.unshift(`pop`);
newList.unshift(`Hi There!`);
newList.get(4);
