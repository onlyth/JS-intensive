// 3.2.3 String Work: Capitalize Words
// Task: Make the first letter of each word uppercase

function capitalizeWords(text) {
    var a = text.split(" ")
    console.log(a)
    var a2 = a.map((value, index, array)=>{
        return (value.charAt(0).toUpperCase() + value.slice(1))
    })
    return a2.join(' ')
    // TODO: Capitalize first letter of each word
    // Hint: Use split(), map(), and join() methods
    // Don't forget about charAt() and toUpperCase()
    
}
console.log(capitalizeWords("hello world penis"))
// Test cases:
// capitalizeWords("hello world") should return "Hello World"
// capitalizeWords("javascript is awesome") should return "Javascript Is Awesome" 