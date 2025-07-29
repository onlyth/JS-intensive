// TODO: Use reduce() to transform an array of user objects into an object
// where each key is the user's id and the value is the user's name
// Hint: Start with an empty object as the accumulator {}
// For each user, add a new key-value pair to the accumulator
// Return the accumulator at the end

const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 }
];

//Mutation - changes object
console.log(users.reduce((acc, curr)=> {
    acc[curr.id] = curr.name
    console.log(acc)
    return acc ;
}, {}))

//Immutability - creates new object each iterration. Easier debugging, but slower and more memory consumption.
result2 = users.reduce((acc,curr) => ({...acc, [curr.id]: curr.name}),{})
