// Easy 7: Logical Operators
// Task: Check movie theater entry conditions

function canWatchMovie(age, hasTicket, hasParent) {
    // TODO: Return true if person can watch the movie
    // Conditions: 
    // - Must have ticket (hasTicket = true)
    // - Age >= 18 OR has parent (hasParent = true)
    // Use logical operators && and ||
    
}

// Test cases:
// canWatchMovie(20, true, false) should return true   // adult with ticket
// canWatchMovie(15, true, true) should return true    // child with ticket and parent  
// canWatchMovie(15, true, false) should return false  // child with ticket but no parent
// canWatchMovie(20, false, false) should return false // adult without ticket 