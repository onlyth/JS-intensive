// Easy 6: String Length
// Task: Check if a string is long enough

function isLongEnough(text, minLength) {
    return minLength<text.length;

    // TODO: Return true if text length >= minLength
    // Use .length property to get string length
    
}

// Test cases:
console.log(isLongEnough("JavaScript", 5)) // should return true
console.log(isLongEnough("JS", 5)) // should return false
console.log(isLongEnough("Programming", 10)) // should return true  
console.log(isLongEnough("Code", 10)) // should return false 