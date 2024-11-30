//   4    7   1   1     2   -3   -7  17   15   -16     
//                                                  [ 4  ]
//                                                  [ 4 ,7 ]
//                    Similarly                     [ 4, 7, 1,  1, 2 ]
//  Now at -3 : [stack[stack.length-1]] <  arr[i]   stack.pop()   [ 4, 7, 1,  1 ]
//  Colssion till [4,7]
// [stack[stack.length-1]] > arr[i] i++;
// Now at -7 :   [4,7]  [stack[stack.length-1]] =<  arr[i] stack.pop()
// Now at 17 : stack.push(17)    [ 4, 7, 17]
// Now at 15 : stack.push(15)    [ 4, 7, 17, 15]
// Now at -16 : arr[stack[stack.length-1]] =<  arr[i] stack.pop()
// Recusrsive.... return stack






var asteroidCollision = function(asteroids) {
    let stack = [];
    let n = asteroids.length;
    for (let i = 0; i < n; i++) {
        let ele = asteroids[i];
        if (ele > 0) {
            stack.push(ele);
        }else{
             while (stack.length>0 && stack[stack.length-1] > 0 && stack[stack.length-1] < Math.abs(ele)) {
                stack.pop();
             }
             if (stack.length > 0 && stack[stack.length-1] === Math.abs(ele)) {
                stack.pop()
             }else if( (stack.length === 0 && ele< 0) || ( stack[stack.length-1] < 0 && ele < 0)){
                stack.push(ele)
             }
        } 
    }

    return stack;    
};


let asteroids = [-2,-1,2,1];
console.log(asteroidCollision(asteroids));
