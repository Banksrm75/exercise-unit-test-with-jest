// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to euros
    let valueInEuros = valueInDollar / 1.07;
    
    // Convert the valueInEuros to yen
    let valueInYen = valueInEuros * 156.5;

    // return the yen value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to euros
    let valueInEuros = valueInYen / 156.5;
    
    // Convert the valueInEuros to british pounds
    let valueInPounds = valueInEuros * 0.87;

    // return the pound value
    return valueInPounds;
}

function fromEuroToPound (valueInEuros){
    let valueInDollar = fromEuroToDollar(valueInEuros);
    let valueInYen = fromDollarToYen(valueInDollar);
    let valueInPounds = fromYenToPound(valueInYen);

    return valueInPounds;
}

console.log("1 euro = " + fromEuroToPound(1) + " pounds");

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function(s) to be used on other files (multiple functions are separated by commas)
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
