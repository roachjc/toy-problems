/**
 * Delete a node in a linked list by only taking a reference to the node to be deleted
 * Because we don't have access to the node before the node to be deleted, we just
 * take reassign the value of the node to be deleted to the next node and delete
 * the next node instead ... can create problems as the node has just been modified not
 * deleted. In case there are still references to the deleted node, that may create bugs
 * @param {object} node
 */
function deleteNode(node) {
  if (node.next) {
    // replace the to-be-deleted value with next's value
    node.value = node.next.value;
    // replace the to-be-deleted next ref with next's next ref
    node.next = node.next.next;
    // Will not work when deleting last node
  } else throw new Error('Cannot delete node at end of LL');
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
deleteNode(b);

console.log(a)