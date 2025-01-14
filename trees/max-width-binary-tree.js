// rightIndex- leftIndex +1




class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxWidthOfBinaryTree(root) {
    if (!root) return 0;
  
    let maxWidth = 0;
    const queue = [[root, 0]]; // Queue stores [node, index]

    while (queue.length > 0) {
        let lvlSize = queue.length;

        let levelStartIndex = queue[0][1];
        console.log("levelStartIndex",levelStartIndex);
        
        let first, last;

        for (let i = 0; i < lvlSize; i++) {
            const [node,index] = queue.shift();
            console.log("index",index);
            

            if (i === 0) {
                first = index-levelStartIndex;
            }
            if (i === lvlSize-1) {
                last = index-levelStartIndex;

            }
            if (node.left) {
                queue.push([node.left, 2*index+1]);   
            }
            if (node.right) {
                queue.push([node.right, 2*index+2]);   
            }
            
        }
        maxWidth = Math.max(maxWidth, last-first+1);
        
    }

    return maxWidth;
  

  }
  
  // Example Usage
  const root = new TreeNode(1);
  root.left = new TreeNode(3);
  root.right = new TreeNode(2);
  root.left.left = new TreeNode(5);
  root.left.right = new TreeNode(3);
  root.right.right = new TreeNode(9);
  
  console.log(maxWidthOfBinaryTree(root)); // Output: 4
  