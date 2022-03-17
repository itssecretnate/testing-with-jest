const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

test("This should return two.", () => {
    expect(returnTwo()).toEqual(2);
});

describe("This tests the greeting functionality.", () =>{
    test("Greeting for James.", () => {
        let greetingMsg = greeting("James");
    
        expect(greetingMsg).toEqual("Hello, James.")
    })
    
    test("Greeting for Jill.", () => {
        let greetingMsg = greeting("Jill");

        expect(greetingMsg).toEqual("Hello, Jill.")
    })
});

describe("Math functions", () => {
    test("Testing addition 1+2", () => { expect(add(1,2)).toEqual(3) })

    test("Testing addition 5+9", () => { expect(add(5,9)).toEqual(14) })

    test("1 * 2", () => { expect(multiply(1,2)).toEqual(2) })

    test("1 / 2", () => { expect(divide(1,2)).toEqual(0.5) })

    test("1 - 2", () => { expect(subtract(1,2)).toEqual(-1) })
});
