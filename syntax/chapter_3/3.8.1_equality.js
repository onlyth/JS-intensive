// 3.8.1 Equality: Explain Weird Equals
// Task: Explain why a == b returns true in JavaScript

function weirdEquals(a, b) {
    const obj = {}
    const key = `${typeof(a)}-${typeof(b)}`
    const aTypes = typeof(a)
    const bTypes = typeof(b)

}

   
   
    


  // TODO: Return explanation of how a == b conversion works
    // Hint: Show step-by-step type coercion process
    // Consider cases like: [] == false, "0" == 0, etc.
// Test cases:
// weirdEquals([], false) should return "[] → '' → 0, false → 0, 0 == 0 → true"
console.log(weirdEquals(0, '0')) // should return "'0' → 0, 0 == 0 → true"
// weirdEquals(null, undefined) should return "null == undefined → true (special case)" 


 /*const flowOfActions = {
        "string-number": (a,b)=>{
            const aNum = Number(a);
            return `"${a}" -> ${aNum}, ${aNum}==${b} -> ${aNum == b}`
        },
        "number-string": (a,b)=>{
            const bNum = Number(b);
            return `"${b}" -> ${bNum}, ${a}==${bNum} -> ${a == bNum}`
        },
        "boolean-string": (a,b)=>{
            const bBool= Boolean(b)
        },
        "string-boolean": (a,b)=>{
            const aBool = Boolean(a)
        },
        "number-object": (a,b)=>{
            
        },
        "object-number": (a,b)=>{

        },
        "object-string": (a,b)=>{

        },
        "string-object": (a,b)=>{

        },
        "null-undefined": (a,b)=>{

        },
        "undefined-null": (a,b)=>{

        }
    }*/