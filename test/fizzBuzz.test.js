const displayNumber = require('../src/fizzBuzz');

    //Given
test("n number, display N",()=>{

    //When
    expect(displayNumber(2))

    //Then
    .toBe(2);
});
test(
    "multiple of 3, diplay Fizz",()=>{
        //When
        expect(displayNumber(6))

            //Then
            .toBe("Fizz")
    }
);
test(
    "multiple of 5, display Buzz",()=>{
        //When
        expect(displayNumber(40))

            //Then
            .toBe("Buzz")
    }
);