class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    const node = new BSTNode(value);
    if (value <= this.value) {
      // add to left
      if (!this.left) this.left = node;
      else this.left.add(value);
    }
    if (value > this.value) {
      // add to right
      if (!this.right) this.right = node;
      else this.right.add(value);
    }
  }

  // Check if there are more that 2 unique depths of leaves
  isBalanced() {
    // if there's no tree it's balanced
    if (!this) return true;
    
    // if there are > 2 unique depths then we know it cannot be superbalanced
    const depths = new Set();

    // ultimately nodes will store all of the leaves
    const nodes = [];
    nodes.push([this, 0]);

    while (nodes.length) {
      // get the most recently added (either the root or the right most not yet processed)
      const nodePair = nodes.pop();
      const [node, depth] = nodePair;

      // this is true if node is a leaf
      if (!node.left && !node.right) {
        depths.add(depth);
        if (depths.size > 2 || (depths.size === 2 && [...depths][1] - [...depths][0] > 1)) {
          return false;
        }
      } else {
        // if not a leaf, add left then right to the list of nodes
        if (node.left) {
          nodes.push([node.left, depth + 1]);
        }
        // adding right second means that we will traverse the right side depth first and then pack to left
        if (node.right) {
          nodes.push([node.right, depth + 1]);
        }
      }
    }
    return true;
  }

  depthFirstPre(counter = 0) {
    if (!this.right && !this.left) counter += 1;
    if (this.right) this.right.depthFirstPre(counter);
    if (this.left) this.left.depthFirstPre(counter);
    return counter;
  }
}

const myBst = new BSTNode(10);
myBst.add(5);
myBst.add(3);
myBst.add(7);
myBst.add(9);
myBst.add(8);
myBst.add(15);
myBst.add(12);
myBst.add(19);
console.log(myBst.depthFirstPre());


module.exports = BSTNode;
