// 1. ADD function → check undefined arguments
function add(a, b) {
    if (a === undefined || b === undefined) {
        return "Error: One or more arguments are missing!";
    }
    return a + b;
}

// 2. SUBTRACT function → use ES6 default parameters
function subtract(a = 0, b = 0) {
    return a - b;
}

// 3. MULTIPLY function → use ES6 rest parameters
function multiply(...nums) {
    if (nums.length === 0) return "No numbers provided!";
    
    return nums.reduce((product, num) => product * num, 1);
}

// 4. DIVIDE function → use 'arguments' object
function divide() {
    if (arguments.length < 2) {
        return "Need at least two numbers to divide!";
    }

    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            return "Error: Division by zero!";
        }
        result /= arguments[i];
    }
    return result;
}

// ---------------------
// ✅ Testing the functions
console.log("Add:", add(10, 5));             // 15
console.log("Add with missing arg:", add(10)); // Error message

console.log("Subtract:", subtract(20, 8));   // 12
console.log("Subtract with one arg:", subtract(20)); // 20 (20 - 0)

console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Multiply with one arg:", multiply(5)); // 5
console.log("Multiply with no arg:", multiply()); // No numbers provided!

console.log("Divide:", divide(100, 2, 5));   // 10  (100 ÷ 2 ÷ 5)
console.log("Divide with one arg:", divide(50)); // Need at least two numbers
console.log("Divide by zero:", divide(10, 0)); // Error: Division by zero
