class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(val) {
    this.root = new Node(val);
    this.size = 1;
  }

  insert(val) {
    this.size++;
    const newNode = new Node(val);
    const insertNode = node => {
      if (val < node.val) {
        !node.left ? (node.left = newNode) : insertNode(node.left);
      } else if (val > node.val) {
        !node.right ? (node.right = newNode) : insertNode(node.right);
      }
    };
    insertNode(this.root);
  }

  dfsPre() {
    let data = [];
    let current = this.root;

    let dfs = current => {
      if (current.left) dfs(current.left);
      data.push(current.val);
      if (current.right) dfs(current.right);
    };
    dfs(current);
    return data;
  }
}

const balancedBst = new BST(10);

balancedBst.insert(100);
balancedBst.insert(70);
balancedBst.insert(5);
balancedBst.insert(2);
console.log(balancedBst.dfsPre());
