
class Node {
    constructor(data, next) {
        this.data = data; 
        this.next = next;  
    }
}
function detectCycle(head) {
    // console.log("head",head);
    let hashMap = new Map();
    let current= head;
    while (current !== null) {
        if (hashMap.has(current)) {
            return true
        }
        hashMap.set(current,true)

        current += current.next;
    }
    return false
    
}










const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

// Check if there is a loop in the linked list
if (detectCycle(head)) {
    console.log("Loop detected in the linked list.");
} else {
    console.log("No loop detected in the linked list.");
}