class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   enqueue(val) {
//     const newNode = new Node(val);

//     if (!this.first) {
//       this.first = newNode;
//       this.last = this.first;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.size++;
//     return this;
//   }

//   dequeue() {
//     if (!this.first) return undefined;
//     let current = this.first;
//     this.first = current.next;
//     this.size--;
//     return current;
//   }
// }
// const queue = new Queue();

// console.log(queue.enqueue(`Hello`));
// console.log(queue.enqueue(`BYE`));
// console.log(queue.enqueue(`farewell`));
// console.log(queue.dequeue());

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    let temp;
    if (!this.first) {
      this.first = newNode;
    } else {
      temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    console.log(this);
    return (this.size += 1);
  }

  shift() {
    if (!this.first) return undefined;
    let current = this.first;
    this.first = current.next;
    this.size--;
    return current;
  }
}

const stack = new Stack();

console.log(stack.push(`Hello`));
console.log(stack.push(`goodbye!`));
console.log(stack.push(`farewell!`));
console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());
