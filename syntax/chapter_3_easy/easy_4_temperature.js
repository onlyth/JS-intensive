// Easy 4: Temperature Conversion
// Task: Convert temperature from Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return ((celsius*9)/5)+32
    // TODO: Convert degrees Celsius to Fahrenheit
    // Formula: F = C * 9 / 5 + 32
    
}

// Test cases:
console.log(celsiusToFahrenheit(100) )// should return 212  
console.log(celsiusToFahrenheit(20) )// should return 68
console.log(celsiusToFahrenheit(-10))//should return 14 
console.log(celsiusToFahrenheit(0) )// should return 32