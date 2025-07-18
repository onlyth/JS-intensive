// 3.2.2 Text: Smart Trim
// Task: Trim string to max length without breaking words

function smartTrim(str, maxLength) {
    if (maxLength >= str.length) {
        return str;
    }
    
    else {
        return str.slice(0, maxLength)+"..."
    }
    

    // TODO: Trim string to maxLength, but don't break words
    // Hint: Find the last space before maxLength and trim there
    // Add "…" if string was trimmed
    
}

console.log(smartTrim("The quick brown fox jumps", 15))
console.log(smartTrim("Short", 10))
// Test cases:
// smartTrim("The quick brown fox jumps", 15) should return "The quick brown…"
// smartTrim("Short", 10) should return "Short" 