// Definition for a binary tree node.
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  /**
   * Computes the minimum time required to burn the entire binary tree starting from the target node.
   * @param {Node} root - The root of the binary tree.
   * @param {number} target - The value of the target node from which the fire starts.
   * @return {number} - The minimum time (in time units) to burn the entire tree.
   */
  function minTimeToBurnTree(root, target) {
    if (!root) return 0;

    const parentMap = new Map();

    let targetNode = null;

    function dfs(node,parent){
        if (!node) return;
        
        if (node.val === target) targetNode = node;

        if (parent) {
            parentMap.set(node,parent);
        }
        dfs(node.left,node);
        dfs(node.right,node);
    }

    dfs(root,null);

    console.log("parentMap::>",parentMap);
    
    if (!targetNode) return 0;

    const visited = new Set();
    const queue = [];
    queue.push(targetNode);
    visited.add(targetNode);
    let time = 0;

    while (queue.length) {
        let size = queue.length;
        let burnedNew = false;

        for (let i = 0; i < size; i++) {
            const curr = queue.shift();

            if (curr.left && !visited.has(curr.left)) {
                queue.push(curr.left);
                visited.add(curr.left);
                burnedNew = true;
            }
            if (curr.right && !visited.has(curr.right)) {
                queue.push(curr.right);
                visited.add(curr.right);
                burnedNew = true;
            }

            if (parentMap.has(curr) && !visited.has(parentMap.get(curr))) {
                queue.push(parentMap.get(curr));
                visited.add(parentMap.get(curr));
                burnedNew = true;                
            } 
        }
        if (burnedNew) time++;

    }
    
    return time;
  }
  
  // ----- Example Usage -----
  // Constructing the binary tree:
  //         1
  //        / \
  //       2   3
  //      / \   \
  //     4   5   6
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.right = new Node(6);
  
  let target = 2;
  console.log("Minimum time to burn the tree:", minTimeToBurnTree(root, target)); 
  // Expected output: The time units it takes to burn the entire tree.
  