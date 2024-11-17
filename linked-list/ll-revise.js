class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value){
    let newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let current = this.head;
    newNode.next = current;
    this.head = newNode

  }
  delete(value){
    let current = this.head;
    if (this.head.data === value) {
        this.head = this.head.next;
        return;
    }
    while (current !== null) {
        if (current.next.data === value) {
            // console.log("cu-->",current.next);
            current.next = current.next.next;   
        }
        current = current.next;
    }
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode
  }
  print() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
  search(value){
    let current = this.head;
    while (current !== null) {
        if (current.data === value) {
            return true
        }
        current = current.next;
    }
    return false
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print();
linkedList.delete(5);
linkedList.print();
console.log(linkedList.search(10));
console.log(linkedList.search(50));
