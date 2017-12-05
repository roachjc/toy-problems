class Bst {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value < this.value) {
      if (!this.left) this.left = new Bst(value);
      this.left.add(value);
    }
    if (value > this.value) {
      if (!this.right) this.right = new Bst(value);
      this.right.add(value);
    }
  }

  getLargestRecursive() {
    // concise, but O(h) space - h is height of bst
    if (this.right) return this.right.getLargest();
    return this.value;
  }

  getLargest() {
    // verbose but constant space
    let current = this;
    while (current) {
      if (!current.right) return current.value;
      current = current.right;
    }
  }

  getSecondLargest() {
    let current = this;
    while (current) {
      if (current.left && !current.right) return current.left.getLargest();
      if (current.right && !current.right.right && !current.right.left) return current.value;
      current = current.right;
    }
  }
}

const myBst = new Bst(10);
myBst.add(7);
myBst.add(3);
myBst.add(12);
myBst.add(18);
myBst.add(16);
myBst.add(14);
myBst.add(17);


console.log(myBst.getSecondLargest());
