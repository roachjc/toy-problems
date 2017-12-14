module.exports = class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    if (this.stack.length) {
      return this.stack.pop();
    }
    return null;
  }
  peek() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }
};
