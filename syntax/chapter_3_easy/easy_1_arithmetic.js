// Easy 1: Arithmetic Operations
// Task: Calculate the result of a mathematical expression

function calculate(a, b, c) {
    return ((a+b)*c)-a
    // TODO: Return the result of: (a + b) * c - a
    // Use parentheses for proper order of operations
    
}

// Test cases:
console.log(calculate(2, 3, 4)) //should return 18  // (2 + 3) * 4 - 2 = 20 - 2 = 18
console.log(calculate(1, 1, 5)) //should return 9   // (1 + 1) * 5 - 1 = 10 - 1 = 9
console.log(calculate(0, 2, 3)) //should return 6   // (0 + 2) * 3 - 0 = 6 - 0 = 6 