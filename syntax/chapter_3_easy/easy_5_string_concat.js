// Easy 5: String Concatenation
// Task: Create a greeting with a name

function createGreeting(firstName, lastName) {
    return "Hello, " + firstName.replace(/$/, ' ') + lastName.replace(/$/, '!')
    // TODO: Return string "Hello, [firstName] [lastName]!"
    // Use + operator to concatenate strings
    
}

// Test cases:
console.log(createGreeting("John", "Smith")) // should return "Hello, John Smith!"
console.log(createGreeting("Mary", "Johnson")) //should return "Hello, Mary Johnson!"
console.log(createGreeting("Alex", "Brown")) //should return "Hello, Alex Brown!" 
