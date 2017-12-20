
/**
 * Is a linked list cyclical?
 * @param {object} node 
 * @returns boolean
 */
function isLLCycle(node) {
  let fast = node.next;
  let slow = node;
  while (fast && fast.next) {
    if (fast === slow) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
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
d.next = b;

console.log(isLLCycle(a));
