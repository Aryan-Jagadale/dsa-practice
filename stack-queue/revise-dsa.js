class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  sortLinkedList() {
    let zeroHead = new Node(-1); // Dummy head for zero list
    let oneHead = new Node(-1);  // Dummy head for one list
    let twoHead = new Node(-1);  // Dummy head for two list

    let zero = zeroHead, one = oneHead, two = twoHead;
    let current = this.head;

    // Split the linked list into three separate lists
    while (current) {
      if (current.value === 0) {
        zero.next = current;
        zero = zero.next;
      } else if (current.value === 1) {
        one.next = current;
        one = one.next;
      } else if (current.value === 2) {
        two.next = current;
        two = two.next;
      }
      current = current.next;
    }

    // Connect the three lists
    zero.next = oneHead.next || twoHead.next; // If no 1's, connect 0's to 2's
    one.next = twoHead.next;                 // Connect 1's to 2's
    two.next = null;                         // End the list

    // Update the head of the original list
    this.head = zeroHead.next;
  }

  print() {
    let temp = this.head;
    const result = [];
    while (temp) {
      result.push(temp.value);
      temp = temp.next;
    }
    console.log(result.join(" -> "));
  }
}

// Test Case
const list = new LinkedList();
list.add(2);
list.add(1);
list.add(0);
list.add(2);
list.add(1);
list.add(0);

console.log("Original List:");
list.print();

list.sortLinkedList();

console.log("Sorted List:");
list.print();
