
function Node(data1, next1) {
    // Data stored in the node
    this.data = data1;
    // Pointer to the next node
    // in the list
    this.next = next1 || null;
}

// Function to return the lenght
// of loop when slow and fast are
// on the same node


// Function to find the length
// of the loop in a linked list
function lengthOfLoop(head) {

}

// Create a sample linked list with a loop
var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
var fourth = new Node(4);
var fifth = new Node(5);

// Create a loop from fifth to second
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// This creates a loop
fifth.next = second;

var loopLength = lengthOfLoop(head);

if (loopLength > 0) {
    console.log("Length of the loop:", loopLength);
} else {
    console.log("No loop found in the linked list.");
}

