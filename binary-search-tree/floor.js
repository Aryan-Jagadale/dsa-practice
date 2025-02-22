class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findFloor(root, key) {
    let floor = -1;

    while (root) {
        if (root.value === key) {
            return root.value;
        }
        if (key > root.value) {
            floor = root.value;
            root = root.right;
        }else{
            root = root.left;
        }
        
    }

   
    return floor;
}

// Example usage:
// Constructing the BST
let root = new TreeNode(8);
root.left = new TreeNode(4);
root.right = new TreeNode(12);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);

let key = 5;
console.log(`Floor value of ${key} in BST is: ${findFloor(root, key)}`);