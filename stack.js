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

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.size++;
    }
    return this;
  }

  pop() {
    let popped = this.first;
    this.first = this.first.next;
    this.size--;
    return popped;
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
