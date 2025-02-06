class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

function buildTree(inorder, postorder) {
    const inMap = new Map();
    inorder.forEach((value, index) => {
        inMap.set(value, index);
    });
    const root = buildTreeHelper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, inMap);
    return root;
}

function buildTreeHelper(inorder,inorderStart,inorderEnd,postorder,postorderStart,postorderEnd,inMap) {
    if (inorderStart > inorderEnd || postorderStart > postorderEnd) {
        return null;
    }
    const root = new TreeNode(postorder[postorderEnd]);
    const inRoot = inMap.get(root.val);
    const numsLeft = inRoot - inorderStart;

    root.left = buildTreeHelper(inorder,inorderStart,inRoot-1,postorder,postorderStart,postorderEnd+numsLeft-1,inMap);
    root.right = buildTreeHelper(inorder,inRoot+1,inorderEnd,postorder,postorderEnd+numsLeft,postorderEnd-1,inMap);

    return root;
    
    
}


const inorder = [40, 20, 50, 10, 60, 30];
const postorder = [40, 50, 20, 60, 30, 10];
const root = buildTree(inorder, postorder);

console.log('root::>',root);
