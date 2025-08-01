// 3.8 Type Conversion: Convert to Boolean List
// Task: Convert all array values to boolean equivalents

function coerceToBooleanList(arr) {
    return arr.map((val)=> Boolean(val))
    // TODO: Convert each element to its boolean equivalent
    // Hint: Use map() and Boolean() constructor
    // Remember: 0, "", null, undefined, NaN, false are falsy
    
}

// Test cases:
console.log(coerceToBooleanList([0, "hello", null, {}, NaN])) // should return [false, true, false, true, false]
console.log(coerceToBooleanList([1, "", true, []])) //should return [true, false, true, true] 