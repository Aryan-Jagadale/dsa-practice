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
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  search(data) {
    if (this.head === null) {
      console.error("No head!");
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      //10->20->30
      // console.log("this.head",this.head);
      newNode.next = this.head;
      // console.log("new",newNode);
      this.head = newNode;
    }
  }
  delete(data) {
    // const newNode = new Node(data);
    if (this.head === null) {
      console.error("No head!");
      return;
    } else {
      // console.log("data",data);
      let current = this.head;
      let previousNode = current;
      while (current.next !== null) {
        if (current.data === data) {
          //code
          console.log("cuuuu", current);
          console.log("previousNode", previousNode);

          previousNode.next = current.next;
          return;
        }
        previousNode = current;
        current = current.next;
      }
    }
  }
  length() {
    if (this.head === null) {
      console.error("No head!");
      return;
    }
    let current = this.head;
    let count = 1;
    while (current.next !== null) {
      count += 1;
      current = current.next;
    }
    return count;
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
  deleteHead() {
    if (this.head === null) {
      return;
    }
    console.log(this.head);
    this.head = this.head.next;
  }

  deleteTail() {
    let current = this.head;
    while (current !== null) {
      if (current.next.next === null) {
        current.next = null;
      }
      current = current.next;
    }
  }
  insertionB4(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current !== null) {
        
        current =current.next;
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(12);
linkedList.append(20);
linkedList.append(8);
linkedList.append(7);
linkedList.append(100);
// linkedList.delete(20);
// linkedList.delete(8);
console.log("serach::>", linkedList.search(20));
console.log(linkedList.length());
// linkedList.deleteHead()
linkedList.deleteTail();
linkedList.insertionB4(20);

//https://omken.medium.com/mastering-linked-lists-in-javascript-95c35a9b99e6

linkedList.print();
