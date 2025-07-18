// Easy 9: Working with Variables
// Task: Calculate rectangle area with intermediate variables

function calculateRectangleArea(width, height) {
    var P = 2*(width+height)
    var area = width*height
    var isSquare = width===height
    return {area:area, perimeter: P, isSquare: isSquare}
    // TODO: Create variables for intermediate calculations:
    // 1. Create variable perimeter = 2 * (width + height)
    // 2. Create variable area = width * height  
    // 3. Create variable isSquare = width === height
    // 4. Return object: {area: area, perimeter: perimeter, isSquare: isSquare}
    
}

// Test cases:
console.log(calculateRectangleArea(5, 3)) // should return {area: 15, perimeter: 16, isSquare: false}
console.log(calculateRectangleArea(4, 4)) // should return {area: 16, perimeter: 16, isSquare: true}
console.log(calculateRectangleArea(2, 8)) // should return {area: 16, perimeter: 20, isSquare: false} 