class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  check() {
    let current = this.first;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
    return this;
  }
};

module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    if (this.first === this.last) this.last = null;
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
};
