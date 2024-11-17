class Node {
    constructor(data, next) {
        this.data = data; 
        this.next = next;  
    }
}

function detectLoop(head) {
    // let current = head;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow
        }

    }
    return null
}

// 1. Detect if there is loop
//  2. Find the starting point


const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

node5.next = node3;
const head = node1;
const loopStartNode = detectLoop(head);

if (loopStartNode) {
  console.log("Loop detected. Starting node of the loop is: " + loopStartNode.data);
} else {
  console.log("No loop detected in the linked list.");
}