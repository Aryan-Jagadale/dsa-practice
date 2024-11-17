class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    prepend(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            newNode.prev = null;
            this.head = newNode
        }
        this._length++;

    }

    add(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this._length++;
    }

    delete(data){
        // const newNode = new Node(data);
        let current = this.head;
        const elements = [];
        while (current !== null) {

        if (current.val === data) {
            let previousNode = current.prev;
            let nexNode = current.next;
            previousNode.next = nexNode;
            nexNode.prev = previousNode;
            return
            
        }
          current = current.next;
        } 
       
    }

    deleteHead(){
        // console.log(this.head);
        this.head = this.head.next;
        this.prev = null;        
    }

    deleteTail(){
        console.log(this.tail);
        this.tail = this.tail.prev;
        this.tail.next = null
    }

    print(){
        let current = this.head;
        const elements = [];
        while (current !== null) {
          elements.push(current.val);
          current = current.next;
        }
        console.log(elements.join(" <-> "));   
    }
    reverse() {
        let current = this.head;
        let temp = null;

        // Traverse the list and swap next and prev pointers for each node
        while (current !== null) {
            // Swap the next and prev pointers of the current node
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            // Move to the next node (which is actually the previous node after swapping)
            current = current.prev;
        }

        // Swap the head and tail
        if (temp !== null) {
            this.tail = this.head;
            this.head = temp.prev;
        }
    }

}


const doublelinkedList = new DoublyLinkedList();
doublelinkedList.add(10)
doublelinkedList.add(20);
doublelinkedList.add(30);
doublelinkedList.add(40);
doublelinkedList.prepend(5);
// doublelinkedList.deleteHead();
doublelinkedList.deleteTail();
doublelinkedList.reverse()


// doublelinkedList.delete(30);


doublelinkedList.print();

