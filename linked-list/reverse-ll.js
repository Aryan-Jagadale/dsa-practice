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
        temp =front
    }

    return prev
}

const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);


// Reverse the linked list
console.log(reverseLinkedList(head));
