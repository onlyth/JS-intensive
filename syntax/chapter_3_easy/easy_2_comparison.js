// Easy 2: Number Comparison
// Task: Check if a number is within a given range

function isInRange(number, min, max) {
    return min<=number && number<=max;
    
    // TODO: Return true if number >= min AND number <= max
    // Use logical operator &&
    
}

// Test cases:
console.log(isInRange(5, 1, 10)) //should return true
console.log(isInRange(15, 1, 10)) //should return false  
console.log(isInRange(1, 1, 10)) //should return true
console.log(isInRange(10, 1, 10)) //should return true 