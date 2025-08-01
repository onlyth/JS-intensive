// 3.3.2 Boolean: XOR Chain
// Task: Return true if odd number of arguments is truthy

function xorChain(...args) {
    
    var arr_mod = [...args]
    let count = 0;
   
    
    for (let i=0; i<arr_mod.length; i++) {
        if (arr_mod[i]){
            count++
     }
    }
    return `${count % 2 ===1} (${count} truthy values) `

    /*let arr_mod = args.filter(val=> val).length
    return `${arr_mod % 2 === 1} (${arr_mod} truthy values)`*/
    
    // concatenation variant: return (arr_mod % 2 === 1 ? true : false ) + " (" + arr_mod + " truthy values)"
    
    // TODO: Count truthy values and return true if count is odd
    // Hint: Use filter() to count truthy values
    // Then check if count % 2 === 1
    
}




// Test cases:
console.log(xorChain(true, false, true)) //should return false (2 truthy values)
console.log(xorChain(true, true, true)) //should return true (3 truthy values)
console.log(xorChain(false, false, false)) //should return false (0 truthy values) 