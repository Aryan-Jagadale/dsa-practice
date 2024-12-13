class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

// Function to perform inorder traversal
// of the tree and store values in 'arr'
function inorder(root, arr) {

    if (root === null) {
        return;
    }

    inorder(root.left, arr);

    arr.push(root.data);

    inorder(root.right, arr);
}

// Function to initiate inorder traversal
// and return the resulting array
function inOrder(root) {

    const arr = [];

    inorder(root, arr);

    return arr;
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Getting inorder traversal
const result = inOrder(root);

// Displaying the inorder traversal result
console.log("Inorder Traversal: " + result.join(" "));