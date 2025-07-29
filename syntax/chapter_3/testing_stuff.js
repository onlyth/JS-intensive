/*
// TODO: Multiply only even numbers by 10, leave odd numbers unchanged
// Use map with an if statement or ternary operator

let arr = [1,2,3,4,5]
let arr_multiplied = arr.map(val=> {
    if (val%2===0){
    return val*10
}
    return val
}
)
*/


/*


let arr = [1,2,3]
let arr_multiplied = arr.map(function(val){
    return val *10
})
let arr_multiplied2 = arr.map(val=>val*10)*/


/*
// TODO: Replace even numbers with the string "even", and odd numbers with 0
// Use map with a ternary operator

let arr = [7,8,9,10]
let arr_modified = arr.map(val => val%2===0 ? "even" : 0)*/

/* 
WRONG EXAMPLE, VALINA !== TRUE BECAUSE VALINA -> NaN, TRUE -> 1 --> NaN !== 1
let arr = [0, 1, "", 3, null, 5]
let arr_modified = arr.map((valina, index)=> valina == true ? valina * index : valina)
*/

/*
// TODO: Multiply each truthy element by its index, leave falsy elements unchanged
// Use map with a truthy check (if statement or ternary operator)
let arr = [0, 1, "", 3, null, 5]
let arr_modified = arr.map((valina, index)=> valina ? valina * index : valina)
*/

/*[1, 2, 3].reduce((acc, curr) => {
  console.log("acc:", acc, "curr:", curr);
  return acc + curr;
}, 0);*/

let nums = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  console.log(`sum: ${sum}, num: ${nums[i]}`)
}

console.log(sum); // 10

