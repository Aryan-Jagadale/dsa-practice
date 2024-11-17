class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

function reverseLinkedList(head) {
    let temp = head;  
    let prev = null;  
    while (temp !== null) {  
        let front = temp.next;  
        temp.next = prev;  
        prev = temp;
        temp = front;  
    }
    return prev;  
}

function isPalindrome(head) {
   
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const newHead = reverseLinkedList(slow.next);
    console.log("newHead::>",newHead);
    let first = head;
    let second = newHead;

    while (second !== null) {
        if (first.data !== second.data) {
            return false
        }
        first = first.next;
    second = second.next;
    }

    return true
    
    

}  

  
  // Function to print the linked list
  function printLinkedList(head) {
      let temp = head;
      while (temp !== null) {
          console.log(temp.data + " ");
          temp = temp.next;
      }
      console.log();
  }
  
  // Main function
  function main() {
      const head = new Node(1);
      head.next = new Node(3);
      head.next.next = new Node(8);
      head.next.next.next = new Node(3);
      head.next.next.next.next = new Node(1);
  
      // Print the original linked list
      console.log("Original Linked List: ");
      printLinkedList(head);
  
      // Check if the linked list is a palindrome
      if (isPalindrome(head)) {
          console.log("The linked list is a palindrome.");
      } else {
          console.log("The linked list is not a palindrome.");
      }
  }
  
  // Call the main function to start the program
  main();
  
  