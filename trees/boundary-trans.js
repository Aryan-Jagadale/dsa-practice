// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function isLeaf(root){
    return !root.left && !root.right;
}

function leftBoundary(root,result) {
    let curr = root.left;
    while (curr) {
        if (!isLeaf(curr)) {
            result.push(curr.val)
            
        }
        if (curr.left) {
            curr = curr.left
        }else{
            curr = curr.right
        }
    }
}


function rightBoundary(root,result) {
    let curr = root.right;
    const temp = [];
    while (curr) {
        if (!isLeaf(curr)) {
            temp.push(curr.val)
        }
        curr = curr.right ? curr.right : curr.left; 
    }
    result.push(...temp.reverse())
    return

}

function addLeaves(root, result) {
    if (!root) return;
    if (isLeaf(root)) {
        result.push(root.val);
        return;
    }
    addLeaves(root.left, result);
    addLeaves(root.right, result);
}
function boundaryOfBinaryTree(root) {
    let result = [];
    if (!isLeaf(root)) {
        result.push(root.val);
    }
    leftBoundary(root,result);
    addLeaves(root, result);
    rightBoundary(root,result);
    return result;
}

// Example Tree: [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9]
//      1
//     / \
//    2   3
//   / \   \
//  4   5   7
//     / \
//    8   9

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5,
            new TreeNode(8),
            new TreeNode(9)
        )
    ),
    new TreeNode(3, null, new TreeNode(7))
);

console.log(boundaryOfBinaryTree(root)); 
// Output: [1, 2, 4, 8, 9, 7, 3]
