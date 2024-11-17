class MinStack {
    constructor() {
        this.stack = [];
        this.mini = Number.MAX_SAFE_INTEGER; // Initialize mini to a high value
    }

    push(value) {
        const val = BigInt(value); // Convert to BigInt for handling large values
        if (this.stack.length === 0) {
            this.mini = val;
            this.stack.push(val);
        } else {
            if (val < this.mini) {
                // Store encoded value to track minimum
                this.stack.push(2n * val - this.mini);
                this.mini = val;
            } else {
                this.stack.push(val);
            }
        }
    }

    pop() {
        if (this.stack.length === 0) return;

        const el = this.stack.pop();
        if (el < this.mini) {
            // Decode the previous minimum value
            this.mini = 2n * this.mini - el;
        }
    }

    top() {
        if (this.stack.length === 0) return -1;

        const el = this.stack[this.stack.length - 1];
        if (el < this.mini) {
            return Number(this.mini); // If encoded, return the minimum
        }
        return Number(el); // Return top value if not encoded
    }

    getMin() {
        return Number(this.mini); // Return current minimum
    }
}







const minStack = new MinStack(5);
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.stack)
console.log(minStack.getMin()); // Returns -3
minStack.pop();
console.log(minStack.top());    // Returns 0
console.log(minStack.getMin()); // Returns -2
