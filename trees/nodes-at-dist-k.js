// Definition for a binary tree node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to print nodes at distance K from the target node
function printNodesAtDistanceK(root, target, k) {
    if (!root) return [];

    const result = [];


    function findSubtreeNodes(node, distance) {
        if (!node || distance < 0) return;
        if (distance === 0) {
            result.push(node.value);
            return;
        }
        findSubtreeNodes(node.left, distance - 1);
        findSubtreeNodes(node.right, distance - 1);
    }


    function dfs(node) {
        if (!node) return -1;

        if (node === target) {
            findSubtreeNodes(node, k);
            return 0;
        }

        const leftDistance = dfs(node.left);
        if (leftDistance !== -1) {
            if (leftDistance + 1 === k) {
                result.push(node.value);
            } else {
                findSubtreeNodes(node.right, k - leftDistance - 2);
            }
            return leftDistance + 1;
        }

        const rightDistance = dfs(node.right);
        if (rightDistance !== -1) {
            if (rightDistance + 1 === k) {
                result.push(node.value);
            } else {
                findSubtreeNodes(node.left, k - rightDistance - 2);
            }
            return rightDistance + 1;
        }

        return -1;
    }

    dfs(root);
    return result;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const target = root.left; // Node with value 2
const k = 2;
console.log(printNodesAtDistanceK(root, target, k)); // Output: [4, 5, 3]
