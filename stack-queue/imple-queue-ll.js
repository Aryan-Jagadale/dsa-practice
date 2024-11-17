// Define the Node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the Queue class
  class Queue {
    constructor() {
      this.front = null; // The front of the queue
      this.rear = null; // The rear of the queue
      this.size = 0; // To track the number of elements in the queue
    }
  
    // Enqueue method to add an element to the end of the queue
    enqueue(value) {
      const newNode = new Node(value);
      if (this.rear) {
        this.rear.next = newNode;
      } else {
        this.front = newNode;
      }
      this.rear = newNode;
      this.size++;
    }
  
    // Dequeue method to remove an element from the front of the queue
    dequeue() {
      if (!this.front) return null; // Return null if queue is empty
      const removedValue = this.front.value;
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null;
      }
      this.size--;
      return removedValue;
    }
  
    // Peek method to get the value at the front without removing it
    peek() {
      return this.front ? this.front.value : null;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the queue
    getSize() {
      return this.size;
    }
  }
  





const queue = new Queue();

console.log(queue.isEmpty()); // true
console.log(queue.getSize()); // 0

// Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10
console.log(queue.getSize()); // 3
console.log(queue.isEmpty()); // false

// Dequeue elements and check the state of the queue
console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20
console.log(queue.peek()); // 30
console.log(queue.getSize()); // 1

queue.enqueue(40);
console.log(queue.peek()); // 30
console.log(queue.getSize()); // 2

// Dequeue remaining elements
console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // 40
console.log(queue.isEmpty()); // true
console.log(queue.getSize()); // 0

// Dequeue from an empty queue
console.log(queue.dequeue()); // null
console.log(queue.peek()); // null
