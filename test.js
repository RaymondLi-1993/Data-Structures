// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// // class Queue {
// //   constructor() {
// //     this.first = null;
// //     this.last = null;
// //     this.size = 0;
// //   }

// //   enqueue(val) {
// //     const newNode = new Node(val);

// //     if (!this.first) {
// //       this.first = newNode;
// //       this.last = this.first;
// //     } else {
// //       this.last.next = newNode;
// //       this.last = newNode;
// //     }
// //     this.size++;
// //     return this;
// //   }

// //   dequeue() {
// //     if (!this.first) return undefined;
// //     let current = this.first;
// //     this.first = current.next;
// //     this.size--;
// //     return current;
// //   }
// // }
// // const queue = new Queue();

// // console.log(queue.enqueue(`Hello`));
// // console.log(queue.enqueue(`BYE`));
// // console.log(queue.enqueue(`farewell`));
// // console.log(queue.dequeue());

// class Stack {
//   constructor() {
//     this.first = null;
//     this.size = 0;
//   }

//   push(val) {
//     const newNode = new Node(val);
//     let temp;
//     if (!this.first) {
//       this.first = newNode;
//     } else {
//       temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     console.log(this);
//     return (this.size += 1);
//   }

//   shift() {
//     if (!this.first) return undefined;
//     let current = this.first;
//     this.first = current.next;
//     this.size--;
//     return current;
//   }
// }

// const stack = new Stack();

// console.log(stack.push(`Hello`));
// console.log(stack.push(`goodbye!`));
// console.log(stack.push(`farewell!`));
// console.log(stack.shift());
// console.log(stack.shift());
// console.log(stack.shift());
// console.log(stack.shift());

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor(val) {
//     this.root = new Node(val);
//     this.size = 1;
//   }

//   insert(val) {
//     const newNode = new Node(val);
//     if (!newNode || !val) return undefined;
//     const traverse = (newNode, root) => {
//       if (root.val < newNode.val && !root.right) {
//         root.right = newNode;
//         this.size++;
//         return;
//       }

//       if (root.val > newNode.val && !root.left) {
//         root.left = newNode;
//         this.size++;
//         return;
//       }

//       newNode.val > root.val
//         ? traverse(newNode, root.right)
//         : traverse(newNode, root.left);
//     };
//     traverse(newNode, this.root);
//   }
// }

// const BST = new BinarySearchTree(10);

// console.log(BST.insert());

//console.log(BST);

// let name = [`Allan`, `Mike`];
// let status = [true, false];
// let projects = [`5`, `10`];
// let tasks = [`2`, `3`];

// let people = [];
// let length = name.length;

// let available = [];

class John {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deduct(amount) {
    async () => {
      this.balance = this.balance - amount;
      await setTimeout(() => {
        console.log(`John has ${this.balance} left`);
      }, 2000);
    };
  }

  checkBalance() {
    console.log(this.balance);
  }
}

const john = new John(`john`, 1500);
john.deduct(200);
//john.checkBalance();
