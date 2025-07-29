// TODO: Use reduce() to concatenate all strings in the array
// Add a space between words
// Do not add an extra space at the beginning or end

let words = ["I", "love", "JavaScript"];
//console.log(words.reduce((acc, cur) => acc + ` ${cur}`, '').trim());

console.log(words.slice(1).reduce((acc, cur) => acc + ` ${cur}`, words[0]));
