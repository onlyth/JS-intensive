// Easy 10: Type Checking
// Task: Determine value type in simple ways

function describeValue(value) {
    if (typeof value === "number") return "This is a number"
    if (typeof value === "string") return "This is a string"
    if (typeof value === "boolean") return "This is a boolean"
    if (value === null) return "This is null"
    if (value === undefined) return "This is undefined"
    return "Other type"
    // TODO: Return value description:
    // - if typeof value === "number": "This is a number"
    // - if typeof value === "string": "This is a string"  
    // - if typeof value === "boolean": "This is a boolean"
    // - if value === null: "This is null"
    // - if value === undefined: "This is undefined"
    // - otherwise: "Other type"
    
}

// Test cases:
console.log(describeValue(42)) //should return "This is a number"
console.log(describeValue("Hello")) //should return "This is a string"
console.log(describeValue(true)) //should return "This is a boolean"  
console.log(describeValue(null)) //should return "This is null"
console.log(describeValue(undefined)) //should return "This is undefined" 