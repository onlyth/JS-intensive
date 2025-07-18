// 3.2.1 Text: Replace Spaces with Underscores
// Task: Replace all spaces in a string with underscores

function underscoreSpaces(str) {
    //return str.replaceAll(' ', '_');
    
    // TODO: Replace all spaces with underscores
    // Hint: Use replace() method with a regular expression or string
    //another option: // 
    //return str.replace('/ /g', '_');
    var strmass = str.split(' ')
    var str2 = strmass.map((value)=>{
        return value
    })
    return str2.join('_')
}
console.log(underscoreSpaces("hello world"))
console.log(underscoreSpaces("Javascript is fun"))

// Test cases:
// underscoreSpaces("hello world") should return "hello_world"
// underscoreSpaces("JavaScript is fun") should return "JavaScript_is_fun" 