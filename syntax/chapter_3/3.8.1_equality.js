// 3.8.1 Equality: Explain Weird Equals
// Task: Explain why a == b returns true in JavaScript

function weirdEquals(a, b) {
    // TODO: Return explanation of how a == b conversion works
    // Hint: Show step-by-step type coercion process
    // Consider cases like: [] == false, "0" == 0, etc.
    
}

// Test cases:
// weirdEquals([], false) should return "[] → '' → 0, false → 0, 0 == 0 → true"
// weirdEquals("0", 0) should return "'0' → 0, 0 == 0 → true"
// weirdEquals(null, undefined) should return "null == undefined → true (special case)" 