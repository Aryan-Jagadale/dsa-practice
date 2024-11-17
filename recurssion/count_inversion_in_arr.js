function main(arr) {
    let n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
       for (let j = i+1; j < n; j++) {
        if (arr[i]>arr[j]) {
            count +=1
        }
        
       }
        
    }
    return count;
}


let arr = [5,3,2,1,4];
let ans = main(arr);
console.log("The ans is::>",ans);

