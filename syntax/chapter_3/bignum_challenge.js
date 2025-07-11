// BigNum Challenge: Large Number Operations
// Task: Implement a constructor for working with large numbers

function BigNum(value) {
    // TODO: Initialize BigNum with sign, exponent, and decimal array
    // Structure: { sign: 1 or -1, exp: number, dec: array of digits }
    // Support string, number, or BigNum input
    
}

// TODO: Implement toString method
BigNum.prototype.toString = function() {
    // TODO: Convert internal representation back to readable string
    // Handle sign, decimal point placement, etc.
    
};

// TODO: Implement add method
BigNum.prototype.add = function(other) {
    // TODO: Add two BigNum instances
    // Handle different exponents and signs
    
};

// TODO: Implement subtract method
BigNum.prototype.sub = function(other) {
    // TODO: Subtract two BigNum instances
    // Handle different exponents and signs
    
};

// TODO: Implement multiply method
BigNum.prototype.mul = function(other) {
    // TODO: Multiply two BigNum instances
    // Handle exponent addition and digit multiplication
    
};

// TODO: Implement divide method
BigNum.prototype.div = function(other) {
    // TODO: Divide two BigNum instances
    // Provide at least 10 decimal places precision
    
};

// Test cases:
// let a = new BigNum("123456789012345678901234567890.123456");
// let b = new BigNum("0.000001");
// let sum = a.add(b);
// sum.toString() should return "123456789012345678901234567890.123457" 