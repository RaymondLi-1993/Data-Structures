class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }

  print() {
    return this;
  }

  insert(val) {
    this.count++;
    const newNode = new Node(val);

    const insertNode = node => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left);
        }
      } else if (val > node.val) {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right);
        }
      }
    };
    insertNode(this.root);
  }

  find(val) {
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        if (val === current.val) {
          found = true;
          return current;
        }
      }
    }
    return undefined;
  }

  min() {
    let current = this.root;

    while (current.left) {
      current = current.left;
    }
    return current.val;
  }

  max() {
    let current = this.root;

    while (current.right) {
      current = current.right;
    }

    return current.val;
  }

  contains(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return true;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dfsPreOrder() {
    let result = [];
    let current = this.root;

    let dfs = current => {
      result.push(current.val);
      if (current.left) dfs(current.left);
      if (current.right) dfs(current.right);
    };
    dfs(current);
    return result;
  }

  dfsPostOrder() {
    let result = [];
    let current = this.root;

    let dfs = current => {
      if (current.left) dfs(current.left);
      if (current.right) dfs(current.right);
      result.push(current.val);
    };
    dfs(current);
    return result;
  }

  dfsInOrder() {
    let result = [];
    let current = this.root;

    let dfs = current => {
      if (current.left) dfs(current.left);
      result.push(current.val);
      if (current.right) dfs(current.right);
    };
    dfs(current);
    return result;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(val) {
    const bubbleUp = val => {
      let idx = this.value.length - 1;
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        if (val < this.value[parentIdx]) break;
        if (val > this.value[parentIdx]) {
          this.value[idx] = this.value[parentIdx];
          this.value[parentIdx] = val;
          idx = parentIdx;
        }
      }
    };
    this.value.push(val);
    bubbleUp(val);
  }

  extractMax() {
    const root = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;
    let element = this.value[0];
    while (true) {
      let idx = 0;
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let swap = null;
      if (leftChildIdx < this.value.length) {
        if (this.value[idx] < this.value[leftChildIdx]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.value.length) {
        if (
          (swap === null && this.value[idx] < this.value[rightChildIdx]) ||
          (swap !== null &&
            this.value[leftChildIdx] < this.value[rightChildIdx])
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
    console.log(this.value);
    return root;
  }
}

const maxHeap = new MaxBinaryHeap();

maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(100);
maxHeap.insert(5);
console.log(maxHeap.extractMax());
