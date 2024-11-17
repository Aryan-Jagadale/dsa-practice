const memo = {};

const OPERATIONS = {
  '-': (x, y) => x - y,
  '+': (x, y) => x + y,
  '*': (x, y) => x * y
};


function isNumber(str) {
    return /^\d+$/.test(str);
}


function main(expression) {
    if (memo[expression]) {
        return memo[expression];
    }
    const result = [];
    if (isNumber(expression)) {
        result.push(parseInt(expression));
        return result;
    }
    for (let i = 0; i < expression.length; i++) {
        const c = expression[i];
        if (OPERATIONS[c]) {
            let leftResults = main(expression.substring(0,i));
            let rightExpressions = main(expression.substring(i+1));
            for (let a of leftResults) {
                for (let b of rightExpressions) {
                    result.push(OPERATIONS[c](a,b));
                }
                
            }

        }
    }
    memo[expression] =result;
    return result
    
};

let expression = "2-1-1";
let result = main(expression);
console.log("The result is",result);


