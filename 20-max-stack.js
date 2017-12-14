const Stack = require('./utils/stack');
/**
 * A stack that can return max value in stack in O(1)
 * Stack contents need to be ints
 * @class MaxStack
 */
class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.max = new Stack();
  }
  push(item) {
    // Push to max stack if we have a new max value
    if (!this.max.peek() || item >= this.max.peek()) {
      this.max.push(item);
    }
    // always push to stack anyway
    this.stack.push(item);
  }
  pop() {
    if (this.stack.peek()) {
      const popped = this.stack.pop();
      // If you're popping current max from stack, pop it from max too!
      if (popped === this.max.peek()) this.max.pop();
      return popped;
    }
    return null;
  }
  getMax() {
    return this.max.peek();
  }
}

const myMaxStack = new MaxStack();

myMaxStack.push(1)
myMaxStack.push(7)
myMaxStack.push(3)
myMaxStack.push(9)
myMaxStack.push(12)
myMaxStack.push(12)
myMaxStack.push(8)
myMaxStack.pop()
myMaxStack.pop()
myMaxStack.pop()
console.log(myMaxStack);
console.log(myMaxStack.getMax())
