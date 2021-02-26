// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class singlyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     let current = this.head;
//     let prev = current;

//     if (!this.head) return undefined;

//     while (current.next) {
//       prev = current;
//       current = current.next;
//       console.log(current.val);
//     }
//     this.tail = prev;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
// }
//   shift() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     this.head = current.next;
//     this.length--;
//     return current;
//   }

//   unshift(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//       this.length++;
//     } else {
//       const oldHead = this.head;
//       this.head = newNode;
//       newNode.next = oldHead;
//       this.length++;
//       return this;
//     }
//   }

//   get(val) {
//     let count = 0;
//     let current = this.head;
//     if (val < 0 || val >= this.length) return undefined;

//     while (count < val) {
//       current = current.next;
//       count++;
//     }
//     return current;
//   }

//   set(index, val) {
//     const node = this.get(index);
//     if (!node) return false;
//     node.val = val;
//     return true;
//   }

//   insert(index, val) {
//     const newNode = new Node(val);
//     if (index <= 0) {
//       this.unshift(val);
//       return this;
//     }
//     if (index > this.length) {
//       this.append(val);
//       return this;
//     }
//     let prev = this.get(index - 1);
//     let temp = prev.next;

//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//   }

//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();
//     let prevNode = this.get(index - 1);
//     let current = prevNode.next;
//     prevNode.next = current.next;
//     this.length--;
//     console.log(this);
//     return current;
//   }

//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let prev = null;
//     let next = node.next;
//     while (node) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       console.log(node.val);
//       node = next;
//     }
//     console.log(this);
//   }
// }

// const newList = new singlyLinkedList();

// newList.append(`hello`);
// newList.append(`bye`);
// newList.append(`fly`);
// newList.pop();

// console.log(newList);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list = class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  checkVals() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
    return this;
  }
};

module.exports = list;

//const newList = new SinglyLinkedList();

// newList.push(`hello`);
// newList.push(`goodbye!`);
// newList.push(`yessir!`);
// newList.checkVals();

//console.log(newList);
