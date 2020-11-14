class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
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
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    let current = this.first;
    this.first = current.next;
    this.length--;
    return current;
  }
}

const queue = new Queue();

console.log(queue.enqueue(`Hello`));
console.log(queue.enqueue(`BYE`));
console.log(queue.enqueue(`farewell`));
console.log(queue.dequeue());