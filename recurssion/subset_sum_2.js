function printF(ind,ds,n,result,arr) {
   
        result.push([...ds]);
  

    for (let i = ind; i < n; i++) {
        if (i!==ind && arr[i] === arr[i-1]) {
            continue;
        }
        ds.push(arr[i]);
        printF(ind + 1,  ds, n, result, arr);
        ds.pop();
    }





}



function print_sub(arr) {
    let n = arr.length;
  let result = [];
  let ds = [];
  arr.sort((a,b)=>a-b);

  let res = printF(0, ds, n, result, arr);
  console.log(result);
}


let array = [3, 1, 2];
let len = print_sub(array);
console.log("ANS::> ", len);