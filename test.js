// Test sum() function from the app.js file
const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum() function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Test difference() function from the app.js file
const { difference } = require('./app.js');
test('subtracts 9 from 14 to equal 5', () => {

    // Inside the test we call our difference() function with 2 numbers
    expect (difference(14, 9)). toBe(5);

});

// Test product() function from the app.js file
const { product } = require('./app.js');
test('multiplies 5 and 8 to equal 40', () => {

    // Inside the test we call our product() function with 2 numbers
    expect (product(5, 8)). toBe(40);
    
});

// Test quotient() function from the app.js file
const { quotient } = require('./app.js');
test('divides 45 by 9 to equal 5', () => {

    // Inside the test we call our quotient() function with 2 numbers
    expect (quotient(45, 9)). toBe(5);
    
});




test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test ("3.21 dollars should be 469.5 yen", function(){
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.21);

    // If 1.07 dollars is one euro and 1 euro is 156.5 yen, then 3.21 dollars should be = (156.5 * (3.21/1.07))
    const expected = 156.5 * (3.21/1.07);

    // This is the comparison for the unit test
    expect(fromDollarToYen(3.21)).toBe(469.5) // 3.21 dollars is 3 euros and 3 euros is 3 * 156.5 yen

})




test ("313 yen should be 1.74 british pounds", function(){
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(313);

    // If 156.5 yen is one euro and 1 euro is 0.87 british pound, then 313 yen should be = (0.87 * (313/156.5))
    const expected  = 0.87 * (313/156.5);

    // This is the comparison for the unit test
    expect(fromYenToPound(313)).toBe(1.74)

})

