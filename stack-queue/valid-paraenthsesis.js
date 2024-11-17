// 'use stack'
function isValidParentheses(s) {
    const stack = [];
    const map  = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        if (map[char]) {
            const topElemnet = stack.length ? stack.pop() : "#";
            if (map[char] !== topElemnet) {
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0
}




console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true