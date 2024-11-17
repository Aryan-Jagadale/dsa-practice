class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    isEmpty(){
        return this.top === null && this.size === 0; 
    }
    peek(){
        if (this.top) {
            return this.top.value;
        }
    }
    push(val){
        let newVal = new Node(val);
        if (!this.top) {
            this.top = newVal;
        }else{
            newVal.next = this.top;
            this.top  = newVal;
        }
        this.size +=1;
    }
    getSize(){
        return this.size;
    }
    pop(){
        if (!this.top) {
            return null;
        }
        console.log("this.top",this.top);
        let newTop = this.top.next;
        let val = this.top.value;
        this.top.next = null;
        this.top = newTop;
        this.size -=1
        return val;
    }

}






function runTests() {
    const stack = new Stack();

    console.log("Testing isEmpty on new stack:", stack.isEmpty() === true);

    stack.push(10);
    console.log("Testing push and peek:", stack.peek() === 10);
    console.log("Testing size after one push:", stack.getSize() === 1);
    
    stack.push(20);
    console.log("Testing push and peek again:", stack.peek() === 20);
    console.log("Testing size after two pushes:", stack.getSize() === 2);

    console.log("Testing pop:", stack.pop() === 20);
    console.log("Testing peek after pop:", stack.peek() === 10);
    console.log("Testing size after pop:", stack.getSize() === 1);

    console.log("Testing pop last element:", stack.pop() === 10);
    console.log("Testing isEmpty after all elements popped:", stack.isEmpty() === true);

    try {
        stack.pop();
        console.log("Pop on empty stack should throw error (this line shouldn't execute)");
    } catch (error) {
        console.log("Error on pop from empty stack:", error.message === "Stack is empty");
    }

    console.log("All tests finished.");
}

runTests();
