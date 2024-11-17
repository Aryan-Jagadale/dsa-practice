function main(arr,n) {
    let ds = [];
    let ans = []
    let map = Array.from({length:n}).fill(0)
    test(arr,ds,map,ans)
    return ans
}

function test(arr,ds,map,ans) {
    if (ds.length === arr.length) {
        ans.push([...ds])
        return
    }

    for (let i = 0; i < arr.length; i++) {
        if (!map[i]) {
            map[i] = 1
            ds.push(arr[i]);
            test(arr,ds,map,ans)
            ds.pop();
            map[i] = 0
        }
        
    }
    
}




let arr=  [1,2,3];
let ans = main(arr,arr.length);
console.log("ans::>",ans);