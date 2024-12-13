class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}



function preorder(root,arr) {
    if (root === null) {
        return;
    }
    if (root &&root.data) {

        arr.push(root.data);
    }

    preorder(root.left,arr);

    preorder(root.right,arr)
}


function preOrder(root) {
    const arr = [];
    preorder(root, arr);
    return arr;
}





const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const result = preOrder(root);

console.log("Preorder Traversal: " + result.join(" "));