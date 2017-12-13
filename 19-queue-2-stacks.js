
/**
 * Implement a Queue using two stacks
 * @class Queue
 */
class Queue {
  constructor() {
    this.enQStack = [];
    this.deQStack = [];
  }
  enqueue(item) {
    // Enqueued items always go onto enqueue stack
    this.enQStack.push(item);
  }
  dequeue() {
    // If there's anything in the deQStack we just pop that off
    if (this.deQStack.length) {
      return this.deQStack.pop();
    }
    // If nothing in deQ, but something in enQ
    // Move everything over from enQ to deQ
    if (this.enQStack.length) {
      while (this.enQStack.length) {
        this.deQStack.push(this.enQStack.pop());
      }
      return this.deQStack.pop();
    }
    // if nothing in either stack then your Queue is empty
    return null;
  }
}

