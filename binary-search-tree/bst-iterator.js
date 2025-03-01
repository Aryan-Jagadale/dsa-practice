class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._leftmostInorder(root);
    }

    _leftmostInorder(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        let topmostNode = this.stack.pop();
        if (topmostNode.right !== null) {
            this._leftmostInorder(topmostNode.right);
        }
        return topmostNode.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}

// Example usage:
// Assuming TreeNode is a class that represents a node in the BST
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
const iterator = new BSTIterator(root);
console.log(iterator.next());    // returns 3
console.log(iterator.next());    // returns 7
console.log(iterator.hasNext()); // returns true
console.log(iterator.next());    // returns 9
console.log(iterator.hasNext()); // returns true
console.log(iterator.next());    // returns 15
console.log(iterator.hasNext()); // returns true
console.log(iterator.next());    // returns 20
console.log(iterator.hasNext()); // returns false