class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function largestBST(root) {
    function dfs(node) {
        if (!node) return { isBST: true, size: 0, min: Infinity, max: -Infinity };

        const left = dfs(node.left);
        const right = dfs(node.right);

        // Check if the current subtree is a BST
        if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
            const size = left.size + right.size + 1;
            return { isBST: true, size, min: Math.min(node.val, left.min), max: Math.max(node.val, right.max) };
        }

        // If not a BST, return the max size found so far (propagate up)
        return { isBST: false, size: Math.max(left.size, right.size), min: 0, max: 0 };
    }

    return dfs(root).size;
}

// Example usage:
const root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(1),
        new TreeNode(8)
    ),
    new TreeNode(15,
        null,
        new TreeNode(7)
    )
);

console.log(largestBST(root)); // Output: 3 (BST subtree rooted at 5)
