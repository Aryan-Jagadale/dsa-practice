function printF(arr,ds,map,result) {
  if (ds.length === arr.length) {
    result.push([...ds])
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    
    if (map[i] !== 1) {
        ds.push(arr[i]);
        map[i] = 1;
        printF(arr,ds,map,result);
        ds.pop();
        map[i] = 0;
    }
  }
}



function print_sub(arr) {
    let ds = [];
    let map = new Array(arr.length).fill(0);
    let result = [];

    printF(arr,ds,map,result);

    console.log(result);
    
}

let array = [1,2,3];
let len = print_sub(array);
console.log("ANS::> ", len);