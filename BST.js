class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
    this.size = 1;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;

    let helper = node => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
        } else {
          helper(node.left);
        }
      } else {
        if (val > node.val) {
          if (!node.right) {
            node.right = newNode;
          } else {
            helper(node.right);
          }
        }
      }
    };
    helper(this.root);
    this.size += 1;
    return this;
  }

  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) {
        return true;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  DFS() {
    let result = [];
    let current = this.root;

    const traverse = node => {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return result;
  }
}

const BST = new BinarySearchTree(10);

BST.insert(12);
BST.insert(6);
BST.insert(55);
console.log(BST.DFS());
