                            
// TreeNode structure
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    getInorder(root) {
        const inorder = [];
        let current = root;

        while (current !== null) {
            if (current.left === null) {
                inorder.push(current.val);
                current = current.right;
            }else{

                let prev = current.left;
                while (prev.right && prev.right !== current) {
                    prev = prev.right;
                }
                if (prev.right === null) {
                    prev.right = current;
                    current = current.left;
                }else{
                    prev.right = null;
                    inorder.push(current.val);
                    current = current.right;
                }
            }

        }

        return inorder;
    }
}

// Main function
function main() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.left.right.right = new TreeNode(6);

    const sol = new Solution();

    const inorder = sol.getInorder(root);

    console.log("Binary Tree Morris Inorder Traversal: " + inorder.join(" "));
}

// Run the main function
main();
                            
                        