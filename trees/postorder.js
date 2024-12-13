class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function postorder(root, arr) {
    if (root === null) {
        return;
    }
    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.data);
}


function postOrder(root) {
    const arr = [];
    postorder(root, arr);
    return arr;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const result = postOrder(root);

console.log("PostOrder Traversal: " + result.join(" "));