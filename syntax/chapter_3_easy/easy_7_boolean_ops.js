// Easy 7: Logical Operators
// Task: Check movie theater entry conditions

function canWatchMovie(age, hasTicket, hasParent) {
    return hasTicket == true && (age>=18 || hasParent == true)
    // TODO: Return true if person can watch the movie
    // Conditions: 
    // - Must have ticket (hasTicket = true)
    // - Age >= 18 OR has parent (hasParent = true)
    // Use logical operators && and ||
    
}

// Test cases:
console.log(canWatchMovie(20, true, false)) // should return true   // adult with ticket
console.log(canWatchMovie(15, true, true)) // should return true    // child with ticket and parent  
console.log(canWatchMovie(15, true, false)) // should return false  // child with ticket but no parent
console.log(canWatchMovie(20, false, false)) // should return false // adult without ticket 