// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to remove Nth node from end
function removeNthFromEnd(head, n) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length +=1 
        current = current.next;
    }
    let indexNode = length - n;
    // console.log("inde",indexNode);
    if (indexNode === n) {
        let newhead = head.next;
        head = null;
        return newhead;
    }
    let temp = head;
    while (temp !== null) {
        indexNode--;
        if (indexNode === 0) {
            // console.log("temp",temp);
            temp.next = temp.next.next
        }
        temp = temp.next;
    }
    // console.log("temp",temp);
    return head
    
    
}


function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let current = head;
    let output = [];
    while (current !== null) {
        output.push(current.val);
        current = current.next;
    }
    console.log(output.join(' -> '));
}

// Example usage
let head = createLinkedList([1]);
console.log("Original List:");
printLinkedList(head);


let updatedHead = removeNthFromEnd(head, 1);
// console.log("List after removing 2nd node from the end:");
printLinkedList(updatedHead);
