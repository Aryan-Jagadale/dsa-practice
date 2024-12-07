class StockSpanner {
    constructor() {
        this.stack = []; // Stack to store pairs of [price, index]
        this.index = -1; // Tracks the current index
    }

    next(price) {
        console.log("price--",price);
        let stack = this.stack;
        this.index++;
        if (stack.length === 0) {
            stack.push([price, this.index]);
            return 1;
        }

        while (stack.length && stack[stack.length - 1][0] <= price) {
            stack.pop();
        }

        let span = this.index - stack[stack.length - 1][1];

        stack.push([price, this.index]);
        

        return span;


    }
}
const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100)); // Output: 1
console.log(stockSpanner.next(80));  // Output: 1
console.log(stockSpanner.next(60));  // Output: 1
console.log(stockSpanner.next(70));  // Output: 2
console.log(stockSpanner.next(60));  // Output: 1
console.log(stockSpanner.next(75));  // Output: 4
console.log(stockSpanner.next(85));  // Output: 6
