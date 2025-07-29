// 3.4 Null and Undefined + Strings: Safe Get
// Task: Safely extract value from object by deep path

/*function safeGet(obj, path) {
    // TODO: Navigate through object using path like "user.profile.name"
    // Return null if any level is missing
    // Hint: Split path by "." and use reduce() or loop
    // Check for null/undefined at each step
    
    let pathkeys = path.split('.');
    console.log(pathkeys)
    let result = pathkeys.reduce((acc, curr)=> acc == null ? null : acc[curr], obj)
    return result == null ? null : result;
}*/

//Condition access operator use
function safeGet(obj, path){
    return path.split('.').reduce((acc,curr)=>
    acc?.[curr], obj) ?? null;
}

// Test cases:
console.log(safeGet({user: {profile: {name: "John"}}}, "user.profile.name"))// should return "John"
console.log(safeGet({user: {}}, "user.profile.name")) //should return null
console.log(safeGet(null, "user.name")) //should return null
console.log(safeGet({a: 1}, "a.b"))// вернёт undefined без проверки
