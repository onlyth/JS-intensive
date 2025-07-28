//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 
function squareSum(numbers){
    var result = 0
    var k = numbers.length-1
    for (i=0; i<=k; i++){
        var z = numbers[i] ** 2
        result += z
    }
    return result;
}
