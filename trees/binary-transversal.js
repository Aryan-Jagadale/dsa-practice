class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {

    levelOrder(root) {
        let ans = [];

        if (root === null) {
            return ans;
        }

        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            let size = queue.length;
            let level = [];
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                // console.log("Node:",node);
                level.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            
            }  
            ans.push(level);          
        }
        return ans;
    }
}
function printArray(arr) {

    for (let num of arr) {
        console.log(num + " ");
    }
    console.log("\n");
}

// Creating a sample binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let solution = new Solution();

let result = solution.levelOrder(root);
console.log("Level Order Traversal: ", result);



                            
                        