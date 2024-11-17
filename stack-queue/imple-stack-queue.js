class StackUsingQueue {
    constructor(maxSize = Infinity) {
      this.queue1 = [];
      this.queue2 = [];
      this.maxSize = maxSize;
    }
  
    push(item) {
      if (this.size() === this.maxSize) {
        throw new Error('Stack is full');
      }
  
      // Move all elements from queue1 to queue2
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Add the new element to queue1
      this.queue1.push(item);
  
      // Move all elements back from queue2 to queue1
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
    }
  
    pop() {
      if (this.size() === 0) {
        throw new Error('Stack is empty');
      }
      return this.queue1.shift();
    }
  
    peek() {
      if (this.size() === 0) {
        throw new Error('Stack is empty');
      }
      return this.queue1[0];
    }
  
    size() {
      return this.queue1.length;
    }
  }
  
  // Test Cases
  // Basic operations
  const stack = new StackUsingQueue(5);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // Output: 1
  console.log(stack.pop()); // Output: 1
  console.log(stack.size()); // Output: 2
  
  // Size restriction
  const limitedStack = new StackUsingQueue(3);
  limitedStack.push(1);
  limitedStack.push(2);
  limitedStack.push(3);
  try {
    limitedStack.push(4); // This should throw an error
  } catch (error) {
    console.log(error.message); // Output: 'Stack is full'
  }
  
  // Empty stack
  const emptyStack = new StackUsingQueue();
  try {
    emptyStack.pop(); // This should throw an error
  } catch (error) {
    console.log(error.message); // Output: 'Stack is empty'
  }