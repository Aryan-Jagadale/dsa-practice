class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function recoverTree(root) {
    let firstElement = null;
    let secondElement = null;
    let prevElement = new TreeNode(Number.NEGATIVE_INFINITY);

    function traverse(node) {
        if (!node) return;

        traverse(node.left);

        if (firstElement === null && prevElement.val >= node.val) {
            firstElement = prevElement;
        }

        if (firstElement !== null && prevElement.val >= node.val) {
            secondElement = node;
        }

        prevElement = node;

        traverse(node.right);
    }

    traverse(root);

    if (firstElement && secondElement) {
        let temp = firstElement.val;
        firstElement.val = secondElement.val;
        secondElement.val = temp;
    }

    return root;
}

// Example binary tree: [3, 1, 4, null, null, 2]
let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);

let resp = recoverTree(root);
console.log("resp", resp); // [2, 1, 4, null, null, 3]

