const Bst = require('./superbalancedBST');
// IMPORTANT - this only checks ancestors and therefore is not correct!
/*
                (5)
                / \
              (3) (8)
            /   \
          (2)  *(6)* --> THIS IS NOT CORRECT - it is not < 5!
*/
const validBstINCORRECT = (bstRoot) => {
  // if we have reached a leaf we know that leaf can return true
  if (!bstRoot) return true;
  // check right and left branches if bstRoot not a leaf
  if (bstRoot.right && bstRoot.right <= bstRoot.value) return false;
  if (bstRoot.left && bstRoot.left > bstRoot.value) return false;
  // assuming branches are good, contininue to check branches of branches
  return validBstINCORRECT(bstRoot.right) && validBstINCORRECT(bstRoot.left);
};

// So instead we need to traverse the tree
// We do so depth first as space complexity is likely smaller than breadth first
const validBst = (bstRoot) => {
  // ALWAYS a stack (or callstack) for depth first
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({ node: bstRoot, upperBound: Infinity, lowerBound: -Infinity });

  // An empty stack means that we have made a full traversal of the tree
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();
    // Check if current node fits within bounds
    if (node.value <= lowerBound || node.value >= upperBound) return false;

    // Add next nodes to the stack. If current node is leaf no more is added.
    if (node.left) {
      nodeAndBoundsStack.push({ node: node.left, upperBound: node.value, lowerBound });
    }
    if (node.right) {
      nodeAndBoundsStack.push({ node: node.right, upperBound, lowerBound: node.value });
    }
  }

  // we have traversed the whole tree and not returned false therefore must be valid
  return true;
};

const validBstRecursive = (bstRoot, lowerBound = -Infinity, upperBound = Infinity) => {
  // Check we are not at the end of the branch. If we are that branch must be good
  if (!bstRoot) return true;
  // Check the value is within the range
  if (bstRoot.value >= upperBound || bstRoot.value <= lowerBound) return false;
  
  // continue checking through the tree
  return validBstRecursive(bstRoot.left, lowerBound, bstRoot.value)
      && validBstRecursive(bstRoot.right, bstRoot.value, upperBound);
};

const myBST = new Bst(5);
myBST.add(8);
myBST.add(3);
myBST.add(2);
// myBST.left.right = new Bst(6);

console.log(validBstINCORRECT(myBST)); // -- returns true
console.log(validBst(myBST)); // -- returns false
console.log(validBstRecursive(myBST)); // -- returns false

