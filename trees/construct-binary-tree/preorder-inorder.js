                            
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    buildTree(preorder, inorder) {
        const inMap = new Map();

        inorder.forEach((value, index) => {
            inMap.set(value, index);
        });
        const root = this.buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);
        return root;
    }
    buildTreeHelper(preorder, preStart, preEnd, inorder, inStart, inEnd, inMap) {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }

        const root = new TreeNode(preorder[preStart]);
        const inRoot = inMap.get(root.val);
        const numsLeft = inRoot - inStart;

        root.left = this.buildTreeHelper(preorder,preStart+1,preStart+numsLeft,inorder,
            inStart,inRoot-1,inMap);
        root.right = this.buildTreeHelper(preorder,preStart+numsLeft+1,
            preEnd,inorder,inRoot+1,inEnd,inMap);
        return root; 
    }
}

function printInorder(root) {
    if (!root) {
        return;
    }
    printInorder(root.left);
    console.log(root.val + " ");
    printInorder(root.right);
}


// Main function
function main() {
    const inorder = [9, 3, 15, 20, 7];
    const preorder = [3, 9, 20, 15, 7];

    const sol = new Solution();

    const root = sol.buildTree(preorder, inorder);

    console.log("Inorder of Unique Binary Tree Created: ");
    printInorder(root);
    console.log();
}

main();