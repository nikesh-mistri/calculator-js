const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 10000
    actual = sum(3000, 7000);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    expected = -9;
    actual = sum(-4, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 8;
    actual = sum(8, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 3;
    actual = subtract(9,6);
    expect(actual).toBe(expected);
  })

  test('can subtract two large positive numbers', () => {
    expected = 500000;
    actual = subtract(1000000, 500000);
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    expected = -2;
    actual = subtract(-6,-4);
    expect(actual).toBe(expected);
  })

  test('can subtract zero', () => {
    expected = 9;
    actual = subtract(9, 0);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
