                            
// Node class for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


function inorder(root, arr) {

    if (root === null) {
        return;
    }
    let stack = [];
    let node = root;

    while (true) {
        if (!node) {
            stack.push(node);
            node = node.left;
        }else{
            if (stack.length === 0) {
                break;
            }
            let temp = stack.pop();
            arr.push(temp.data);
            node = node.right;
        }
        
    }
    
}

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
                            
                        