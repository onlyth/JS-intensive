// 3.3.2 Boolean: XOR Chain
// Task: Return true if odd number of arguments is truthy

function xorChain(...args) {
    
    let arr_mod = args.filter(val=> val).length
    
    return `${arr_mod % 2 === 1} (${arr_mod} truthy values)`
    // concatenation variant: return (arr_mod % 2 === 1 ? true : false ) + " (" + arr_mod + " truthy values)"
    // TODO: Count truthy values and return true if count is odd
    // Hint: Use filter() to count truthy values
    // Then check if count % 2 === 1
    
}




// Test cases:
console.log(xorChain(true, false, true)) //should return false (2 truthy values)
console.log(xorChain(true, true, true)) //should return true (3 truthy values)
console.log(xorChain(false, false, false)) //should return false (0 truthy values) 