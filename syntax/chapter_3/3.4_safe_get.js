// 3.4 Null and Undefined + Strings: Safe Get
// Task: Safely extract value from object by deep path

function safeGet(obj, path) {
    // TODO: Navigate through object using path like "user.profile.name"
    // Return null if any level is missing
    // Hint: Split path by "." and use reduce() or loop
    // Check for null/undefined at each step
    
}

// Test cases:
// safeGet({user: {profile: {name: "John"}}}, "user.profile.name") should return "John"
// safeGet({user: {}}, "user.profile.name") should return null
// safeGet(null, "user.name") should return null 