//PRINT ARRAY SUB-SEQUENCES whose SUM is k && print first array

function printF(ind,arr,ds,n,k,sum) {
    if (ind >= n) {
        if (sum === k) {
            console.log(ds);
            return true;
        }
        return false      
    }
    ds.push(arr[ind]);
    sum += arr[ind];

    if (printF(ind+1,arr,ds,n,k,sum) === true) {
        return true;
    } 


    ds.pop();
    sum -= arr[ind];

    if (printF(ind+1,arr,ds,n,k,sum) === true) {
        return true;
    }

    return false
    

}


function print_sub(arr,k) {
    let n = arr.length;
    let sum = 0;
    printF(0,arr,[],n,k,sum)
}

let array = [1,2,1];
let len = print_sub(array ,2);
console.log("ANS::> ", len);