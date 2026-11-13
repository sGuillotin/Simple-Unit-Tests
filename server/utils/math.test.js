const mathUtils = require('./math.js');


const testVars = {
    max: 20,
    min: 0
};

describe('add()', ()=> {
    //past in as many test cases as we want
    test('find the sum of two numbers', ()=>{
        expect(
            mathUtils.add(5, 10)
        ).toBe(
            15
        );
    });

    test('clamp num (result) to max', ()=>{
        expect( mathUtils.add(testVars.max, 1) ).toBe(testVars.max);
    });

    test('clamp num (result) to min', ()=>{
        expect( mathUtils.add(testVars.min, -51) ).toBe(testVars.min);
    });
});


describe('multiply()', ()=> {
    test('find the product of 2 nums',()=>{
        expect(mathUtils.multiply(5, 10)).toBe(50);
    });
    test('clamp num (result) to max',()=>{
        expect(mathUtils.multiply(testVars.max+1, 10)).toBe(testVars.max*10);
    });
    test('clamp num (result) to min',()=>{
        expect(mathUtils.multiply(testVars.min-1, 10)).toBe(testVars.min*10);
    });
});
