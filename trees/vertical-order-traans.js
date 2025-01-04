// Example Tree:
//lv1      1
//        / \
//lv2    2   3






function verticalTraversal(root) {
    if (!root) return [];

    const nodes = [];

    function dfs(node,x,y) {
        if (!node) {
            return;
        }
        nodes.push([x,y,node.val]);
        dfs(node.left,x-1,y-1)
        dfs(node.right,x+1,y+1)
    }

    dfs(root,0,0);

    nodes.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2])
    console.log(nodes);

    const result = [];

    let currentX= -Infinity;

    for (const [x,y,val] of nodes) {
        if (x !== currentX) {
            currentX = x;
            result.push([]);
        }
        
        result[result.length - 1].push(val);
    }

    return result
    


}



const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};


console.log(verticalTraversal(root));