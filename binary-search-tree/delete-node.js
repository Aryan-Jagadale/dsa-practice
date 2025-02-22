class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//     4
//    / \
//   2   7
//  / \
// 1   3
//

function deleteNode(root, key) {
    if (!root) return null;

    // ROOT condition
    if (root.val === key) {
        return helper(root);
    }
    let current = root;
    while (root !== null) {
        if (root.val > key) {
            if (root.left && root.left.val === key) {
                root.left = helper(root.left);
                break;
            } else {
                root = root.left;
            }
        }else{
            if(root.right !== null && root.right.val === key) {
                root.right = helper(root.right);
                break;
            }else{
                root = root.right;
            }
        }
    }
    return current;
}

function helper(node) {
    if (node.left === null) {
        return node.right;
    }else if (node.right === null) {
        return node.left;
    }
    let rightChild = node.right;
    let lastRight = findLastRight(node.left);
    lastRight.right = rightChild;
    return node.left;
}

function findLastRight(root) {
    if (root.right === null) {
        return root;
    }
    return findLastRight(root.right);
}

// Example:
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root = deleteNode(root, 2);
console.log(root);

