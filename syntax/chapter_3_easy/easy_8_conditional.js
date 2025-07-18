// Easy 8: Conditional Expressions
// Task: Determine age category

function getAgeCategory(age) {
    if (age<13) return 'child';
    if (age<20) return 'teenager';
    if (age<65) return 'adult';
    return 'senior';
    }
   
    // TODO: Return age category:
    // - if age < 13: "child"
    // - if age < 20: "teenager"  
    // - if age < 65: "adult"
    // - otherwise: "senior"
    // Use if/else if/else
    


// Test cases:
console.log(getAgeCategory(10)) // should return "child"
console.log(getAgeCategory(16)) // should return "teenager"
console.log(getAgeCategory(30)) // should return "adult"
console.log(getAgeCategory(70)) // should return "senior" 