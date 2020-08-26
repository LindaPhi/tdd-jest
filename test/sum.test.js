// Add the unit tests of the sum function here
const sum = require('../src/sum');

test('Valid number?', () => {
    let a = 1;
    let b = 2;

    expect(sum(a,b)).toBe(3);
});
test('Valid number?', () => {
    let a = 'b';
    let b = 2;

    expect(()=>sum(a,b)).toThrow(Error);
});
// test('Is it a numbers?', () => {
//     expect(sum())
//     throws(()=>{sum("j",6)}, "Parameters should be a number","Exception");
// });
//
// test('Calcule de la somme', () => {
//     expect(sum(1, 2)).toBe(3);
//
// });
