/**
 * The thing to remember here is this is effectively the same as just going through the whole list,
 * getting the length, then going through again to length-k. We are doing exactly the same steps
 * here but just in a different order. Do not be fooled into thinking this way is better!
 * @param {int} k
 * @param {node} head
 * @returns {node} kthToLast
 */
function kthToLastNode(k, head) {
  let kthNode = head;
  let runner = head;
  for (let i = 0; i < k; i += 1) {
    runner = runner.next;
  }
  while (runner.next) {
    runner = runner.next;
    kthNode = kthNode.next;
  }
  return kthNode;
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

console.log(kthToLastNode(2, a));
