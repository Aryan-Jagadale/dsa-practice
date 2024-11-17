//PRINT ARRAY SUB-SEQUENCES whose SUM is k && print first array

function printF(ind,arr,n,k,sum) {
    if (ind >= n) {
        if (sum === k) {
            return 1;
        }
        return false
        
    }
    
    sum += arr[ind];

    let l = printF(ind+1,arr,n,k,sum);
    sum -= arr[ind];

    let r = printF(ind+1,arr,n,k,sum);

    return l + r;
    

}


function print_sub(arr,k) {
    let n = arr.length;
    let sum = 0;
    let res = printF(0,arr,n,k,sum);
    console.log(res);
    
}

let array = [1,2,1];
let len = print_sub(array ,2);
console.log("ANS::> ", len);