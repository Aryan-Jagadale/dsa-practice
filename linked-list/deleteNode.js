var deleteNode = function(node) {
    // console.log(node,"--nodes",nodes);
    node.val = node.next.val;
    node.next = node.next.next;
    //PREFER LEETCODE ::> https://leetcode.com/problems/delete-node-in-a-linked-list/
    
};

let nodes = [4,5,1,9]

const result = deleteNode(5)
console.log("res",result);



