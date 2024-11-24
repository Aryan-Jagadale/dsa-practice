function infixToPostfix(expression) {
    const precedence = {
        "^": 3,
        "*": 2,
        "/": 2,
        "+": 1,
        "-": 1
    };
    function isOperator(char) {
        return ["^", "*", "/", "+", "-"].includes(char);
    }

    function isOperand(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }

    let stack = [];
    let result = "";

    for (const ele of expression) {
        if (isOperand(ele)) {
            result += ele;
        }else if(ele === "("){
            stack.push(ele);
        }else if(ele === ")"){
            while (stack.length && stack[stack.length - 1] !== "("){
                result += stack.pop();
            }
            stack.pop();
        }else if (isOperator(ele)) {
            while (stack.length && precedence[ele] <= precedence[stack[stack.length-1]] && stack[stack.length-1] !== "("){
                result += stack.pop();
            }
            stack.push(ele);
        }
           
        
    }
    while (stack.length) {
        result += stack.pop();
    }

    return result;

}


const infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
const postfixExpression = infixToPostfix(infixExpression);

console.log("Infix Expression: ", infixExpression);
console.log("Postfix Expression: ", postfixExpression);