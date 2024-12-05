// Intution:
// 1. We need to remove k digits from the number so that the number formed is the smallest possible.
// 2. To do this, we need to keep the smallest digits at start. Get rid of larger ones === k
//   1  4  3   2   2   1  9
//   ^                        stack = [ 1, ]
//      ^                      stack = [ 1, 4, ]
//          ^                 stack = [  1 , 3 ] , got rid of 4 beacuse 4 > 3 and we dont get rid of 1 beacause 1  <3
//             ^              stack  =  [  1,  2  ]
//                  ^         stack =  [ 1,  2,  2]
//                      ^     stack  =  [ 1,  2,  1] ;;; K === 3


function removeKdigits(num, k) {
    if (k >= num.length) {
        return "0";
    }
    let stack = [];

    for (let i = 0; i < num.length; i++) {
        let digit = parseInt(num[i])
        console.log("check",stack[stack.length]-1 > digit);
        
        while (stack.length > 0 && stack[stack.length-1] > digit && k >0) {
            stack.pop();
            k--;
        }

        stack.push(digit);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    console.log("s",stack);
    return stack.join("").replace(/^0+/, "")
    



}



console.log(removeKdigits("1432219", 3));
