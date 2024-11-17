//PRINT ARRAY SUB-SEQUENCES

function printF(ind,arr,ds,n) {
    if (ind >= n) {
        console.log(ds);
        return;
    }
    ds.push(arr[ind]);
    printF(ind+1,arr,ds,n);
    ds.pop();
    printF(ind+1,arr,ds,n);

}


function print_sub(arr) {
    let n = arr.length;
    printF(0,arr,[],n)
}

let array = [3,1,2];
let len = print_sub(array);
console.log("ANS::> ", len);