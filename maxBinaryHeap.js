class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12, 11];
  }
  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] < this.values[parentIdx]) break;
      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = temp;
      idx = parentIdx;
    }
    return this;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

console.log(maxBinaryHeap.insert(1));
