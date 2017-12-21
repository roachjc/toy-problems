

/**
 * Reverses a linked list in place.
 * We move through list assigning each node's next value to the previous node
 * To do so we need to keep a reference to the next value to continue iteration
 * @param {object} head
 * @returns newHead
 */
function reverseLinkedList(head) {
  // get hold of the two pointers we need
  let current = head;
  let previous = null;

  while (current) {
    // keep a reference of current's next before reassigning
    const next = current.next;
    // reassign next to previous
    current.next = previous;

    // Move both pointers along
    previous = current;
    current = next;
  }
  return previous;
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D');

a.next = b;
b.next = c;
c.next = d;

console.log(reverseLinkedList(a));
