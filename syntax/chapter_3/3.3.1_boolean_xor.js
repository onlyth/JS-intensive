// 3.3.1 Boolean: XOR Operation
// Task: Implement logical exclusive OR (XOR)

function xor(a, b) {
    if ((a && !b) || (!a && b)) {
        return true;
    }
    else {
        return false
    }
    }
    // TODO: Return true if exactly one of a or b is true
    // Hint: XOR is true when operands are different
    // You can use: (a && !b) || (!a && b)
    
console.log(xor(true, false))
console.log(xor(true, true))
console.log(xor(false,false))
// Test cases:
// xor(true, false) should return true
// xor(true, true) should return false
// xor(false, false) should return false 