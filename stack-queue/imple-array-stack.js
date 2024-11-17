class Stack {
    constructor() {
      this.items = []; // Array to hold stack elements
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }

    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek());    // Output: 30
  console.log(stack.pop());     // Output: 30
  console.log(stack.size());    // Output: 2
  console.log(stack.isEmpty()); // Output: false
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  