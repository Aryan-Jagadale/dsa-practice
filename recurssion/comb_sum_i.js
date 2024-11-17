// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.


function printF(ind,target,ds,n,res,arr) {
    if (ind>=n) {
        if (target === 0) {
            res.push([...ds]);
            
        }
        return;
        
    }


    if (arr[ind] <= target) {
        ds.push(arr[ind]);
        printF(ind,target-arr[ind],ds,n,res,arr);
        ds.pop()
    }
    printF(ind+1,target,ds,n,res,arr);
}


function print_sub(arr,k) {
    let n = arr.length;
    let result  = []
    let res = printF(0,k,[],n,result,arr);
    console.log(result);
    
}

let array = [2,3,5];
let len = print_sub(array ,8);
console.log("ANS::> ", len);