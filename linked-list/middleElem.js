class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}


function findMiddle(head) {
    console.log("head",head);
    let fast = head;
    let slow = head
    while (fast && slow) {
        
        fast = fast.next.next; 
        
        slow = slow.next;  
    }

    return slow
    

}



const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);


// Find the middle node
const middleNode = findMiddle(head);

// Display the value of the middle node
console.log("The middle node value is: " + middleNode?.data || "");