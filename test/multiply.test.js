const multiply = require('../src/multiply');

//check if result of 2 * 3 is 6
test("Result of 2 * 3 is 6", ()=> {
    expect(multiply(2,3)).toBe(6);
});
//Result must be different of the addition of the both numbers
test("Not the result of the addition",()=>{
    expect(2+3).not.toBe(6);
    }
);