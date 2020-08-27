const multiply = require('../src/multiply');

//check result of 2 * 3 is 6
test("Result of 2 * 3 is 6", ()=>{
    let result = {
        a : 2,
        b: 3
    }
    equal(multiply(result,6));
    }
);