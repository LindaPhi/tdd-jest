const convertNb = require('../src/convertNumber');

test(
    //Given
    "Between 1 and 10",()=>{
        //When
        expect(convertNb(3))
        //Then
            .toBe("III")
    });