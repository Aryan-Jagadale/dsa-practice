class Queue {
  constructor(maxSize) {
    this.items = new Array(maxSize);
    this.maxSize = maxSize;
    this.length = 0; // Current length of queue
    this.frontIndex = 0;
    this.rearIndex = 0;
  }
  enqueue(val){
    if (this.length === this.maxSize) {
        return "FULL Q";
    }
        this.length +=1;
        this.items[this.rearIndex] = val;
        let va =  (this.rearIndex + 1) % this.maxSize;
        this.rearIndex = (this.rearIndex + 1) % this.maxSize;
  }
  dequeue() {
    if (this.length === 0) {
        return "Q Empty"
    }
    const item = this.items[this.frontIndex];
    let va = (this.frontIndex + 1) % this.maxSize;
    this.frontIndex = (this.frontIndex + 1) % this.maxSize;
    this.length -=1
    return item;
  }

  front() {
    if (this.length === 0) {
      return "Queue is empty";
    }
    return this.items[this.frontIndex];
  }

}

const queue = new Queue(3);  
queue.enqueue(10);
queue.enqueue(20);
// queue.enqueue(30);
queue.enqueue(40);
// console.log(queue.front());
console.log(queue.dequeue());
// console.log(queue.front());
queue.enqueue(50);
console.log(queue.dequeue());