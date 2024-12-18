// leftsum = 0 rightsum = 0
//maxi = max(maxxi,0+0+nodeVal)// 9
// 9+ 0 == 9
// maxx = 15
// maxx = maxxi  = 15,15+7+20 = 42

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function findMaxPathSum(root, maxi) {
    if (root === null) return 0;

    let leftSum = Math.max(0,findMaxPathSum(root.left, maxi));
    let rightSum = Math.max(0,findMaxPathSum(root.right, maxi));

    maxi.value  = Math.max(maxi.value ,leftSum+rightSum+root.val);

    return Math.max(leftSum, rightSum) + root.val;

}

function maxPathSum(root) {
    let maxi = {value:-Infinity};

    findMaxPathSum(root, maxi);

    return maxi.value;
}


const root = new TreeNode(10, 
    new TreeNode(2, 
        new TreeNode(20), 
        new TreeNode(1)
    ), 
    new TreeNode(10, 
        null, 
        new TreeNode(-25, 
            new TreeNode(3), 
            new TreeNode(4)
        )
    )
);

console.log(maxPathSum(root));
